'use strict';

const restify = require('restify');

let server = restify.createServer();

server.get('/status', require('./handlers/status'));

server.listen(8080, () => {
  console.log(`${server.name} listening on ${server.url}`);
});
