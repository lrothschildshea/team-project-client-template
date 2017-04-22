import {readDocument, writeDocument, addDocument, readList} from './database.js';

// var token = ''; // <-- Put your base64'd JSON token here
/**
 * Properly configure+send an XMLHttpRequest with error handling,
 * authorization token, and other needed properties.
 */
function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);
  // xhr.setRequestHeader('Authorization', 'Bearer ' + token);

  // The below comment tells ESLint that FacebookError is a global.
  // Otherwise, ESLint would complain about it! (See what happens in Atom if
  // you remove the comment...)
  /* global FacebookError */

  // Response received from server. It could be a failure, though!
  xhr.addEventListener('load', function() {
    var statusCode = xhr.status;
    var statusText = xhr.statusText;
    if (statusCode >= 200 && statusCode < 300) {
      // Success: Status code is in the [200, 300) range.
      // Call the callback with the final XHR object.
      cb(xhr);
    } else {
      // Client or server error.
      // The server may have included some response text with details concerning
      // the error.
      var responseText = xhr.responseText;
      FacebookError('Could not ' + verb + " " + resource + ": Received " +
      statusCode + " " + statusText + ": " + responseText);
    }
  });

  // Time out the request if it takes longer than 10,000
  // milliseconds (10 seconds)
  xhr.timeout = 10000;

  // Network failure: Could not connect to server.
  xhr.addEventListener('error', function() {
    FacebookError('Could not ' + verb + " " + resource +
    ": Could not connect to the server.");
  });

  // Network failure: request took too long to complete.
  xhr.addEventListener('timeout', function() {
    FacebookError('Could not ' + verb + " " + resource +
		": Request timed out.");
  });

  switch (typeof(body)) {
    case 'undefined':
      // No body to send.
      xhr.send();
      break;
    case 'string':
      // Tell the server we are sending text.
      xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      xhr.send(body);
      break;
    case 'object':
      // Tell the server we are sending JSON.
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      // Convert body into a JSON string.
      xhr.send(JSON.stringify(body));
      break;
    default:
      throw new Error('Unknown body type: ' + typeof(body));
  }
}

/**
 * Emulates a REST call to get the feed data for a particular user.
 */
export function getFeedData(user, cb) {
  sendXHR('GET', '/user/1/feed', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}




function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}
/**
* Emulates how a REST call is *asynchronous* -- it calls your function back
* some time in the future with data.
*/
export function search(searchString, bandOrPerson, instrument, genre, zipcode, cb) {
  var bandData = readList('bands');
  emulateServerReturn(bandData, cb);
}


export function getBandFeedData(band, cb) {
  var bandData = readDocument('bands', band);
  var feedData = readDocument('feeds', bandData.feed);
  feedData.contents = feedData.contents.map(getFeedItemSync);
  emulateServerReturn(feedData, cb);
}

export function addFeedItem(feedID, author, band, comment, cb) {
  var feedData = readDocument('feeds', feedID);
  var feedItem = {
    "author": author,
    "contents": comment,
    "postDate": new Date().getTime(),
    "band": band
  }
  var newFeedItem = addDocument('feedItems', feedItem);
  feedData.contents.unshift(newFeedItem._id);
  writeDocument('feeds', feedData);
  feedData.contents = feedData.contents.map(getFeedItemSync);
  emulateServerReturn(feedData.contents, cb);
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
  sendXHR('GET',"/calendarEvent/"+calendarEventId,undefined,(xhr)=> {
    JSON.parse(xhr.responseText);
  });
  return calendarEventItem;
}
export function getCalendarEvent(user,cb){
  var mockUser = readDocument('users',user);
  var calendarEventId=mockUser.calendarEvent;
  var calendarEventItem = calendarEventId.map(getCalendarEventSyn);
  emulateServerReturn(calendarEventItem,cb);
}
export function addCalendarEvent(user,calendarEvent,cb){
  var mockUser = readDocument('users',user);
  var calendarEventId = mockUser.calendarEvent;
  var newEvent = addDocument("calendarEvent",calendarEvent);
  calendarEventId.unshift(newEvent._id);
  mockUser.calendarEvent = calendarEventId;
  writeDocument('users',mockUser);
  getCalendarEvent(user,cb);
}

function getEventBannerSyn(eventBannerId) {
  var eventBannerItem=readDocument('eventBanner', eventBannerId);
  return eventBannerItem;
}
export function getEventBanner(user,cb){
  var mockUser = readDocument('users',user);
  var eventBannerId=mockUser.eventBanner;
  var eventBannerItem = eventBannerId.map(getEventBannerSyn);
  emulateServerReturn(eventBannerItem,cb);
}
export function addEventBanner(user,eventBanner,cb){
  var mockUser = readDocument('users',user);
  var eventBannerId = mockUser.eventBanner;
  var newEventBanner = addDocument("eventBanner",eventBanner);
  eventBannerId.unshift(newEventBanner._id);
  mockUser.eventBanner = eventBannerId;
  writeDocument('users',mockUser);
  getEventBanner(user,cb);
}

export function getBand(bandId, cb) {
  var band = readDocument('bands', bandId);
  band.members  = band.members.map((member) => readDocument('users', member));
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
  emulateServerReturn( userBands, cb);
}

export function addBandMember(bandId, memberId, cb) {
  var band = readDocument('bands', bandId);
  var user = readDocument('users', Number(memberId));
  var pos = band.members.indexOf(Number(memberId));
  if (user && pos === -1) {
    band.members.push(Number(memberId));
    writeDocument('bands', band);
    emulateServerReturn(band.members.map((userId) => readDocument('users', userId)), cb);
  }
}

export function editBandInfo(bandId, band, cb){
  var oldBand = readDocument('bands', bandId);
  oldBand.name = band.name;
  oldBand.location = band.location;
  oldBand.info = band.info;
  oldBand.wanted = band.wanted;
  writeDocument('bands', oldBand);
  emulateServerReturn({
    name: oldBand.name,
    location: oldBand.location,
    info: oldBand.info,
    wanted: oldBand.wanted}, cb);
}

  export function getUser(userId, cb){
    var user = readDocument('users', userId);
    emulateServerReturn(user, cb);
  }
