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
var ResetDatabase = ('./resetdatabase');


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

  function getFeedData(user) {
    var userData = readDocument('users', user);
    var feedData = readDocument('feeds', userData.feed);
    feedData.contents = feedData.contents.map(getFeedItemSync);
    return feedData;
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

  function getEventBanner(eventBannerId) {
    var eventBannerItem=readDocument('eventBanner', eventBannerId);
    return eventBannerItem;
  }

  //gets the feed items for the homepage
  app.get('/user/:userid/feed/', function(req, res){
    var userid = parseInt(req.params.userid, 10);
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if(userid === fromUser){
      res.send(getFeedData(userid));
    } else {
      res.status(401).end();
    }
  });

  //gets the feed items for the homepage
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
    var userid = parseInt(req.params.userid, 10);
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if(userid === fromUser){
      var bands = getCollection('bands');
      var userBands = [];
      for(var i in bands){
        if(bands[i].members.includes(userid)){
          userBands.push(bands[i]);
        }
      }
      res.send(userBands);
    } else {
      res.status(401).end();
    }
  });

  //gets the user object
  app.get('/user/:userid/', function(req, res){
    var userid = parseInt(req.params.userid, 10);
    res.send(readDocument('users', userid));
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
    var userId = parseInt(req.params.userId, 10);
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if(userId === fromUser){
      var user = readDocument('users', userId);
      var events = user.events.map((event) => readDocument('events', event));
      res.send(events);
    } else {
      res.status(401).end();
    }
  });

  app.get('/instruments', function(req, res){
    var instruments = getCollection('instruments')
    res.send(instruments);
  });

  app.get('/genres', function(req, res){
    var genres = getCollection('genres')
    res.send(genres);
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

  app.post('/addEvent/:userId',function(req,res) {
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    var mockUser = readDocument('users',fromUser);
    var eventBody = req.body;
    var eventIds = mockUser.events;
    var newEvent = {
      name:eventBody.name,
      band:eventBody.band,
      date:new Date(eventBody.date).valueOf(),
      location:eventBody.location,
      detail:eventBody.detail
    }
    var newEvent_id = addDocument('events',newEvent)._id;
    eventIds.unshift(newEvent_id);
    mockUser.events = eventIds;
    writeDocument('users',mockUser);
    var events = eventIds.map(getCalendarEvent);
    res.status(200).send(events);
  });

  app.get('/getEventBanner/:userId',function(req,res) {
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    var mockUser = readDocument('users',fromUser);
    var eventBannerId=mockUser.eventBanner;
    var eventBannerItem = eventBannerId.map(getEventBanner);
    res.status(200).send(eventBannerItem);
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
        if (typeof id === 'number') {
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
