var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(process.env.PORT || 1337, '127.0.0.1');
console.log('Server running at ' + process.env.PORT || 1337);
