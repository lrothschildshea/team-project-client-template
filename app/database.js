import React from 'react';
import ReactDOM from 'react-dom';

// Modify with your startup's name!
var startupName = "Let's Jam!";

// Put your mock objects here, as in Workshop 4
var initialData = {

  "users": {
    "1":{
      "_id": 1,
      "fullName": "SpongeBob",
      "feed" : 1,
      "picture": 1,
      "location": "Bikini Bottom",
      "email": "spongeBob@gmail.com",
      "calendarEvent":[1]
    },

    "2":{
      "_id": 2,
      "fullName": "Patrick",
      "feed": 2,
      "picture": 2,
      "location": "Bikini Bottom",
      "email": "patrick@gmail.com",
      "calendarEvent":[1]
    },

    "3":{
      "_id": 3,
      "fullName": "Sandy Cheeks",
      "feed": 3,
      "picture": 3,
      "location": "Bikini Bottom",
      "email": "sandy@gmail.com",
      "calendarEvent":[1]
    },

    "4":{
      "_id": 4,
      "fullName": "Mr. Krabs",
      "feed": 4,
      "picture": 4,
      "location": "Bikini Bottom",
      "email": "krabs@gmail.com",
      "calendarEvent":[1]
    },

    "5":{
      "_id": 5,
      "fullName": "Plankton",
      "feed": 5,
      "picture": 5,
      "location": "Bikini Bottom",
      "email": "plankton@gmail.com",
      "calendarEvent":[1]
    }
  },

  "bands": {
    "1": {
      "_id": 1,
      "name": "Band1",
      "feed": 6,
      "profile picture": 1,
      "page picture": 1,
      "members": [1,2,3],
      "location": "Bikini Bottom",
      "wanted": [1,2]
    },

    "2": {
      "_id": 2,
      "name": "Band2",
      "feed": 7,
      "profile picture": 2,
      "page picture": 2,
      "members": [2,4],
      "location": "Bikini Bottom",
      "wanted": []
    },

    "3": {
      "_id": 3,
      "name": "Band3",
      "feed": 8,
      "profile picture": 3,
      "page picture": 3,
      "members": [1,3,5],
      "location": "Bikini Bottom",
      "wanted": [6,8]
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
    "guitar": {
      "_id": 1
    },

    "percusion": {
      "_id": 2
    },

    "piano": {
      "_id": 3
    },

    "bass guitar": {
      "_id": 4
    },

    "saxaphone": {
      "_id": 5
    },

    "trumpet": {
      "_id": 6
    },

    "violin": {
      "_id": 7
    },

    "flute": {
      "_id": 8
    }
  },

  "genres": {
    "blues": {
      "_id": 1
    },

    "rock": {
      "_id": 2
    },

    "jazz": {
      "_id": 3
    },

    "classical": {
      "_id": 4
    },

    "country": {
      "_id": 5
    },

    "metal": {
      "_id": 6
    },

    "punk": {
      "_id": 7
    },

    "flute": {
      "_id": 8
    },

    "pop": {
      "_id": 9
    }
  },

  "events": {
    "1": {
      "Name": "Event1",
      "_id": 1,
      "location": "amherst",
      "Date": 1453668480000
    },
    "2": {
      "Name": "Event2",
      "_id": 2,
      "location": "amherst",
      "Date": 1453668480000
    },
    "3": {
      "Name": "Event3",
      "_id": 3,
      "location": "amherst",
      "Date": 1453668480000
    },
    "4": {
      "Name": "Event4",
      "_id": 4,
      "location": "amherst",
      "Date": 1453668480000
    }
  },
  "calendarEvent":{
    "1":{
      "name": "Event 1",
      "band": "Band 1",
      "_id": 1,
      "date": "Tomorrow at 7:00 PM",
      "time": "7 - 9 PM",
      "location": "South College",
      "detail": "It is fun"
    }
  }

};

var data = JSON.parse(localStorage.getItem(startupName));
if (data === null) {
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
export function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  return JSONClone(data[collection][id]);
}

export function readList(collection) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  return JSONClone(data[collection]);
}

/**
 * Emulates writing a "document" to a NoSQL database.
 */
export function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  localStorage.setItem(startupName, JSON.stringify(data));
}

/**
 * Adds a new document to the NoSQL database.
 */
export function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}

/**
 * Reset our browser-local database.
 */
export function resetDatabase() {
  localStorage.setItem(startupName, JSON.stringify(initialData));
  data = JSONClone(initialData);
}

/**
 * Reset database button.
 */
class ResetDatabase extends React.Component {
  render() {
    return (
      <button className="btn btn-default" type="button" onClick={() => {
        resetDatabase();
        window.alert("Database reset! Refreshing the page now...");
        document.location.reload(false);
      }}>Reset Mock DB</button>
    );
  }
}

ReactDOM.render(
  <ResetDatabase />,
  document.getElementById('db-reset')
);
