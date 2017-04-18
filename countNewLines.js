var fs = require("fs");

var file = process.argv.slice[2];
file = fs.readFileSync(file);

var strs = file.toString();
var newLinesArr = strs.split('\n');

if (newLinesArr.length === 1) {
    console.log(0);
} else {
console.log(newLinesArr.length - 1);
}