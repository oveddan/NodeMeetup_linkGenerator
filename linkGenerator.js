var campaignRepository = require("./campaignRepository");

var linkGenerator = {
  generate : function(url, campaignId){
    var campaignName = campaignRepository[campaignId];

    return url + "?utm_campaign=" + campaignName;
  }
};

module.exports = linkGenerator;