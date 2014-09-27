'use strict';
var assert = require('assert');
var fs = require('fs');
var path = require('path');
var broccoli = require('broccoli');
var flip = require('./');

it('should flip the css', function() {
  var builder = new broccoli.Builder(flip('fixture'));

  return builder.build().then(function(dir) {
    var content = fs.readFileSync(path.join(dir.directory, 'source.css'), 'utf8');
    var expected = fs.readFileSync(path.join('fixture', 'expected.css'), 'utf8');

    assert.equal(expected, content);
  });
});
