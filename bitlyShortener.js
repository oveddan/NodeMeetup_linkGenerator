var Bitly = require('bitly');
var bitly = new Bitly('o_tekb5q7qk', 'R_188ad068d61bfd991992dd281d064378');

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