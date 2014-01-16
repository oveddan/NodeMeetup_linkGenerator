var expect = require('chai').expect;

var bitlyShortener = require('../bitlyShortener');

describe("bitlyShortener", function(){
  describe("shorten(url, callback)", function(){
    it("shortens the url", function(done){
      var toShorten = "http://www.cnn.com/test?a=b"

      bitlyShortener.shortenUrl(toShorten, function(err, result){
        expect(result).to.be.a('string');
        done();
      });    
    });
  })
});

