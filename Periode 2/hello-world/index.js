const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("Hello World");
})

app.post('/hello', function(req, res){
    res.send("You just called the post method at '/hello' !\n");
})

app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
})

const things = require('./things');
app.use('/things', things);

app.listen(3000);