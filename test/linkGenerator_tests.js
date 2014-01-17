var expect = require('chai').expect,
  sinon = require('sinon');

var campaignRepository = require("../campaignRepository"),
  linkGenerator = require("../linkGenerator"),
  bitlyShortener = require("../bitlyShortener");


describe("linkGenerator", function(){
  describe("generate(url, campaignId, cb)", function(){
    beforeEach(function(){
      this.original = bitlyShortener.shortenUrl;
      campaignRepository[5] = "funCampaign";
      this.urlToShorten = "http://www.yahoo.com/test";
      this.campaignId = 5;
    });
    afterEach(function(){
      bitlyShortener.shortenUrl = this.original;
    });
    it("calls back with an error if there is no campaign for that id", function(done){
      linkGenerator.generate(this.urlToShorten, 2, function(err, result){
        expect(err).to.eq("Invalid campaign id");
        done();
      });
    });
    it("it has bitly shorten a tracking url based on the campaign id", function(done){
      // SETUP

      var spy = sinon.spy(bitlyShortener, "shortenUrl");

      // TEST
      linkGenerator.generate(this.urlToShorten, 5, function(err, result){
        expect(spy.calledWith("http://www.yahoo.com/test?utm_campaign=funCampaign"));
        done();
      });

      spy.restore();

    })
    it("it shortens the url", function(done){
      // SETUP
      var expectedResult = 'http://www.shr.com/asdfasdf'

      var stub = sinon.stub(bitlyShortener, "shortenUrl");
      stub.yields(null, expectedResult);

      // TEST
      linkGenerator.generate(this.urlToShorten, 5, function(err, result){
        // EXPECT
        expect(result).to.eq(expectedResult);
        done();
      });

      stub.restore();
    });
    it("it stores the shortened url", function(){

    });
  })
});