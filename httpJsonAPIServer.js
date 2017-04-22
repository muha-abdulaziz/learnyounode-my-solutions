const http = require("http");
const url = require("url");

var httpJSONServer = http.createServer(function (req, res) {
    if (req.method === "GET") {
        var reqPath = url.parse(req.url, true);
        var isoDate = reqPath.query.iso;
        var date = new Date(isoDate);
        
        if (reqPath.pathname === '/api/parsetime') {
            var time = {
                "hour": date.getHours(),
                "minute": date.getMinutes(),
                "second": date.getSeconds()
            }
            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(time));
        } else if (reqPath.pathname === '/api/unixtime') {
            var unixTimeJSON = JSON.stringify({unixtime: date.getTime()});
            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(unixTimeJSON);
        } else {
            res.writeHead(404);
            res.end()
        }
    }
});

var port = process.argv[2];
httpJSONServer.listen(port);

/*
//The auther solution.

var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime: time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
*/