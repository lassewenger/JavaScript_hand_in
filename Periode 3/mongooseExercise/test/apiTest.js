let expect = require("chai").expect;
let connect = require("./plainMongoDriver");
let ObjectID = require("mongodb").ObjectID;
let fetch = require("node-fetch");
const TEST_PORT = 9999;
const SERVER_URL = `http://localhost:${TEST_PORT}`;
const URL = SERVER_URL + "/api/jokes";
const TEST_DB_CONNECTION = "mongodb://localhost/testJokeDB";

let app = require("./../app");

var joke1 = {
  "_id": ObjectID("5063114bd386d8fadbd6b004"),
  "joke": "Joke-1",
  "category": ["short", "alcohol", "quote"],
  "reference": {"author": "Someone", "link": "qqq"},
  "lastEdited": new Date()
};

let joke2 = {
  "_id": ObjectID("5063114bd386d8fadbd6b005"),
  "joke": "Joke-2",
  "category": ["short", "joke"],
  "reference": {
    "author": "Unknown",
    link: "aaa"
  },
  "lastEdited": new Date()
}

describe("Jokes API", function () {
  let server;
  //Start Server
  before(function (done) {
    app.initMongoose(TEST_DB_CONNECTION);
    server = app.listen(TEST_PORT, () => {
      console.log(`Started Server Listening on ${TEST_PORT}`);
      done();
    });
  });

  after(function (done) {
    server.close(done);
  });

  var db;
  //Setup test data, using a plain mongoose driver
  beforeEach(function (done) {
    connect.connect(TEST_DB_CONNECTION, function (db) {
      var testJokes = [joke1, joke2];
      db.collection("jokes").deleteMany({}, function (err, results) {
        db.collection("jokes").insert(testJokes, function (err, res) {
          if (err) {
            throw new Error(err.Message);
          }
          connect.close(()=> done());
        });
      })
    });
  })

  describe("GET:  /api/jokes", function () {
    it("should find two jokes", function (done) {
      fetch(URL, {method: 'get'}).then(function (response) {
        return response.json();
      }).then(res => {
        expect(res.length).to.be.equal(2);
        expect(res[0]._id).to.be.equal("5063114bd386d8fadbd6b004");
        expect(res[1]._id).to.be.equal("5063114bd386d8fadbd6b005");
        done();
      }).catch((err)=> {
        done(err);
      });
    })
  });

  describe("GET:  /api/jokes/:id", function () {
    it("should find joke-1", function (done) {
      fetch(URL + "/5063114bd386d8fadbd6b004", {method: 'get'}).then(function (response) {
        return response.json();
      }).then(res => {
        expect(res._id).to.be.equal("5063114bd386d8fadbd6b004");
        done();
      }).catch((err)=> {
        done(err);
      });
    })
  });

  describe("POST:  /api/jokes/", function () {
    let newJoke = {
      joke: "abcde",
      category: ["general"],
      reference: {"author": "Someone", "link": "NADA"},
    }
    it("should Add a new joke", function (done) {
      fetch(URL, {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newJoke)
        }
      ).then(function (response) {
        expect(response.status).to.be.equal(200);
        return response.json();
      }).then(res => {
        expect(res).to.have.property("_id").and.not.equal(null);
        expect(res.joke).to.be.equal("abcde");
        done();
      }).catch((err)=> {
        done(err);
      });
    });
  });

  describe("PUT:  /api/jokes/", function () {
    let {joke, category, reference} = joke1;
    let jokeToEdit = {joke, category, reference};
    it("should Edit Joke-1", function (done) {
      fetch(URL + "/5063114bd386d8fadbd6b004", {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jokeToEdit)
      }).then(function (response) {
        return response.json();
      }).then(res => {
        expect(res).to.have.property("_id").and.not.equal(null);
        expect(res.joke).to.be.equal("Joke-1");
        expect(res.lastEdited).to.be.not.equal(joke1.lastEdited);
        done();
      });
    });
  });

  describe("DELETE:  /api/jokes/", function () {
    it("should Delete Joke-1", function (done) {
      fetch(URL + "/5063114bd386d8fadbd6b004", {method: 'delete'}).then(function (response) {
        //Server should remove joke, and return 204
        expect(response.status).to.be.equal(204);
        //Verify that it was actually removed
        fetch(URL, {method: 'get'}).then(function (response) {
          return response.json();
        }).then(res => {
          expect(res.length).to.be.equal(1);
          done()
        });
      });
    });
  });

  describe("GET:  /nonExistingRoute", function () {
    it("should get 404, Non Existing", function (done) {
      fetch(SERVER_URL + "/nonExistingRoute", {method: 'get'}).then(function (response) {
        //console.log(response)
        expect(response.status).to.be.equal(404);
        done();
      })
    })
  });
});



