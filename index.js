'use strict';

var path = require('path');

function framework(files) {
    files.unshift({
        pattern: path.dirname(require.resolve('mocha-given')) + '/index.js',
        included: true,
        served: true,
        watched: false
    });
}

framework.$inject = ['config.files'];

module.exports = {
    'framework:mocha-given': ['framework', framework]
};