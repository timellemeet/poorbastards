//declare router
const router = require('express').Router();

//business logic
router.get('/', function(req, res) {
    var data = {};



    res.render('html', data);
});

/*
router.get('*', function(req, res) {
    res.redirect('/');
});
*/


//export route
module.exports = router;
