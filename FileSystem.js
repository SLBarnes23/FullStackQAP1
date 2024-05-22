var http = require('http'); // Import the HTTP module to create an HTTP server
var fs = require('fs');     // Import the File System module to handle file operations

// Create an HTTP server
http.createServer(function (req, res) {
  // Read the content of 'FileSystem.html'
  fs.readFile('FileSystem.html', function(err, data) {
    if (err) {
      // If there is an error reading the file (e.g., file not found), respond with a 404 status
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('404 Not Found'); // Write '404 Not Found' message in the response
    } else {
      // If the file is read successfully, respond with a 200 status
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data); // Write the content of the file in the response
    }
    res.end(); 
  });
}).listen(8080, function() {
  // Callback function executed when the server starts listening on port 8080
  console.log('Server is listening on port 8080'); // Log a message to the console
});
