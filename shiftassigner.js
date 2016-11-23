'use_strict'

const mongo = require("./mongo.js");
const bastardsdb = mongo.get('poorbastards');
const planning = mongo.get('planning');
const dates = require('./dategenerator.js');

bastardsdb.find({}).then(lords => parselords(lords))

function parselords(lords) {
    let planning = [];

    for (let i = 0; i < dates.length; i++) {
        let available = [];
        lords.forEach(e => available.push(e));

        //first shift
        let drukkers = druklords(available, "shift1");
        let schenkid1 = random(drukkers.length);
        let schenk1 = drukkers[schenkid1];
        available.splice(schenkid1, 1);
        drukkers.splice(schenkid1, 1);

        let schenkid2 = random(drukkers.length);
        let schenk2 = drukkers[schenkid2];
        available.splice(schenkid2, 1);

        //second shift
        let drukkers = druklords(available, "shift2");
        let schenkid1 = random(drukkers.length);
        let schenk1 = drukkers[schenkid1];
        available.splice(schenkid1, 1);
        drukkers.splice(schenkid1, 1);

        let schenkid2 = random(drukkers.length);
        let schenk2 = drukkers[schenkid2];
        available.splice(schenkid2, 1);

        //third shift
        let drukkers = druklords(available, "shift3");
        let schenkid1 = random(drukkers.length);
        let schenk1 = drukkers[schenkid1];
        available.splice(schenkid1, 1);
        drukkers.splice(schenkid1, 1);

        let schenkid2 = random(drukkers.length);
        let schenk2 = drukkers[schenkid2];
        available.splice(schenkid2, 1);




    }
}

function random(length) {
    return Math.floor((Math.random() * length))
}

function druklords(lords, shift) {
    let drukkers = []
    let lowestshift = lords[0][shift];
    for (var i = 0; i < lords.length; i++) {
        if (lowestshift > lords[i][shift]) {
            lowestshift = lords[i][shift];
        }
    }

    for (var i = 0; i < lords.length; i++) {
        if (lords[i][shift] == lowestshift) {
            drukkers.push(lords[i])
        }
    }

    if (drukkers.length == 1) {

    }
    return drukkers;
}
