# [broccoli](https://github.com/joliss/broccoli)-[css-flip](https://github.com/twitter/css-flip) [![Build Status](https://travis-ci.org/zeppelin/broccoli-css-flip.svg?branch=master)](https://travis-ci.org/zeppelin/broccoli-css-flip)

> [css-flip](https://github.com/twitter/css-flip) A CSS BiDi flipper. Generate left-to-right (LTR) or right-to-left (RTL) CSS from your source.

*Issues with the output should be reported on the [css-flip issues page](https://github.com/twitter/css-flip).*


## Install

```sh
$ npm install --save broccoli-css-flip
```


## Usage

```js
var flip = require('broccoli-css-flip');
tree = flip(tree);
```


## API

### flip(tree, options)

#### Options

`options` are passed directly to css-flip.


## License

MIT &copy; [Gabor Babicz](http://zeppelin.im)
