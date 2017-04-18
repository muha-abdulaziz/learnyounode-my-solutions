var fs = require('fs');
var path = require('path');

var dirPath = process.argv.slice(2)[0];
var ext = process.argv.slice(2)[1];

fs.readdir(dirPath, function (err, list) {
    if (err) console.log(err);
    
    var filteredList = list.filter(function (val) {
        
        if (path.extname(val) === "."+ext) return val;
        
    });
    
    for (i=0; i<filteredList.length; ++i) console.log(filteredList[i]);
    
});

