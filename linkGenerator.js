var campaignsHash = require("./campaignsHash"),
  bitlyShortener = require('./bitlyShortener');

var linkGenerator = {
  generate : function(url, campaignId, emitter, cb){
    if(!(campaignsHash.hasOwnProperty(campaignId))){
      cb("Invalid campaign id");
    } else {  
      var campaignName = campaignsHash[campaignId];

      var trackingUrl = url + "?utm_campaign=" + campaignName;

      bitlyShortener.shortenUrl(trackingUrl, function(err, shortenedUrl){
        if(err)
          cb(err);
        else {
          emitter.emit('linkGenerated', {resultUrl : shortenedUrl});
          cb(null, shortenedUrl); 
        }
      });
    }
  }
};

module.exports = linkGenerator;