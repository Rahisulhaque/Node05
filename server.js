var http = require('http');
var server = http.createServer();

server.on('request', function(req,res){
  res.writeHead(200, {'content-type':'text/plain'});
  res.write("Hello form node");
  res.end();
});

var port = 8080;


server.listen(port);

server.once('listening', function(){
  console.log("Sever is running on", port);
});

