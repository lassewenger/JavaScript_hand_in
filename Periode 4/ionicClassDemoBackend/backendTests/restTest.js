var expect = require("chai").expect;
var app = require("../app");
var http = require("http");
var testPort = 9999;
var testServer;
var connection = require("../config/database");
var request = require("request");
var apiUrl = "http://localhost:" + testPort + "/api/projects";

describe('rest api', function () {
  //Start the Server before the TESTS
  before(function (done) {
    var db = require("../config/database");
    var connection_string = "mongodb://localhost/ProjectTestDataBase";
    db.connect(connection_string, function (err) {
      if (err) {
        console.log("Could not connect to Database");
        throw "ERROR";
      }
      else {
        testServer = app.listen(testPort, function () {
          console.log("Server is listening on: " + testPort);
          done();
        }).on('error', function (err) {
          console.log(err);
        });
      }
    });
  });

  after(function () {  //Stop server after the test
    testServer.close();
  });

  beforeEach(function (done) {
    console.log("BEFORE");
    //Create known test data for each test
    var db = connection.get();
    var projects = [
      {title: "Project1", tasks: [{title: "task1 for Project 1"}, {title: "tasks2 for Project1"}]},
      {title: "Project2", tasks: [{title: "task1 for Project 2"}, {title: "tasks2 for Project2"}]}
    ];

    db.collection("projects").insertMany(projects, function (err, r) {
      if (err) {
        throw "ERROR";
      }
      done();
    });
  });

  afterEach(function (done) {
    console.log("AFTER");
    //Delete all test data after each test
    var db = connection.get();
    db.collection("projects").deleteMany({}, function (err, results) {
      done();
    });
  });


  describe('Verify GET (all)', function () {
    it('should return two projects', function (done) {
      request(apiUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var res = JSON.parse(body);
          expect(res.length).to.be.equal(2);
          expect(res[0].title).to.be.equal("Project1");
          expect(res[1].title).to.be.equal("Project2");
          done();
        }
      })
    })
  });

  describe('Verify POST ', function () {
    it('should add a new Project', function (done) {
      var options = {
        uri: apiUrl,
        method: 'POST',
        json: true,
        body: {title: "Project3", tasks: [{title: "task1 for Project 3"}, {title: "tasks2 for Project3"}]}
      };
      request(options, function (error, response, res) {
        if (!error && response.statusCode == 200) {
          expect(res.title).to.be.equal("Project3");
          request(apiUrl, function (error, response, body) {
            if (!error && response.statusCode == 200) {
              var res = JSON.parse(body);
              expect(res.length).to.be.equal(3);
              expect(res[2].title).to.be.equal("Project3");
              done();
            }
          });
        }
      })
    })
  });

  describe('Verify PUT', function () {
    it('should edit Project1s title into XXX', function (done) {
      request(apiUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var res = JSON.parse(body);
          var project1 = res[0];
          project1.title= "XXX";
          var options = {
            uri: apiUrl,
            method: 'PUT',
            json: true,
            body: project1
          };
          request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
              expect(body.nModified).to.be.equal(1);
              done();
            }
          });
        }
      })
    })
  });

  describe('Verify DELETE', function () {
    it('should Delete one project', function (done) {
      request(apiUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var res = JSON.parse(body);
          var options = {
            uri: apiUrl,
            method: 'DELETE',
            json: true,
            body: {_id:res[0]._id}
          };
          request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
              expect(body.ok).to.be.equal(1);
              expect(body.n).to.be.equal(1);
              done();
            }
          });
        }
      })
    })
  });


});
