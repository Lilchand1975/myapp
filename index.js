
 console.log("Hellow! how are you doing?");

var http = require("http");

var PORT = process.env.PORT || 7500;

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
 
});
