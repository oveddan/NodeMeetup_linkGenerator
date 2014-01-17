var Bitly = require('bitly');
var bitly = new Bitly('nodejsdemo', 'R_4f0e856576154ebfe17675ee0260ddbb');

var bitlyShortener = {
  shortenUrl : function(url, cb){
    // shortenurl and cb with it

    bitly.shorten(url, function(err, response) {
      if (err) throw err;

      // See http://code.google.com/p/bitly-api/wiki/ApiDocumentation for format of returned object
      var short_url = response.data.url

      // Do something with data
      cb(null, short_url);
    });
  }
};

module.exports = bitlyShortener;