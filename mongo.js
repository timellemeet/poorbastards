'use strict';

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// Connection URL
var url = 'mongodb://heroku_1xzqmmbk:vd9nlff3fiabsd3d6oih6hstlj@ds159377.mlab.com:59377/heroku_1xzqmmbk';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    db.close();
});

//export route
module.exports = MongoClient;
