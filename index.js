'use strict';
var Filter = require('broccoli-filter');
var objectAssign = require('object-assign');
var flip = require('css-flip');

function CSSFlipFilter(inputTree, options) {
  if (!(this instanceof CSSFlipFilter)) {
    return new CSSFlipFilter(inputTree, options);
  }

  this.inputTree = inputTree;
  this.options = options || {};
}

CSSFlipFilter.prototype = Object.create(Filter.prototype);
CSSFlipFilter.prototype.constructor = CSSFlipFilter;

CSSFlipFilter.prototype.extensions = ['css'];
CSSFlipFilter.prototype.targetExtension = 'css';

CSSFlipFilter.prototype.processString = function (str, relativePath) {
  var options = objectAssign({}, this.options, {filename: relativePath});
  var result = flip(str, options);

  return result;
};

module.exports = CSSFlipFilter;
