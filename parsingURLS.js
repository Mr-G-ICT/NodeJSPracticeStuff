var http =  require('http')

var url = require('url');
var = adr = 'http://localhost:8080/default.htm?year=2017&month=february';

var q = url.parse(adr, true);

console.log(q.host); // returns localhost8080 so would return the website URL
console.log(q.pathname); //returns the path / default.htm
console.log(q.search); //returns the result of the search

var qdata = q.query;
console.log(qdata.month);