const http = require("http");
const bl = require("bl");

var contents = [];

function getFromLinks (linksArr, callback) {
    for (var i=0; i<linksArr.length; ++i){
        var link = linksArr[i]

        http.get(link, function (res) {
    
            res.setEncoding('utf-8'); //convert the request buffer to a unicode string
            var bufferList = new bl();
    
            res.on("error", console.error);
            
            res.on('data', function (data) {
                bufferList.append(new Buffer(data));
            });
            
            res.on('end', function () {
                var bufToStr = bufferList.toString();
                //console.log(bufToStr);
                contents.push(bufToStr);
                //console.log(contents);
                console.log(bufToStr);
            });
        }).on('error', console.error);
    }
    
    //callback(contents);
}
/*
var content = [];

function getFrom3Links(linkArr, callback) {
    
    for (var i=0; i<linkArr.length; ++i) {
        content.push(getFromLink(linkArr[i]));
    }
    
    callback();
}
*/

function logArr(arr) {
    //console.log('\nfinal content:\n' + contents);
    //var arr = contents;
    for (var i=0; i<arr.length; ++i) console.log(arr[i]);
}


const links = [process.argv[2], process.argv[3], process.argv[4]];

getFromLinks(links, logArr);

/*
//The auther solution.

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          results[index] = data.toString()
          count++
    
          if (count === 3) {
            printResults()
          }
        }))
      })
    }
    
    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }
*/