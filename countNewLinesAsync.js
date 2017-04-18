var fs = require("fs");

var nlCount = 0; //the number of new lines.

function countNewLines (callback) {
    var file = process.argv.slice(2)[0];
    fs.readFile(file, function (err, fileContents) {
        var strs = fileContents.toString();
        var newLinesArr = strs.split('\n');
        
        if (newLinesArr.length === 1) {
            nlCount = 0;
        } else {
            nlCount = newLinesArr.length - 1;
        }
        callback();
    });
};


function logNLCount () {console.log(nlCount);}

countNewLines(logNLCount);