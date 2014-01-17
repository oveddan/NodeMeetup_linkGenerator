var campaignRepository = require("./campaignRepository"),
  bitlyShortener = require('./bitlyShortener');

var linkGenerator = {
  generate : function(url, campaignId, cb){
    if(!(campaignRepository.hasOwnProperty(campaignId))){
      cb("Invalid campaign id");
    } else {  
      var campaignName = campaignRepository[campaignId];

      var trackingUrl = url + "?utm_campaign=" + campaignName;

      bitlyShortener.shortenUrl(trackingUrl, function(err, shortenedUrl){
        cb(null, shortenedUrl);
      });
    }
  }
};

module.exports = linkGenerator;