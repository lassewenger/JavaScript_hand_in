var expect = require("chai").expect;
var jokes = require("../airline/joke");
var nock = require("nock");
var testJoke = {"id": 1234, "joke": "ha ha ha", "reference": "unknown"};

var n = nock('http://jokes-plaul.rhcloud.com');

describe('Person API Get', function () {
  before(function (done) {
    n.get('/api/joke')
      .reply(200,testJoke );
    done();
  });

  it('should fetch the vampire joke', function (done) {
    jokes.getJoke(function (err, joke) {
      if (err) {
        throw err;
      }
      expect(joke.reference).to.be.equal("unknown");
      expect(joke).to.be.eql(testJoke);
      done();
    })
  });
});