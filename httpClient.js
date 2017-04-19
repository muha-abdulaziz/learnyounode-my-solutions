const http = require("http");

var link = process.argv[2];

http.get(link, function (response) {
    response.setEncoding("utf8");
    
    response.on("data", function (data) {
        //response.setEncoding("utf8");
        //if (typeof data !== 'object') console.log(data);
        console.log(data);
    });
    
}).on("error", function (err) {
        console.error(err);
    });
/*
//The auther solution.

    var http = require('http')
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)
*/

/*

//This is a wrong way.
var response = http.get(link);

response.on("error", function (err) {console.error(err);})

response.on("data", function (chunk) {
    console.log(chunk.toString());
});
*/