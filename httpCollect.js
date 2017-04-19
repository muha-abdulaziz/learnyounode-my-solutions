const http = require("http");
const bl = require("bl");

const link = process.argv[2];

http.get(link, function (res) {
    res.setEncoding('utf-8');
    var bufferList = new bl();
    
    res.on("error", console.error);
    
    res.on('data', function (data) {
        bufferList.append(new Buffer(data));
    });
    
    res.on('end', function () {
        var bufToStr = bufferList.toString();
        console.log(bufToStr.length);
        console.log(bufToStr);
    });
}).on('error', console.error);


/*
//The auther solution

    var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
*/