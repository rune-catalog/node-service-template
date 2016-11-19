'use strict';

const restify = require('restify'),
  Piloted = require('piloted'),
  ContainerPilot = require('/etc/containerpilot.json');

Piloted.config(ContainerPilot, err => console.error(err));

let server = restify.createServer();
server.get('/status', require('./handlers/status'));

server.listen(8080, () => {
  console.log(`${server.name} listening on ${server.url}`);
});
