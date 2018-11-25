var http = require("http");

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ a: 1 }));
  })
  .listen(8777);
