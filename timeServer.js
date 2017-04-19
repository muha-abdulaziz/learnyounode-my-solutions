const net = require("net");
const strftime = require('strftime');

var port = Number(process.argv[2]);

var server = net.createServer(function (soket) {
    var date = strftime("%Y-%m-%d %H:%M\n");
    
    soket.write(date); //Send the date
    soket.end(); //End the conection
});
server.listen(port);

//console.log(strftime("%Y-%m-%d %H:%M"));

/*
//The auther solution
var net = require('net')
    
    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))
*/