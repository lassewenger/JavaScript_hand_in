let http = require('http');//"require" måden at "kalde moduler på"

http.createServer(function(request, response){
    response.writeHead(200); //status code i header
    response.write("Hello World"); //Response body
    setTimeout(function(){
        reponse.write('timeOut Done'); //skal representeres en process der tager tid
    }, 5000);
    response.end(); //close connection
}).listen(8080);// listening for connection på denne port

console.log('listening on port 8080');