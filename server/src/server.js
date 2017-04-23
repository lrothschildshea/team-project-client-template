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
app.use(express.static('../client/build'));

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

function getCalendarEventSyn(calendarEventId) {
  var calendarEventItem=readDocument('events', calendarEventId);
  return calendarEventItem;
}

function getEventBannerSyn(eventBannerId) {
  var eventBannerItem=readDocument('eventBanner', eventBannerId);
  return eventBannerItem;
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

//gets a specific band with the members resolved to their user objects
app.get('/band/:bandId/', function(req, res){
  var bandId = parseInt(req.params.bandId, 10);
  var band = readDocument('bands', bandId);
  band.members = band.members.map((member) => readDocument('users', member));
  res.send(band);
});


//gets the events for bands the user is in
app.get('/user/:userId/events/', function(req, res){
  var userId = parseInt(req.params.userId, 10);
  var user = readDocument('users', userId);
  var events = user.events.map((event) => readDocument('events', event));
  res.send(events);
});


//Reset database.
app.post('/resetdb',function(req,res) {
  console.log("Resetting database");
  database.resetDatabase();
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

app.get('/calendarEvent/:userId',function(req,res) {
  const userId = req.params.userId;
  var mockUser = readDocument('users',userId);
  var calendarEventId=mockUser.events;
  var calendarEventItem = calendarEventId.map(getCalendarEventSyn);
  // console.log(calendarEventItem);
  res.status(200).send(calendarEventItem);
});

app.post('/addEvent/:userId',function(req,res) {
  var userId = req.params.userId;
  var mockUser = readDocument('users',userId);
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
  var events = eventIds.map(getCalendarEventSyn);
  res.status(200).send(events);
});

app.get('/getEventBanner/:userId',function(req,res) {
  var userId = req.params.userId;
  var mockUser = readDocument('users',userId);
  var eventBannerId=mockUser.eventBanner;
  var eventBannerItem = eventBannerId.map(getEventBannerSyn);
  res.status(200).send(eventBannerItem);
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
