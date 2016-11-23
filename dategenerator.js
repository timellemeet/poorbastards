require('datejs');

//dates that have to be ommited
var baddates = [
 /* "30-11-2016",
  "14-12-2016",*/
];

var dates = [];

var nextwednesday = Date.today().moveToDayOfWeek(4);
var enddate = Date.parse("December 10th 2017");

while (nextwednesday.isBefore(enddate)) {
    var skip = false;
    var readabledate = nextwednesday.getUTCDate() + "-" + (nextwednesday.getUTCMonth() + 1) + "-" + nextwednesday.getUTCFullYear();

    for (var i = 0; i < baddates.length; i++) {
        if (baddates.indexOf(readabledate) > -1) {
            skip = true;
            break;
        }
    }

    if (skip == false) {
        dates.push(readabledate);
    }

    nextwednesday = nextwednesday.addDays(7);

}


//export route
module.exports = dates;
