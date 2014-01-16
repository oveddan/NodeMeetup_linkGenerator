var expect = require('chai').expect;

var campaignRepository = require("../campaignRepository"),
  linkGenerator = require("../linkGenerator");


describe("linkGenerator", function(){
  describe("generate(url, campaignId)", function(){
    it("it generates a tracking url based on the campaign id", function(){
      var campaignId = 5;
      campaignRepository[5] = "funCampaign";

      var urlToShorten = "http://www.yahoo.com/test"

      var result = linkGenerator.generate(urlToShorten, 5);

      expect(result).to.eq("http://www.yahoo.com/test?utm_campaign=funCampaign");
    })
    it("it shortens the url", function(){
      
    });
    it("it stores the shortened url", function(){

    });
  })
});