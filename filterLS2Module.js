var fs = require('fs');
var path = require('path');

module.exports = function (folder, ext, callback) {
    var filteredList = [];
    
    fs.readdir(folder, function (err, list) {
    if (err) return callback(err);
    
    filteredList = list.filter(function (val) {
        
        if (path.extname(val) === "."+ext) return val;
        
    });
    
    callback(null, filteredList);
});
}