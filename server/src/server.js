//import express module
var express = require('express');
//import JSON body parser
var bodyParser = require('body-parser');
//import database functions
var database = require('./database');


var readDocument = database.readDocument;
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
var getCollection  = database.getCollection;

var validate = require('express-jsonschema').validate;
var app = express();
app.use(bodyParser.text());
app.use(bodyParser.json());
//pull static contends from build
app.use(express.static('../../client/build'));

/**
 * Given a feed item ID, returns a FeedItem object with references resolved.
 * Internal to the server, since it's synchronous.
 */
function getFeedItemSync(feedItemId) {
  var feedItem = readDocument('feedItems', feedItemId);
  feedItem.author = readDocument('users', feedItem.author);
  return feedItem;
}

function getFeedData(user) {
  var userData = readDocument('users', user);
  var feedData = readDocument('feeds', userData.feed);
  feedData.contents = feedData.contents.map(getFeedItemSync);
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

//gets the feed items for the homepage
app.get('/user/:userid/feed/', function(req, res){
  var userid = parseInt(req.params.userid, 10);
  //var fromUser = getUserIdFromToken(req.get('Authorization'));
  //if(userid === fromUser){
    res.send(getFeedData(userid));
  /*} else {
    res.status(401).end();
  }*/
});

//gets the bands the user is in
app.get('/user/:userid/bands/', function(req, res){
  var userid = parseInt(req.params.userid, 10);
  var bands = getCollection('bands');
  var userBands = [];
  for(var i in bands){
    if(bands[i].members.includes(userid)){
      userBands.push(bands[i]);
    }
  }
  res.send(userBands);
});

//gets the user object
app.get('/user/:userid/', function(req, res){
  var userid = parseInt(req.params.userid, 10);
  res.send(readDocument('users', userid));
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
