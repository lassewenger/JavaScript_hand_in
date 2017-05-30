var request = require("request");


function insertTestDataViaREST(){
  var options = {
    uri: 'http://localhost:3000/api/projects',
    method: 'POST',
    json: true
  };
  options.body =  {title:"Project1",tasks:[{title:"task1 for Project 1"},{title:"tasks2 for Project1"}]};
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      return console.log(body)
    }});
  options.body =  {title:"Project2",tasks:[{title:"task1 for Project 2"},{title:"tasks2 for Project2"}]};
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      return console.log(body)
    }
    console.log("Error: "+error);
  });
}

insertTestDataViaREST();
