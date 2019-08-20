'use strict';

const http = require('http');
const queries = require('./queries.js');

http.createServer((req, res) => {
  res.write("hello world!" + queries.foo());
  res.end();
}).listen(8080);

console.log(`Listening on port 8080`);