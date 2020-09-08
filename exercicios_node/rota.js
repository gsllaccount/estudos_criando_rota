var http = require('http');

http.createServer(function(req, res){
    res.end("Ok, está funcionando!");
}).listen(8081)

