const express = require('express');
const app = express();

app.get('/', (request, response)=>{
    response.send('Hello World');
})

app.get('/world', (request, response)=>{
    response.send('Hello Wonderful World ');
})

app.listen(3333, ()=>{console.log('Server started')})