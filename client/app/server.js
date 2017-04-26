import {readDocument, writeDocument, addDocument, readList} from './database.js';

var token = 'eyJpZCI6MX0=';

/**
 * Properly configure+send an XMLHttpRequest with error handling,
 * authorization token, and other needed properties.
 */
function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);
  xhr.setRequestHeader('Authorization', 'Bearer ' + token);

  // The below comment tells ESLint that LetsJamError is a global.

  /* global LetsJamError */

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
      LetsJamError('Could not ' + verb + " " + resource + ": Received " + statusCode + " " + statusText + ": " + responseText);
    }
  });

  // Time out the request if it takes longer than 10,000
  // milliseconds (10 seconds)
  xhr.timeout = 10000;

  // Network failure: Could not connect to server.
  xhr.addEventListener('error', function() {
    LetsJamError('Could not ' + verb + " " + resource +
    ": Could not connect to the server.");
  });

  // Network failure: request took too long to complete.
  xhr.addEventListener('timeout', function() {
    LetsJamError('Could not ' + verb + " " + resource +
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

//Emulates a REST call to get the feed data for a particular user.
export function getFeedData(user, cb) {
  sendXHR('GET', '/user/' + user + '/feed', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

export function getBandFeedData(band, cb) {
  sendXHR('GET', '/band/' + band + '/feed', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function addFeedItem(author, band, comment, cb) {
  sendXHR('POST', '/band/' + band + '/feed', {
    "userId": author,
    "contents": comment
  }, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}


function getFeedItemSync(feedItemId) {
  var feedItem = readDocument('feedItems', feedItemId);
  feedItem.author = readDocument('users', feedItem.author);
  feedItem.band = readDocument('bands', feedItem.band);
  return feedItem;
}

export function getCalendarEvent(user,cb){
  sendXHR('GET','/calendarEvent/'+user,undefined,(xhr)=> {
    cb(JSON.parse(xhr.responseText));
  });
}

export function addCalendarEvent(user,calendarEvent,cb){
  sendXHR('POST','/addEvent/'+user,calendarEvent,(xhr)=> {
    cb(JSON.parse(xhr.responseText));
  });
}

function getEventBannerSyn(eventBannerId) {
  var eventBannerItem=readDocument('eventBanner', eventBannerId);
  return eventBannerItem;
}

export function getEventBanner(user,cb){
  sendXHR('GET','/getEventBanner/'+user,undefined,(xhr)=> {
    // console.log(JSON.parse(xhr.responseText));
    cb(JSON.parse(xhr.responseText));
  });
}

export function addEventBanner(user,eventBanner,cb){
  sendXHR('POST','/addEventBanner/'+user,eventBanner,(xhr)=> {
    cb(JSON.parse(xhr.responseText));
  });
}

export function getBand(bandId, cb) {
  sendXHR('GET', '/band/' + bandId, undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
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


export function getUsersBands(userid, cb) {
  sendXHR('GET', '/user/' + userid + '/bands/', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });

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
  sendXHR('PUT', '/band/' + bandId, band, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

  export function getUser(userid, cb){
    sendXHR('GET', '/user/' + userid, undefined, (xhr) => {
      cb(JSON.parse(xhr.responseText));
    });
  }

  export function getEvents(userId, cb){
    sendXHR('GET', '/user/' + userId + '/events/', undefined, (xhr) => {
      cb(JSON.parse(xhr.responseText));
    });
  }

  /**
   * Searches for feed items with the given text.
   */
  export function search(userID, queryText, cb) {
    // userID is not needed; it's included in the JSON web token.
    sendXHR('POST', '/search', queryText, (xhr) => {
      cb(JSON.parse(xhr.responseText));
    });
  }
