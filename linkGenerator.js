var campaignsHash = require("./campaignsHash"),
  bitlyShortener = require('./bitlyShortener');

var linkGenerator = {
  generate : function(url, campaignId, cb){
    if(!(campaignsHash.hasOwnProperty(campaignId))){
      cb("Invalid campaign id");
    } else {  
      var campaignName = campaignsHash[campaignId];

      var trackingUrl = url + "?utm_campaign=" + campaignName;

      bitlyShortener.shortenUrl(trackingUrl, function(err, shortenedUrl){
        cb(null, shortenedUrl);
      });
    }
  }
};

module.exports = linkGenerator;