var expect = require('chai').expect;

var campaignRepository = require("../campaignRepository"),
  linkGenerator = require("../linkGenerator");


describe("linkGenerator", function(){
  describe("generate(url, campaignId, cb)", function(){
    it("it generates a tracking url based on the campaign id", function(done){
      // SETUP
      var campaignId = 5;
      campaignRepository[5] = "funCampaign";

      var urlToShorten = "http://www.yahoo.com/test"
      // TEST
      linkGenerator.generate(urlToShorten, 5, function(err, result){
        // EXPECT
        expect(result).to.eq("http://www.yahoo.com/test?utm_campaign=funCampaign");
        done();
      });
    })
    it("it shortens the url", function(){


    });
    it("it stores the shortened url", function(){

    });
  })
});