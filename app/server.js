import {readDocument, writeDocument, addDocument, readList} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
 export function search(searchString, bandOrPerson, instrument, genre, zipcode, cb) {
   // Get the User object with the id "user".
   // Get the Feed object for the user.
   var instrumentData = readList('users');
   // Map the Feed's FeedItem references to actual FeedItem objects.
   // Note: While map takes a callback function as an argument, it is
   // synchronous, not asynchronous. It calls the callback immediately.
   // Return FeedData with resolved references.
   // emulateServerReturn will emulate an asynchronous server operation, which
   // invokes (calls) the "cb" function some time in the future.
   emulateServerReturn(instrumentData, cb);
 }

 export function getFeedData(user, cb) {
   // Get the User object with the id "user".
   var userData = readDocument('users', user);
   // Get the Feed object for the user.
   var feedData = readDocument('feeds', userData.feed);
   // Map the Feed's FeedItem references to actual FeedItem objects.
   // Note: While map takes a callback function as an argument, it is
   // synchronous, not asynchronous. It calls the callback immediately.
   feedData.contents = feedData.contents.map(getFeedItemSync);
   // Return FeedData with resolved references.
   // emulateServerReturn will emulate an asynchronous server operation, which
   // invokes (calls) the "cb" function some time in the future.
   emulateServerReturn(feedData, cb);
 }


function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

function getFeedItemSync(feedItemId) {
  var feedItem = readDocument('feedItems', feedItemId);
  feedItem.author = readDocument('users', feedItem.author);
/*  feedItem.comments.forEach((comment) => {
    comment.author = readDocument('users', comment.author);
  });*/
  feedItem.band = readDocument('bands', feedItem.band);
  return feedItem;
}

function getCalendarEventSyn(calendarEventId) {
  var calendarEventItem=readDocument('calendarEvent', calendarEventId);
  return calendarEventItem;
}
function getCalendarEvent(user,cb){
  var calendarEventId=user.calendarEvent;
  var calendarEventItem = calendarEventId.map(getCalendarEventSyn);
  emulateServerReturn(calendarEventItem,cb);
}
export function addCalendarEvent(user,calendarEvent,cb){
  var mockUser = readDocument('users',user);
  var calendarEventId = mockUser.calendarEvent;
  var newEvent = addDocument("calendarEvent",calendarEvent);
  calendarEventId.unshift(newEvent._id);
  addDocument('users',mockUser);
  mockUser.calendarEvent = calendarEventId;
  getCalendarEvent(mockUser,cb);
}

export function getBand(bandId, cb) {
  var band = readDocument('bands', bandId);
  band.members  = band.members.map((member) => readDocument('users', member));
  // band.wanted = band.wanted.map((want) => readDocument('instruments', want));
  emulateServerReturn(band, cb);
}

export function removeBandMember(bandId, memberId, cb) {
  var band = readDocument('bands', bandId);
  var userIndex = band.members.indexOf(memberId);
  if (userIndex !== -1) {
    // 'splice' removes items from an array. This removes 1 element starting from userIndex.
    band.members.splice(userIndex, 1);
    writeDocument('bands', band);
  }
  emulateServerReturn(band.members.map((userId) => readDocument('users', userId)), cb);
}


export function getUsersBands(userId, cb) {
  var bands = readList('bands');
  var userBands = [];
  for(var i in bands){
    if(bands[i].members.includes(userId)){
      userBands.push(bands[i]);
    }
  }
}

export function addBandMember(bandId, memberId, cb) {
  var band = readDocument('bands', bandId);
  var user = readDocument('users', Number(memberId));
  var pos = band.members.indexOf(Number(memberId));
  if (user && pos === -1) {
    band.members.push(memberId)
    writeDocument('bands', band);
    emulateServerReturn(band.members.map((userId) => readDocument('users', userId)), cb);
  }
}
