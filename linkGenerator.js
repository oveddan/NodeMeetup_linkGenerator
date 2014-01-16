var campaignRepository = require("./campaignRepository");

var linkGenerator = {
  generate : function(url, campaignId, cb){
    var campaignName = campaignRepository[campaignId];

    var result = url + "?utm_campaign=" + campaignName;

    cb(null, result);
  }
};

module.exports = linkGenerator;