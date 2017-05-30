const http = require('http');
const module1 = require('./module1');
const module2 = require('./module2');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(module2.myVariable);
    module2.myFunction();
    response.end();
}

http.createServer(onRequest).listen(8000);