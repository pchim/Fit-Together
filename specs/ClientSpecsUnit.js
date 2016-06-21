const { assert, expect } = require('chai');
const React = require('react');
const { Link } = require('react-router');
const { mount, shallow, render } = require('enzyme');
const App = require('../src/client/components/App.js');

/* global describe, it, expect */
/* eslint-disable func-names, prefer-arrow-callback */

describe('App', function () {
  // TODO: test which react components contain other components
  // in order to drive hwo our UI will be developed
  it('should contain a link to the home page', function () {
    // expect(shallow(<App />)).to.contain(Link);
  });

  // base test to check that our test suite is working
  describe('Array', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(5));
    });
  });
});
