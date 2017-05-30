
//var expect = require("chai").expect;
const {expect} = require("chai"); //es6

describe('Array', function(){
  before(function(){
    // ...
  });

 describe('#indexOf()', function(){
    it('should return 1 when present', function(){
      expect([1,2,3].indexOf(2)).to.be.equal(1);
    });
  });


  describe('#indexOf()', function(){
    it('should return -1 when not present', function(){
      expect([1,2,3].indexOf(4)).to.be.equal(-1);
    });
  });
});