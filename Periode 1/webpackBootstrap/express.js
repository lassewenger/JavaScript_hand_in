var express = require('express')
const path = require("path");
var app = express()


app.use( express.static(path.join(__dirname, 'dist')))

/*app.get('/', function (req, res) {
  res.send('Hello World!')
})*/

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
  console.log("Serving files from: "+path.join(__dirname, 'dist'));
})