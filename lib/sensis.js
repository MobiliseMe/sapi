var request = require('request');
var querystring = require('querystring');

function search(query, options, callback) {
  var key = options.key || 'unspecified';
  var environment = options.environment || 'test';
  var params = querystring.stringify(query);
  var endpoint = 'http://api.sensis.com.au/ob-20110511/' + environment +'/search?key=' + key;
  var urlparams = (params && "&" + params) || "";      
  var query = endpoint + urlparams;

  request(query, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      return callback(body); 
    } else {
      return callback(body);
    }
  });
}
module.exports = search;