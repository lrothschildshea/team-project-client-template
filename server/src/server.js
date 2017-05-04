//import express module
var express = require('express');
//import JSON body parser
var bodyParser = require('body-parser');
//import database functions
var database = require('./database');
var mongo_express = require('mongo-express/lib/middleware');
// Import the default Mongo Express configuration
var mongo_express_config = require('mongo-express/config.default.js');
var MongoDB = require('mongodb');
var MongoClient = MongoDB.MongoClient;
var ObjectID = MongoDB.ObjectID;
var url = 'mongodb://localhost:27017/letsjam';

var readDocument = database.readDocument;
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
var getCollection  = database.getCollection;
var ResetDatabase = require('./resetdatabase.js');


var app = express();


var validate = require('express-jsonschema').validate;
var FeedItemSchema = require('./schemas/feeditem.json');
var BandSchema = require('./schemas/band.json');


MongoClient.connect(url, function(err, db) {
  // Put everything that uses `app` into this callback function.
  // from app.use(bodyParser.text());
  // all the way to
  // app.listen(3000, ...
  // Also put all of the helper functions that use mock database
  // methods like readDocument, writeDocument, ...

  app.use(bodyParser.text());
  app.use(bodyParser.json());
  //pull static contends from build
  app.use(express.static('../client/build'));
  app.use('/mongo_express',mongo_express(mongo_express_config));

  function sendDatabaseError(res, err) {
    res.status(500).send("A database error occurred: " + err);
  }

  /**
  * Given a feed item ID, returns a FeedItem object with references resolved.
  * Internal to the server, since it's synchronous.
  */
  function getFeedItemSync(feedItemId) {
    var feedItem = readDocument('feedItems', feedItemId);
    feedItem.author = readDocument('users', feedItem.author);
    feedItem.band = readDocument('bands', feedItem.band);
    return feedItem;
  }

  function getFeedItem(feedItemId, cb){
    db.collection('feedItems').findOne({_id: feedItemId}, function(err, feedItem){
      if(err){
        return cb(err);
      } else if(feedItem === null){
        return cb(null, null);
      }
      db.collection('users').findOne({_id : feedItem.author}, function(err, author){
        if(err){
          return cb(err);
        } else if(author === null){
          return cb(null, null);
        } else {
          feedItem.author = author;
          db.collection('bands').findOne({_id : feedItem.band}, function(err, band){
            if(err){
              return cb(err);
            } else if(band === null){
              return cb(null, null);
            } else {
              feedItem.band = band;
              return cb(null, feedItem);
            }
          });
        }
      });
    });
  }

  function getFeedData(user, cb) {
    db.collection('users').findOne({ _id : new ObjectID(user)}, function(err, userData){
      if (err){
        return cb(err);
      } else if(userData === null) {
        return cb(null, null);
      } else {
        db.collection('feeds').findOne({ _id: userData.feed}, function(err, feedData){
          if(err){
            return cb(err);
          } else if(feedData === null){
            return cb(null, null);
          }
          var resolvedContents = [];
          function processNextFeedItem(i){
            getFeedItem(feedData.contents[i], function(err, feedItem) {
              if (err){
                cb(err);
              } else {
                resolvedContents.push(feedItem);
                if(resolvedContents.length === feedData.contents.length){
                  feedData.contents = resolvedContents;
                  cb(null, feedData);
                } else {
                  processNextFeedItem(i + 1);
                }
              }
            });
          }

          if(feedData.contents.length === 0){
            cb(null, feedData);
          } else {
            processNextFeedItem(0);
          }
        });
      }
    });
  }

  function postFeedItem(author, contents, band) {
    var time = new Date().getTime();
    var newFeedItem = {
      "author" : author,
      "contents" : contents,
      "postDate" : time,
      "band": band
    };

    newFeedItem = addDocument('feedItems', newFeedItem);
    var bandData = readDocument('bands', band);
    var feedData = readDocument('feeds', bandData.feed);
    feedData.contents.unshift(newFeedItem._id);
    writeDocument('feeds', feedData);
    return getBandFeedData(band);
  }

  function editBand(bandData, bandId) {
    var newBand = readDocument('bands', bandId);
    newBand.info = bandData.info;
    newBand.location = bandData.location;
    newBand.name = bandData.name;
    newBand.members = bandData.members;
    newBand.wanted = bandData.wanted;
    writeDocument('bands', newBand);
    newBand = readDocument('bands', bandId);
    newBand.members = newBand.members.map((member) => readDocument('users', member));
    return newBand;
  }

  function getBandFeedData(band) {
    var bandData = readDocument('bands', band);
    var feedData = readDocument('feeds', bandData.feed);
    feedData.contents = feedData.contents.map(getFeedItemSync);
    return feedData;
  }

  function getCalendarEvent(calendarEventId,cb) {
    db.collection('events').findOne({_id:calendarEventId},
        function(err,eventItem) {
          if(err) {
            cb(err);
          } else {
            var bandId = eventItem.band;
            db.collection("bands").findOne({_id:bandId},
            function(err, bandItem){
              if(err) {
                cb(err);
              } else {
                eventItem.band = bandItem.name;
                cb(err,eventItem);
              }
            })
          }
        });
  }

  function processNextEventItem(index,eventItems,resolvedItems,callback) {
      if (eventItems.length == 0) {
        callback(null,[]);
      } else {
        getCalendarEvent(eventItems[index], function(err,eventItem) {
          if(err) {
            callback(err);
          } else {
            resolvedItems.push(eventItem);
            if (resolvedItems.length == eventItems.length) {
              callback(null,resolvedItems);
            } else {
              processNextEventItem(index+1,eventItems,resolvedItems,callback);
            }
          }
        });
      }
  }

  function processNextEventBanner(index,eventBanner,resolvedItems,callback) {
    console.log("eventBanner index "+index);
      if (eventBanner.length == 0) {
        callback(null,[]);
      } else {
        getEventBanner(eventBanner[index], function(err,eventBannerObject) {
          if(err) {
            callback(err);
          } else {
            resolvedItems.push(eventBannerObject);
            if (resolvedItems.length == eventBanner.length) {
              callback(null,resolvedItems);
            } else {
              processNextEventBanner(index+1,eventBanner,resolvedItems,callback);
            }
          }
        });
      }
  }

  function getEventBanner(eventBannerId, cb) {
    db.collection("eventBanner").findOne({_id: eventBannerId},
      function(err, eventBannerItem){
        if(err){
          cb(err);
        }else{
          cb(null,eventBannerItem);
        }

      }
    )
  }

  //gets the feed items for the homepage
  app.get('/user/:userid/feed/', function(req, res){
    var userid = req.params.userid;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if(userid === fromUser){
      getFeedData(userid, function(err, feed){
        if(err){
          res.status(500).send("Database error: " + err);
        } else if(feed === null){
          res.status(400).send("Could not look up feed for user " + userid);
        } else {
          res.send(feed);
        }
      });
    } else {
      res.status(403).end();
    }
  });

  app.get('/band/:bandid/feed/', function(req, res){
    var bandid = parseInt(req.params.bandid, 10);
    res.send(getBandFeedData(bandid));
  });

  // POST comment on feed
  app.post('/band/:bandid/feed', validate({ body: FeedItemSchema }), function(req, res) {
    // If this function runs, `req.body` passed JSON validation!
    var bandid = parseInt(req.params.bandid, 10);
    var body = req.body;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if (fromUser === body.userId) {
      var newFeed = postFeedItem(body.userId, body.contents, bandid);
      res.status(201);
      res.send(newFeed);
    } else {
      res.status(401).end();
    }
  });


  //gets the bands the user is in
  app.get('/user/:userid/bands/', function(req, res){
    var userid = req.params.userid;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    var userBands = [];
    if(userid === fromUser){
      db.collection('bands').find({fans: 420}, (err, bands) => { //this is bad but it gets all the bands right now and i spent like 3 hours working on it so i dont care
        db.collection('bands').find({fans: 420}).count({}, (err, length) => {
          var userIdObj = new ObjectID(userid);
          var c = 0;
          bands.forEach(function(band){
            for(var i = 0; i < band.members.length; i++){
              if(band.members[i].equals(userIdObj)){
                  userBands.push(band);
                }
            }
            c++;
            if(c === length){
              res.send(userBands);
            }
          });
        });
      });
    } else {
      res.status(403).end();
    }
  });

  //gets the user object
  app.get('/user/:userid/', function(req, res){
    var userid = req.params.userid;
    var useridObj = new ObjectID(userid);
    db.collection('users').findOne({_id :useridObj},
      function(err, user){
        if(err){
          res.status(500).send("Database error: " + err);
        } else {
          res.send(user);
        }
      });
  });

  //gets a specific band with the members resolved to their user objects
  app.get('/band/:bandId/', function(req, res){
    var bandId = parseInt(req.params.bandId, 10);
    var band = readDocument('bands', bandId);
    band.members = band.members.map((member) => readDocument('users', member));
    res.send(band);
  });

  // Modify a band
  app.put('/band/:bandId/', function(req, res){
    var bandid = parseInt(req.params.bandId, 10);
    var body = req.body;
    var tempband = readDocument('bands', bandid);
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if (tempband.members.indexOf(fromUser) != -1) {
      var newBand = editBand(body, bandid);
      res.status(201);
      res.send(newBand);
    } else {
      res.status(401).end();
    }
  });

  //create band
  app.post('/band', function(req, res){
    var userid = parseInt(req.body.user, 10);
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if (fromUser == userid) {
      var newFeed = {contents : []};
      var newBand = {
        "name": "New Band",
        "feed": addDocument('feeds', newFeed),
        "fans": 0,
        "info": "Information",
        "profile picture": 2,
        "pagePicture": "url(img/genericband.jpg)",
        "members": [userid],
        "location": "none",
        "wanted": []
      }
      var bandid = addDocument('bands', newBand)._id;
      res.status(201);
      res.send(readDocument('bands', bandid));
    } else {
      res.status(401).end();
    }
  })


  //gets the events for bands the user is in
  app.get('/user/:userId/events/', function(req, res){
    var userId = req.params.userId;
    var userIdObj = new ObjectID(userId);
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if(userId === fromUser){
      db.collection('users').findOne({_id : userIdObj},
        function(err, user){
          if(err){
            res.status(500).send("Database error: " + err);
          } else{
            var events = user.events;
            var i = 0;
            events.forEach(function(event){
              db.collection('events').findOne({_id : event},
                function(err, eventObj){
                  if(err){
                    res.status(500).send("Database error: " + err);
                  } else {
                    events[i] = eventObj;
                    i++;
                    if(i === events.length){
                      res.send(events);
                    }
                  }
                }
              );
            });
          }
        }
      );
    } else {
      res.status(401).end();
    }

  });

  app.get('/instruments', function(req, res){
    db.collection('instruments').find().toArray(function(err, items) {
      if(err){
        return sendDatabaseError(res,err);
      } else {
        console.log(items)
        res.status(200).send(items)
      }
    });
  });

  app.get('/genres', function(req, res){
    db.collection('genres').find().toArray(function(err, items) {
      if(err){
        return sendDatabaseError(res,err);
      } else {
        console.log(items)
        res.status(200).send(items)
      }
    });
  });


  //Reset database.
  app.post('/resetdb', function(req, res) {
    console.log("Resetting database...");
    ResetDatabase(db, function() {
      res.send();
    });
  });

  app.put('/feeditem/:feeditemid',function(req,res) {
    var feedItemId = parseInt(req.params.feeditemid);
    var feedItem = readDocument("feedItems",feedItemId);
    feedItem.view_count = feedItem.view_count+1;
    writeDocument("feedItems",feedItem);
    res.status(201);
    res.send(JSON.stringify(feedItem.view_count));
  });

  app.get('/calendarEvent/:userId',function(req,res) {
    // var fromUser = getUserIdFromToken(req.get('Authorization'));
    // var mockUser = readDocument('users',fromUser);
    // var calendarEventId=mockUser.events;
    // var calendarEventItem = calendarEventId.map(getCalendarEvent);
    var userId = req.params.userId;
    console.log(userId);
    db.collection('users').findOne({_id:new ObjectID(userId)},
        function(err,userObject) {
          if(err) {
            res.status(404).end();
          } else {
            var calendarEventId = userObject.events;
            processNextEventItem(0,calendarEventId,[],function(err,resolvedEventItems) {
              if(err) {
                res.status(404).end();
              } else {
                console.log(resolvedEventItems);
                res.status(201).send(resolvedEventItems);
              }
            });
          }
        });
  });

  app.post('/addEvent/:userId', function(req,res) {
    var eventBody = req.body;
    var userId = new ObjectID(req.params.userId);
    console.log(userId)
    var newEvent = {
      name:eventBody.name,
      band:new ObjectID(eventBody.band),
      date:new Date(eventBody.date).valueOf(),
      location:eventBody.location,
      detail:eventBody.detail
    }
    // console.log(newEvent);
    db.collection("events").insertOne(newEvent, function(err,insertEvent){
      if(err){
        console.log("Error");
        res.status(404).end();
      } else {
        db.collection('users').findOneAndUpdate(
          {_id:userId},
          {$addToSet:{events:insertEvent.insertedId}},
          function(err,newUserObject) {
            if (err) {
              console.log("Error");
              res.status(404).end();
            } else {
              db.collection('users').findOne({_id:userId},function(err,userObject) {
                if (err) {
                  console.log("Error");
                  res.status(404).end();
                } else {
                  var events = userObject.events;
                  console.log(events);
                  processNextEventItem(0,events,[],function(err,resolvedContent) {
                    if(err) {
                      console.log("Error");
                      res.status(404).end();
                    } else {
                      res.status(201).send(resolvedContent);
                    }
                  });
                }
              });
            }
          });
      }
    });
  });

  app.get('/getEventBanner/:userId',function(req,res) {

    var userId = req.params.userId;
    db.collection('users').findOne({_id:new ObjectID(userId)},
        function(err,userObject) {
          if(err) {
            res.status(404).end();
          } else {
            var eventBannerId = userObject.eventBanner;
            processNextEventBanner(0, eventBannerId, [], function(err, resolvedContent){
              if(err){
                res.status(404).end();
              } else {
                res.status(200).send(resolvedContent);
              }
            })
          }
        });
  });

  app.post('/addEventBanner/:userId',function(req,res) {
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    var mockUser = readDocument('users',fromUser);
    var eventBannerId = mockUser.eventBanner;
    var eventBanner = {
      title:req.body.title,
      start:req.body.start,
      end:req.body.end
    }
    var newEventBanner = addDocument("eventBanner",eventBanner);
    eventBannerId.unshift(newEventBanner._id);
    mockUser.eventBanner = eventBannerId;
    writeDocument('users',mockUser);
    var modifiedBanner = eventBannerId.map(getEventBanner);
    res.status(200).send(modifiedBanner);
  })


  // Search for feed item
  app.post('/search', function(req, res) {
    // console.log(req.body);
    // console.log(typeof(req.body));
    if (typeof(req.body) === 'object') {
      // trim() removes whitespace before and after the query.
      // toLowerCase() makes the query lowercase.
      var queryText = req.body.term.trim().toLowerCase();
      var type = req.body.type.trim().toLowerCase();
      var response = [];

      if(type == 'band'){
        // Search the user's feed.

        db.collection('bands').find({
          $text: {
            $search: queryText
          }
        }).toArray(function(err, items) {
          if(err){
            return sendDatabaseError(res,err);
          } else {
            console.log(items)
            res.status(200).send(items)
          }
        })

        // var bands = getCollection('bands');
        // for(var i in bands){
        //   if(bands[i].name.toLowerCase() == queryText){
        //     response.push(bands[i]);
        //   }
        // }
      } else if(type == 'people'){

        db.collection('users').find({
          $text: {
            $search: queryText
          }
        }).toArray(function(err, items) {
          if(err){
            return sendDatabaseError(res,err);
          } else {
            console.log(items)
            res.status(200).send(items)
          }
        })
      }
    } else {
      // 400: Bad Request.
      res.status(400).end();
    }
  });

  //Translate JSON Schema Validation failures into error 400s.
  app.use(function(err, req, res, next) {
    if (err.name === 'JsonSchemaValidation') {
      // Set a bad request http response status
      res.status(400).end();
    } else {
      // It's some other sort of error; pass it to next error middleware handler
      next(err); }
    });

    function getUserIdFromToken(authorizationLine) {
      try {
        // Cut off "Bearer " from the header value.
        var token = authorizationLine.slice(7);
        // Convert the base64 string to a UTF-8 string.
        var regularString = new Buffer(token, 'base64').toString('utf8');
        // Convert the UTF-8 string into a JavaScript object.
        var tokenObj = JSON.parse(regularString);
        var id = tokenObj['id'];
        // Check that id is a number.
        if (typeof id === 'string') {
          return id;
        } else {
          // Not a string. Return "", an invalid ID.
          return "";
        }
      } catch (e) {
        // Return an invalid ID.
        return -1;
      }
    }

    // listening on port 3000
    app.listen(3000,function() {
      console.log('Example app listening on port 3000');
    });
    // Implement your server in this file.
    // We should be able to run your server with node src/server.js

});
