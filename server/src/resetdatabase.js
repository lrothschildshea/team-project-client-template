var ObjectID = require('mongodb').ObjectID;

// Put your startup's name here (only letters and numbers -- no spaces, apostrophes, or special characters!)
var databaseName = 'letsjam';
// Put the initial mock objects here.
var initialData = {

  "users": {
    "1":{
      "_id": new ObjectID("000000000000000000000001"),
      "fullName": "SpongeBob",
      "feed" : new ObjectID("000000000000000000000001"),
      "picture": new ObjectID("000000000000000000000001"),
      "location": "Bikini Bottom",
      "email": "spongeBob@gmail.com",
      "following": [new ObjectID("000000000000000000000002")],
      "events":[
       new ObjectID("000000000000000000000001"),
       new ObjectID("000000000000000000000002")
      ],
      "eventBanner":[
       new ObjectID("000000000000000000000001"),
       new ObjectID("000000000000000000000002")
      ],
      "profilePicture": "img/spongebob_profile.jpg"
    },

    "2":{
      "_id": new ObjectID("000000000000000000000002"),
      "fullName": "Patrick",
      "feed": new ObjectID("000000000000000000000002"),
      "picture": new ObjectID("000000000000000000000002"),
      "location": "Bikini Bottom",
      "email": "patrick@gmail.com",
      "following": [new ObjectID("000000000000000000000003")],
      "events":[
        new ObjectID("000000000000000000000001"),
        new ObjectID("000000000000000000000002"),
        new ObjectID("000000000000000000000004"),
      ],
      "eventBanner":[
        new ObjectID("000000000000000000000001"),
        new ObjectID("000000000000000000000002")
      ],
      "profilePicture": "img/patrick_profile.jpg"
    },

    "3":{
      "_id": new ObjectID("000000000000000000000003"),
      "fullName": "Sandy Cheeks",
      "feed": new ObjectID("000000000000000000000003"),
      "picture": new ObjectID("000000000000000000000003"),
      "location": "Bikini Bottom",
      "email": "sandy@gmail.com",
      "following": [
        new ObjectID("000000000000000000000002"),
      ],
      "events":[
        new ObjectID("000000000000000000000001"),
        new ObjectID("000000000000000000000003")
      ],
      "eventBanner":[
        new ObjectID("000000000000000000000001"),
        new ObjectID("000000000000000000000002")
      ],
      "profilePicture": "img/sandy-profile.jpg"
    },

    "4":{
      "_id": new ObjectID("000000000000000000000004"),
      "fullName": "Mr. Krabs",
      "feed": new ObjectID("000000000000000000000004"),
      "picture": new ObjectID("000000000000000000000004"),
      "location": "Bikini Bottom",
      "email": "krabs@gmail.com",
      "following": [
        new ObjectID("000000000000000000000001"),
        new ObjectID("000000000000000000000003")
      ],
      "events":[
        new ObjectID("000000000000000000000002"),
        new ObjectID("000000000000000000000004")
      ],
      "eventBanner":[
        new ObjectID("000000000000000000000001"),
        new ObjectID("000000000000000000000002")
      ],
      "profilePicture": "img/mr_krabs_profile.jpg"
    },

    "5":{
      "_id": new ObjectID("000000000000000000000005"),
      "fullName": "Plankton",
      "feed": new ObjectID("000000000000000000000005"),
      "picture": new ObjectID("000000000000000000000005"),
      "location": "Bikini Bottom",
      "email": "plankton@gmail.com",
      "following": [
        new ObjectID("000000000000000000000001")
      ],
      "events":[
        new ObjectID("000000000000000000000003")
      ],
      "eventBanner":[
        new ObjectID("000000000000000000000001"),
        new ObjectID("000000000000000000000002")
      ],
      "profilePicture": "img/plankton_profile.jpg"
    }
  },

  "bands": {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "name": "Band1",
      "feed": new ObjectID("000000000000000000000006"),
      "fans": 420,
      "info": "Music band with instruments",
      "profile picture": new ObjectID("000000000000000000000001"),
      "pagePicture": "url(img/genericband.jpg)",
      "members": [
        new ObjectID("000000000000000000000001"),
        new ObjectID("000000000000000000000002"),
        new ObjectID("000000000000000000000003")
      ],
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
      "_id": new ObjectID("000000000000000000000002"),
      "name": "Band2",
      "feed": 7,
      "fans": 420,
      "info": "Music band with instruments",
      "profile picture": new ObjectID("000000000000000000000002"),
      "pagePicture": "url(img/genericband.jpg)",
      "members": [
        new ObjectID("000000000000000000000002"),
        new ObjectID("000000000000000000000004")
      ],
      "location": "Bikini Bottom",
      "wanted": []
    },

    "3": {
      "_id": new ObjectID("000000000000000000000003"),
      "name": "Band3",
      "feed": 8,
      "fans": 420,
      "info": "Music band with instruments",
      "profile picture": new ObjectID("000000000000000000000003"),
      "pagePicture": "url(img/genericband.jpg)",
      "members": [
        new ObjectID("000000000000000000000001"),
        new ObjectID("000000000000000000000003"),
        new ObjectID("000000000000000000000005")
      ],
      "location": "Bikini Bottom",
      "wanted": []
    }
  },

  "feedItems": {
    "1": {
      "_id" : new ObjectID("000000000000000000000001"),
      "author": new ObjectID("000000000000000000000001"),
      "contents": "Practice is canceled",
      "postDate": 1453690800000,
      "band" : new ObjectID("000000000000000000000001")
    },
    "2": {
      "_id" : new ObjectID("000000000000000000000002"),
      "author": new ObjectID("000000000000000000000002"),
      "contents": "more messages",
      "postDate": 1453690800001,
      "band" : new ObjectID("000000000000000000000001")
    },
    "3": {
      "_id" : new ObjectID("000000000000000000000003"),
      "author": new ObjectID("000000000000000000000004"),
      "contents": "more messages",
      "postDate": 1453690800002,
      "band" : new ObjectID("000000000000000000000002")
    },
    "4": {
      "_id" : new ObjectID("000000000000000000000004"),
      "author": new ObjectID("000000000000000000000005"),
      "contents": "more messages",
      "postDate": 1453690800003,
      "band" : new ObjectID("000000000000000000000002")
    },
    "5": {
      "_id" : new ObjectID("000000000000000000000005"),
      "author": new ObjectID("000000000000000000000002"),
      "contents": "more messages",
      "postDate": 1453690800004,
      "band" : new ObjectID("000000000000000000000003")
    },
    "6": {
      "_id" : new ObjectID("000000000000000000000006"),
      "author": new ObjectID("000000000000000000000003"),
      "contents": "more messages",
      "postDate": 1453690800005,
      "band" : new ObjectID("000000000000000000000002")
    }
  },

  "feeds": {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "contents": [
        new ObjectID("000000000000000000000001"),
        new ObjectID("000000000000000000000002"),
        new ObjectID("000000000000000000000003")
      ]
    },
    "2": {
      "_id": new ObjectID("000000000000000000000002"),
      "contents": [
        new ObjectID("000000000000000000000003"),
        new ObjectID("000000000000000000000004")
      ]
    },
    "3": {
      "_id": new ObjectID("000000000000000000000003"),
      "contents": [
        new ObjectID("000000000000000000000004"),
        new ObjectID("000000000000000000000005")
      ]
    },
    "4": {
      "_id": new ObjectID("000000000000000000000004"),
      "contents": [
        new ObjectID("000000000000000000000005"),
        new ObjectID("000000000000000000000006")
      ]
    },
    "5": {
      "_id": new ObjectID("000000000000000000000005"),
      "contents": [
        new ObjectID("000000000000000000000002"),
        new ObjectID("000000000000000000000004")
      ]
    },
    "6": {
      "_id": new ObjectID("000000000000000000000006"),
      "contents": [
        new ObjectID("000000000000000000000001"),
        new ObjectID("000000000000000000000002")
      ]
    },
    "7": {
      "_id": new ObjectID("000000000000000000000007"),
      "contents": [
        new ObjectID("000000000000000000000003"),
        new ObjectID("000000000000000000000004")
      ]
    },
    "8": {
      "_id": new ObjectID("000000000000000000000008"),
      "contents": [
        new ObjectID("000000000000000000000005"),
        new ObjectID("000000000000000000000006")
      ]
    }
  },

  "instruments": {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "instrument": "guitar"
    },
    "2": {
      "_id": new ObjectID("000000000000000000000002"),
      "instrument": "percussion"
    },
    "3": {
      "_id": new ObjectID("000000000000000000000003"),
      "instrument": "piano"
    },
    "4": {
      "_id": new ObjectID("000000000000000000000004"),
      "instrument": "bass guitar"
    },
    "5": {
      "_id": new ObjectID("000000000000000000000005"),
      "instrument": "saxaphone"
    },
    "6": {
      "_id": new ObjectID("000000000000000000000006"),
      "instrument": "trumpet"
    },
    "7": {
      "_id": new ObjectID("000000000000000000000007"),
      "instrument": "violin"
    },
    "8": {
      "_id": new ObjectID("000000000000000000000008"),
      "instrument": "flute"
    }
  },

  "genres": {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "genre": "blues"
    },
    "2": {
      "_id": new ObjectID("000000000000000000000002"),
      "genre": "rock"
    },
    "3": {
      "_id": new ObjectID("000000000000000000000003"),
      "genre": "jazz"
    },
    "4": {
      "_id": new ObjectID("000000000000000000000004"),
      "genre": "classical"
    },
    "5": {
      "_id": new ObjectID("000000000000000000000005"),
      "genre": "country"
    },
    "6": {
      "_id": new ObjectID("000000000000000000000006"),
      "genre": "metal"
    },
    "7": {
      "_id": new ObjectID("000000000000000000000007"),
      "genre": "punk"
    },
    "8": {
      "_id": new ObjectID("000000000000000000000008"),
      "genre": "pop"
    }
  },

  "events":{
    "1":{
      "name": "Event 1",
      "band": new ObjectID("000000000000000000000001"),
      "_id": new ObjectID("000000000000000000000001"),
      "date": 1453668480000,
      "location": "South College",
      "detail": "It is fun"
    },
    "2":{
      "name": "Event 2",
      "band": new ObjectID("000000000000000000000002"),
      "_id": new ObjectID("000000000000000000000002"),
      "date": 1453668580000,
      "location": "South College",
      "detail": "It is fun"
    },
    "3":{
      "name": "Event 3",
      "band": new ObjectID("000000000000000000000003"),
      "_id": new ObjectID("000000000000000000000003"),
      "date": 1453668680000,
      "location": "South College",
      "detail": "It is fun"
    },
    "4":{
      "name": "Event 4",
      "band": new ObjectID("000000000000000000000002"),
      "_id": new ObjectID("000000000000000000000004"),
      "date": 1453669480000,
      "location": "South College",
      "detail": "It is fun"
    }
  },
  "eventBanner":{
    "1":{
      '_id': new ObjectID("000000000000000000000001"),
      'title': 'Event1',
      'start': new Date(2017, 4, 22),
      'end': new Date(2017, 4, 22),
    },
    "2":{
      '_id':new ObjectID("000000000000000000000002"),
      'title': 'Event2',
      'start': new Date(2017, 4, 22),
      'end': new Date (2017,4,22)
    }
  }
};

//Resets a collection.
function resetCollection(db, name, cb) {
  // Drop / delete the entire object collection.
  db.collection(name).drop(function() {
    // Get all of the mock objects for this object collection.
    var collection = initialData[name];
    var objects = Object.keys(collection).map(function(key) {
      return collection[key];
    });
    // Insert objects into the object collection.
    db.collection(name).insertMany(objects, cb);
  });
}

function addIndexes(db, cb) {
   db.collection('users').createIndex({ "fullName": "text" }, null, cb);
   db.collection('bands').createIndex({ "name": "text" }, null, cb);
 }

/**
 * Reset the MongoDB database.
 * @param db The database connection.
 */
function resetDatabase(db, cb) {
  // The code below is a bit complex, but it basically emulates a
  // "for" loop over asynchronous operations.
  var collections = Object.keys(initialData);
  var i = 0;

  // Processes the next collection in the collections array.
  // If we have finished processing all of the collections,
  // it triggers the callback.
  function processNextCollection() {
    if (i < collections.length) {
      var collection = collections[i];
      i++;
      // Use myself as a callback.
      resetCollection(db, collection, processNextCollection);
    } else {
      addIndexes(db, cb);
    }
  }

  // Start processing the first collection!
  processNextCollection();
}

// Check if called directly via 'node', or required() as a module.
// http://stackoverflow.com/a/6398335
if(require.main === module) {
  // Called directly, via 'node src/resetdatabase.js'.
  // Connect to the database, and reset it!
  var MongoClient = require('mongodb').MongoClient;
  var url = 'mongodb://localhost:27017/' + databaseName;
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw new Error("Could not connect to database: " + err);
    } else {
      console.log("Resetting database...");
      resetDatabase(db, function() {
        console.log("Database reset!");
        // Close the database connection so NodeJS closes.
        db.close();
      });
    }
  });
} else {
  // require()'d.  Export the function.
  module.exports = resetDatabase;
}
