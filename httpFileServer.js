const http = require("http");
const fs = require("fs");

var port = Number(process.argv[2]);
var theFile = process.argv[3];

var httpServer = http.createServer(function (req, res) {
    
    var aFileStream = fs.createReadStream(theFile);
    aFileStream.pipe(res);
    
    /*
    req.on("close",function () {
        var aFileStream = fs.createReadStream(theFile);
        aFileStream.pip(res);
    });
    */
});

httpServer.listen(port);

/*
//The auther solution

    var http = require('http')
    var fs = require('fs')
    
    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })
    
      fs.createReadStream(process.argv[3]).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))
*/