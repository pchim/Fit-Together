const { assert, expect } = require('chai');
const request = require('request');
const http = require('http');

// set up testing database
process.env.NODE_ENV = 'testing';
let server; 
let hostAddress;

/* global describe, it, expect, before, after, beforeEach, afterEach */
/* eslint-disable func-names, prefer-arrow-callback, global-require */
describe('Server', function () {
  before(function () {
    server = require('../src/server/server.js'); 
    hostAddress = `http://localhost:${server.address().port}`;
  });

  after(function () {
    server.close();
  });

  it('should connect to /', function (done) {
    http.get(hostAddress, function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
