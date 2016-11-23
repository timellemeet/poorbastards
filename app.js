'use strict';
const express = require('express');
const app = express();
const favicon = require('serve-favicon');


app.use(require('./page/model.js'));
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

//templating
const ECT = require('ect'),
    ectRenderer = ECT({
        watch: true,
        root: __dirname + '/page/',
        ext: '.ect',
        gzip: true
    });
//for get render path has to be set seperately
app.set('views', __dirname + '/page/');
app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

//ports
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});


console.log(require("./dategenerator.js"))
