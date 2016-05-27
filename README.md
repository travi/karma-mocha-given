karma-mocha-given
=================

[![Build Status](http://img.shields.io/travis/travi/karma-mocha-given.svg?style=flat)](https://travis-ci.org/travi/karma-mocha-given)
[![Coverage Status](http://img.shields.io/coveralls/travi/karma-mocha-given.svg?style=flat)](https://coveralls.io/r/travi/karma-mocha-given?branch=master)
[![Code Climate](http://img.shields.io/codeclimate/github/travi/karma-mocha-given.svg?style=flat)](https://codeclimate.com/github/travi/karma-mocha-given)
[![Dependency Status](http://img.shields.io/gemnasium/travi/karma-mocha-given.svg?style=flat)](https://gemnasium.com/travi/karma-mocha-given)

[![npm](https://img.shields.io/npm/v/karma-mocha-given.svg)](https://www.npmjs.com/package/karma-mocha-given)
[![license](https://img.shields.io/npm/l/karma-mocha-given.svg?style=flat)](https://www.npmjs.com/package/karma-mocha-given)

## Installation

```
$ npm install karma-mocha-given --save-dev
```

Add `mocha-given` to the `frameworks` key in your Karma configuration, before `mocha`:

```js
module.exports = function(config) {
  config.set({
    frameworks: ['mocha-given', 'mocha']
  });
}
```

If using coffeescript to make the tests read more like feature files, don't forget to use the Karma `preprocessor`:

```js
preprocessors: {
    '**/*.coffee': ['coffee']
},
```
