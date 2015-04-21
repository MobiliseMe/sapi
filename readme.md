Node.js Sensis.com.au API (SAPI) Library
========================================
A library for searching the Sensis.com.au API (SAPI) in Node.js
Based upon official documentation and examples from other languages - <http://developers.sensis.com.au/docs> and <http://developers.sensis.com.au/docs/examples>

Dependencies
------------

* Node 0.8.X+

Installation
------------
> npm install sapi

Usage
------
    
    var sapi = require('sapi');
    sapi(query, options);


## Where:
* query:
  Search params, includes: query, location, postcode, etc.
  Should be passed as an object. Eg: {query: 'Restaurants', location: 'Umina Beach'}
  To browse all supported search params, please see <http://developers.sensis.com.au/docs/endpoint_reference/Search>
* options:
  Search options, includes: key, environment.
  Should be passed as an object. Eg: {key: 'XXXXXXXX', environment: 'prod'}
  Key should be set to your API key. Environment should be set to either 'test' or 'prod' - defaults to 'test'.

### Examples

    var sapi = require('sapi');

    var options = {
      key: 'XXXXXXXX', //Set to your API key
      environment: 'test' //either 'prod' or 'test'. Defaults to test,
    }

    //Define search params, 
    var query = {
      query: 'Restaurants',
      location: 'Umina Beach',
      sortBy: 'distance',
      rows: 1
    }

    //Query SAPI
    sapi(query, options, function(cb){
      console.log("Your closest restaurant is: " + cb);
    });

To-Do
-----
* see (<https://github.com/emerleite/node-gravatar/issues>)

Author
------

* Mobilise Me (<http://mobilisme.com.au/>)

License:
--------

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.