'use strict';

const url = 'mongodb://heroku_1xzqmmbk:vd9nlff3fiabsd3d6oih6hstlj@ds159377.mlab.com:59377/heroku_1xzqmmbk';

const mongo = require('monk')(url)


//mongo.close()

//export route
module.exports = mongo;
