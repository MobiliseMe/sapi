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
    return callback(JSON.parse(body));
  });
}
module.exports = search;