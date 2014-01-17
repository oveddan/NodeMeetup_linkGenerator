var expect = require('chai').expect,
  sinon = require('sinon');

var campaignsHash = require("../campaignsHash"),
  linkGenerator = require("../linkGenerator"),
  bitlyShortener = require("../bitlyShortener");


describe("linkGenerator", function(){
  describe("generate(url, campaignId, cb)", function(){
    beforeEach(function(){
      campaignsHash[5] = "funCampaign";
      this.urlToShorten = "http://www.yahoo.com/test";
      this.fakeEmitter = {
        emit : function(){}
      };
    });
    it("calls back with an error if there is no campaign for that id", function(done){
      // SAD PATH TEST
      linkGenerator.generate(this.urlToShorten, 2, this.fakeEmitter, function(err, result){
        expect(err).to.eq("Invalid campaign id");
        done();
      });
    });
    context("with valid campaign id", function(){
      beforeEach(function(){
        this.campaignId = 5;
      });
      it("has bitly shorten a tracking url based on the campaign id", function(done){
        // SETUP

        // MOCK DEMO - BITLY WAS GIVEN THE TRACKING URL TO SHORTEND
        var spy = sinon.spy(bitlyShortener, "shortenUrl");

        // TEST
        linkGenerator.generate(this.urlToShorten, this.campaignId, this.fakeEmitter, function(err, result){
          // EXPECT
          expect(spy.calledWith("http://www.yahoo.com/test?utm_campaign=funCampaign"));
          // CLEANUP
          bitlyShortener.shortenUrl.restore();
          done();
        });


      })
      it("calls back with bitly shortened version of the tracking url", function(done){
        // SETUP
        var expectedResult = 'http://www.shr.com/asdfasdf'

        // STUB DEMO: THIS CALLS BACK WITH THE EXPECTED RESULT.
        var stub = sinon.stub(bitlyShortener, "shortenUrl");
        stub.yields(null, expectedResult);

        // TEST
        linkGenerator.generate(this.urlToShorten, this.campaignId, this.fakeEmitter, function(err, result){
          // EXPECT
          expect(result).to.eq(expectedResult);
          // CLEANUP
          bitlyShortener.shortenUrl.restore();
          done();
        });
      });
      it("emits the shortened url", function(){
        // SETUP
        var expectedResult = 'http://www.shr.com/asdfasdf';
        var stub = sinon.stub(bitlyShortener, "shortenUrl");
        stub.yields(null, expectedResult);

        // MOCK DEMO - VERIFY THAT EMIT WAS CALLED WITH CORRECT ARGUMENTS
        var expecation = sinon.mock(this.fakeEmitter).expects("emit").withArgs('linkGenerated', {resultUrl : expectedResult});
        var self = this;
        linkGenerator.generate(this.urlToShorten, this.campaignId, this.fakeEmitter, function(){
          // EXPECT
          expecation.verify();
          // CLEANUP
          self.fakeEmitter.emit.restore();
          stub.restore();
        });
      });
    })
  })
});