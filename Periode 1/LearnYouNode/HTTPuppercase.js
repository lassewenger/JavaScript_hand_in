
var http = require('http')
var map = require('through2-map')
 
var port = process.argv[2]
 
http.createServer(function (request, response) {
  // check to see if request method is POST
  if (request.method === 'POST') {
    // write request status and content type to resposne head
    response.writeHead(200, {'Content-Type': 'text/plain'})
    // stream request to through2-map with pipe()
    request.pipe(map(function (chunk) {
      // convert request to uppercase string
      return chunk.toString().toUpperCase()
      // stream result to response with pipe()
    })).pipe(response)
  } else {
    // write method not allowed error to response header if method not POST
    response.writeHead(405)
  }
}).listen(+port, function () {
  console.log('Server listening on http://localhost:%s', port)
})