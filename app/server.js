import {readDocument, writeDocument, addDocument, readList} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
 export function search(searchString, bandOrPerson, instrument, genre, zipcode, cb) {
   // Get the User object with the id "user".
   // Get the Feed object for the user.
   var instrumentData = readList('users');
   console.log(instrumentData)
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
