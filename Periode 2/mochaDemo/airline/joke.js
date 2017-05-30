var request = require("request");

var URL = "http://jokes-plaul.rhcloud.com/api/joke";

function getJoke(callback) {
  request(URL, function (error, response, body) {
    if(error || response.statusCode >=400){
      return callback(error || body );
    }
    callback(null,JSON.parse(body));
  });
};
module.exports = {
  getJoke : getJoke
} 

getJoke((err, data)=> console.log(data));