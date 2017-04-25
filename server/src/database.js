// Your startup's initial mock objects go here
var initialData = {

  "users": {
    "1":{
      "_id": 1,
      "fullName": "SpongeBob",
      "feed" : 1,
      "picture": 1,
      "location": "Bikini Bottom",
      "email": "spongeBob@gmail.com",
      "following": [2],
      "events":[1,3],
      "eventBanner":[1,2],
      "profilePicture": "img/spongebob_profile.jpg"
    },

    "2":{
      "_id": 2,
      "fullName": "Patrick",
      "feed": 2,
      "picture": 2,
      "location": "Bikini Bottom",
      "email": "patrick@gmail.com",
      "following": [3],
      "events":[1,2,4],
      "eventBanner":[1,2],
      "profilePicture": "img/patrick_profile.jpg"
    },

    "3":{
      "_id": 3,
      "fullName": "Sandy Cheeks",
      "feed": 3,
      "picture": 3,
      "location": "Bikini Bottom",
      "email": "sandy@gmail.com",
      "following": [2],
      "events":[1,3],
      "eventBanner":[1,2],
      "profilePicture": "img/sandy-profile.jpg"
    },

    "4":{
      "_id": 4,
      "fullName": "Mr. Krabs",
      "feed": 4,
      "picture": 4,
      "location": "Bikini Bottom",
      "email": "krabs@gmail.com",
      "following": [1,3],
      "events":[2,4],
      "eventBanner":[1,2],
      "profilePicture": "img/mr_krabs_profile.jpg"
    },

    "5":{
      "_id": 5,
      "fullName": "Plankton",
      "feed": 5,
      "picture": 5,
      "location": "Bikini Bottom",
      "email": "plankton@gmail.com",
      "following": [1],
      "events":[3],
      "eventBanner":[1,2],
      "profilePicture": "img/plankton_profile.jpg"
    }
  },

  "bands": {
    "1": {
      "_id": 1,
      "name": "Band1",
      "feed": 6,
      "fans": 420,
      "info": "Music band with instruments",
      "profile picture": 1,
      "pagePicture": "url(img/genericband.jpg)",
      "members": [1,2,3],
      "location": "Bikini Bottom",
      "wanted": [
        {
          "instrument": "Guitarist",
          "info": "Play me something spicy"
        },
        {
          "instrument": "Saxophone",
          "info": "Minimum 70 years of experience"
        }
      ]
    },

    "2": {
      "_id": 2,
      "name": "Band2",
      "feed": 7,
      "fans": 420,
      "info": "Music band with instruments",
      "profile picture": 2,
      "pagePicture": "url(img/genericband.jpg)",
      "members": [2,4],
      "location": "Bikini Bottom",
      "wanted": []
    },

    "3": {
      "_id": 3,
      "name": "Band3",
      "feed": 8,
      "fans": 420,
      "info": "Music band with instruments",
      "profile picture": 3,
      "pagePicture": "url(img/genericband.jpg)",
      "members": [1,3,5],
      "location": "Bikini Bottom",
      "wanted": []
    }
  },

  "feedItems": {
    "1": {
      "author": 1,
      "contents": "Practice is canceled",
      "postDate": 1453690800000,
      "band" : 1
    },
    "2": {
      "author": 2,
      "contents": "more messages",
      "postDate": 1453690800001,
      "band" : 1
    },
    "3": {
      "author": 4,
      "contents": "more messages",
      "postDate": 1453690800002,
      "band" : 2
    },
    "4": {
      "author": 5,
      "contents": "more messages",
      "postDate": 1453690800003,
      "band" : 2
    },
    "5": {
      "author": 2,
      "contents": "more messages",
      "postDate": 1453690800004,
      "band" : 3
    },
    "6": {
      "author": 3,
      "contents": "more messages",
      "postDate": 1453690800005,
      "band" : 3
    }
  },

  "feeds": {
    "1": {
      "_id": 1,
      "contents": [1,2,3]
    },
    "2": {
      "_id": 2,
      "contents": [3,4]
    },
    "3": {
      "_id": 3,
      "contents": [4,5]
    },
    "4": {
      "_id": 4,
      "contents": [5,6]
    },
    "5": {
      "_id": 5,
      "contents": [2,4]
    },
    "6": {
      "_id": 6,
      "contents": [1,2]
    },
    "7": {
      "_id": 7,
      "contents": [3,4]
    },
    "8": {
      "_id": 8,
      "contents": [5,6]
    }
  },

  "instruments": {
    "1": {
      "_id": 1,
      "instrument": "guitar"
    },
    "2": {
      "_id": 2,
      "instrument": "percussion"
    },
    "3": {
      "_id": 3,
      "instrument": "piano"
    },
    "4": {
      "_id": 4,
      "instrument": "bass guitar"
    },
    "5": {
      "_id": 5,
      "instrument": "saxaphone"
    },
    "6": {
      "_id": 6,
      "instrument": "trumpet"
    },
    "7": {
      "_id": 7,
      "instrument": "violin"
    },
    "8": {
      "_id": 8,
      "instrument": "flute"
    }
  },

  "genres": {
    "1": {
      "_id": 1,
      "instrument": "blues"
    },
    "2": {
      "_id": 2,
      "instrument": "rock"
    },
    "3": {
      "_id": 3,
      "instrument": "jazz"
    },
    "4": {
      "_id": 4,
      "instrument": "classical"
    },
    "5": {
      "_id": 5,
      "instrument": "country"
    },
    "6": {
      "_id": 6,
      "instrument": "metal"
    },
    "7": {
      "_id": 7,
      "instrument": "punk"
    },
    "8": {
      "_id": 8,
      "instrument": "pop"
    }
  },

  "events":{
    "1":{
      "name": "Event 1",
      "band": 1,
      "_id": 1,
      "date": 1453668480000,
      "location": "South College",
      "detail": "It is fun"
    },
    "2":{
      "name": "Event 2",
      "band": 2,
      "_id": 2,
      "date": 1453668580000,
      "location": "South College",
      "detail": "It is fun"
    },
    "3":{
      "name": "Event 3",
      "band": 3,
      "_id": 3,
      "date": 1453668680000,
      "location": "South College",
      "detail": "It is fun"
    },
    "4":{
      "name": "Event 4",
      "band": 2,
      "_id": 4,
      "date": 1453669480000,
      "location": "South College",
      "detail": "It is fun"
    }
  },
  "eventBanner":{
    "1":{
      'title': 'Event1',
      'start': new Date('2017-4-1'),
      'end': new Date('2017-4-2')
    },
    "2":{
      'title': 'Event2',
      'start': new Date('2017-4-3'),
      'end': new Date('2017-4-3')
    }
  }
};

var data;
// If 'true', the in-memory object representing the database has changed,
// and we should flush it to disk.
var updated = false;
// Pull in Node's file system and path modules.
var fs = require('fs'),
    path = require('path');

try {
    // ./database.json may be missing. The comment below prevents ESLint from
    // complaining about it.
    // Read more about configuration comments at the following URL:
    // http://eslint.org/docs/user-guide/configuring#configuring-rules
    /* eslint "node/no-missing-require": "off" */
    data = require('./database.json');
} catch (e) {
    // ./database.json is missing. Use the seed data defined above
    data = JSONClone(initialData);
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
function readDocument(collection, id) {
    // Clone the data. We do this to model a database, where you receive a
    // *copy* of an object and not the object itself.
    var collectionObj = data[collection];
    if (!collectionObj) {
        throw new Error(`Object collection ${collection} does not exist in the database!`);
    }
    var obj = collectionObj[id];
    if (obj === undefined) {
        throw new Error(`Object ${id} does not exist in object collection ${collection} in the database!`);
    }
    return JSONClone(data[collection][id]);
}
module.exports.readDocument = readDocument;

/**
 * Emulates writing a "document" to a NoSQL database.
 */
function writeDocument(collection, changedDocument) {
    var id = changedDocument._id;
    if (id === undefined) {
        throw new Error(`You cannot write a document to the database without an _id! Use AddDocument if this is a new object.`);
    }
    // Store a copy of the object into the database. Models a database's behavior.
    data[collection][id] = JSONClone(changedDocument);
    // Update our 'database'.
    updated = true;
}
module.exports.writeDocument = writeDocument;

/**
 * Adds a new document to the NoSQL database.
 */
function addDocument(collectionName, newDoc) {
    var collection = data[collectionName];
    var nextId = Object.keys(collection).length;
    if (newDoc.hasOwnProperty('_id')) {
        throw new Error(`You cannot add a document that already has an _id. addDocument is for new documents that do not have an ID yet.`);
    }
    while (collection[nextId]) {
        nextId++;
    }
    newDoc._id = nextId;
    writeDocument(collectionName, newDoc);
    return newDoc;
}
module.exports.addDocument = addDocument;

/**
 * Deletes a document from an object collection.
 */
function deleteDocument(collectionName, id) {
    var collection = data[collectionName];
    if (!collection[id]) {
        throw new Error(`Collection ${collectionName} lacks an item with id ${id}!`);
    }
    delete collection[id];
    updated = true;
}
module.exports.deleteDocument = deleteDocument;

/**
 * Returns an entire object collection.
 */
function getCollection(collectionName) {
    return JSONClone(data[collectionName]);
}
module.exports.getCollection = getCollection;

/**
 * Reset the database.
 */
function resetDatabase() {
    data = JSONClone(initialData);
    updated = true;
}
module.exports.resetDatabase = resetDatabase;

// Periodically updates the database on the hard drive
// when changed.
setInterval(function() {
    if (updated) {
        fs.writeFileSync(path.join(__dirname, 'database.json'), JSON.stringify(data), {
            encoding: 'utf8'
        });
        updated = false;
    }
}, 200);
