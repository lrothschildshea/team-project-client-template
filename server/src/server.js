//import express module
var express = require('express');
//import JSON body parser
var bodyParser = require('body-parser');
//import database functions
var database = require('./database');


var readDocument = database.readDocument;
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
var validate = require('express-jsonschema').validate;
var app = express();
app.use(bodyParser.text());
app.use(bodyParser.json());
//pull static contends from build
app.use(express.static('../client/build'));

/**
 * Given a feed item ID, returns a FeedItem object with references resolved.
 * Internal to the server, since it's synchronous.
 */
function getFeedItemSync(feedItemId) {
  var feedItem = readDocument('feedItems', feedItemId);
  // Resolve 'like' counter.
  feedItem.likeCounter =
    feedItem.likeCounter.map((id) => readDocument('users', id));
    // Assuming a StatusUpdate. If we had other types of
    // FeedItems in the DB, we would
    // need to check the type and have logic for each type.
    feedItem.contents.author =
      readDocument('users', feedItem.contents.author);
    feedItem.tag = readDocument("servicetags",feedItem.tag);
    return feedItem;
}

function getFeedData(user,type) {
  // Get the User object with the id "user".
  var userData = readDocument('users', user);
  // Get the Feed object for the user.
  var feedData;
  if(type === 1) {
     feedData = readDocument('academicfeeds', userData.Academic_feed);
  }else {
     feedData = readDocument('servicefeeds', userData.Service_feed);
  }
  // Map the Feed's FeedItem references to actual FeedItem objects.
  // Note: While map takes a callback function as an argument, it is
  // synchronous, not asynchronous. It calls the callback immediately.
  feedData.list_of_feeditems = feedData.list_of_feeditems.map(getFeedItemSync);
  return feedData;
}

function postStatusUpdate(user, contents,imgUrl,request,type) {
  var time = new Date().getTime();
  var newPost = {
    "view_count": 0,
    "likeCounter": [],
    // Taggs are by course_id
    "tag": 1,
    "list_of_comments":[],
    "contents": {
      "author": user,
      "timestamp": time,
      "request": request,
      "contents": contents,
      "imgUrl":imgUrl
    }
  }
  newPost = addDocument('feedItems',newPost);
  var userData = readDocument('users', user);
  var feedData;
  if(type === 1) {
     feedData = readDocument('academicfeeds', userData.Academic_feed);
     feedData.list_of_feeditems.unshift(newPost._id);
     writeDocument('academicfeeds', feedData);
  }else {
     feedData = readDocument('servicefeeds', userData.Service_feed);
     feedData.list_of_feeditems.unshift(newPost._id);
     writeDocument('servicefeeds', feedData);
  }
  return newPost;
}
/**
 * Get the feed data for a particular user.
 1 is academic feed
 2 is Service feed
*/
app.get('/user/:userid/feed/:feedtype', function(req, res) {
  var userid =  parseInt(req.params.userid,10);
  var feedType = parseInt(req.params.feedtype,10);
  // userid is a string. We need it to be a number.
  // Parameters are always strings.

    // Send response.
    res.send(getFeedData(userid,feedType));
});

//Rest database.
app.post('/restdb',function(req,res) {
  console.log("Resetting database");
  // This is a debug route, so don't do any Validation.
  database.resetDatabase();
  // res.send() sends an empty response with status code 200
  res.send();
});

app.put('/feeditem/:feeditemid',function(req,res) {
  var feedItemId = parseInt(req.params.feeditemid);
  var feedItem = readDocument("feedItems",feedItemId);
  feedItem.view_count = feedItem.view_count+1;
  writeDocument("feedItems",feedItem);
  res.status(201);
  res.send(JSON.stringify(feedItem.view_count));
});

app.get('/calendarEvent/:calendarEventId',function(req,res) {
  const calendarEventId = req.params.calendarEventId;
  var calendarEventItem=readDocument('calendarEvent', calendarEventId);
  res.status(200).send(calendarEventItem);
})
/**
 * Translate JSON Schema Validation failures into error 400s.
*/
app.use(function(err, req, res, next) {
  if (err.name === 'JsonSchemaValidation') {
    // Set a bad request http response status
    res.status(400).end();
  } else {
    // It's some other sort of error; pass it to next error middleware handler
    next(err); }
});

// listening on port 3000
app.listen(3000,function() {
  console.log('Example app listening on port 3000');
});
// Implement your server in this file.
// We should be able to run your server with node src/server.js
