'use_strict'
//declare router
const router = require('express').Router();

const mongo = require("../mongo.js");

//business logic
router.get('/', function(req, res) {

    const bastards = mongo.get('poorbastards');


    var data = {};
    bastards.find({

    }).then((docs) => {
        data.lords = docs;
        res.render('html', data);
    })



});

/*
router.get('*', function(req, res) {
    res.redirect('/');
});
*/


//export route
module.exports = router;
