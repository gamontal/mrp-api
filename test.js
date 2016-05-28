'use strict';

const mrp = require('./index')('NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo');
const assert = require('chai').assert;

let options = {
  earth_date: '2014-6-6'
};

describe('Testing API responses', function() {
  describe('Curiosity rover tests', function () {
    it('should return 25 photos', function () {
      mrp.curiosity(options, function (err, result) {
        assert.equal(result.photos.length, 25);
      });
    });
  });

  describe('Opportunity rover tests', function () {
    it('should return 25 photos', function () {
      mrp.opportunity(options, function (err, result) {
        assert.equal(result.photos.length, 25);
      });
    });
  });

  describe('Spirit rover tests', function () {
    it('should return null', function () {
      mrp.spirit(options, function (err, result) {
        assert.equal(result, null);
      });
    });
  });
});

