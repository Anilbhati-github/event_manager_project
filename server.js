
// var http = require('http')
//
// http.createServer(function (req, res){
//
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("hello from server")
//     res.end();
// }).listen(3002);

//we can also use ES6


var http = require('http')

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("hello from server")
    res.end();
}).listen(3000);

