const http = require("http");
const map = require("through2-map");

var port = process.argv[2];
var httpServer = http.createServer(function (request, response) {
    if (request.method === 'POST') {
        //console.log("This is a POST method");
        //response.writeHead(301, { 'content-type': 'text/plain' });
        
        request.on("error", console.error);
        response.on("error", console.error);
        
        request.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(response);
        
        /*
        request.on("data", function (val) {
            response.end(val.toString().toUpperCase());
        });
        */
    } else {
        response.end();
        
    }
});
httpServer.listen(port);



/*
//The auther solution

    var http = require('http')
    var map = require('through2-map')
    
    var server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }
    
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))
*/