var filterLSModule = require("./filterLS2Module");

var folder = process.argv.slice(2)[0];
var ext = process.argv.slice(2)[1];

function logFiles(err, data) {
    if (err) console.error(err);
    
    for (i=0; i<data.length; ++i) console.log(data[i]);
}

filterLSModule(folder, ext, logFiles);