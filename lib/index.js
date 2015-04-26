'use strict';

var path = require('path');

function addFileTo(files, file) {
    files.unshift({
        pattern: file,
        included: true,
        served: true,
        watched: false
    });
}

function framework(files) {
    addFileTo(files, __dirname + '/set-ui.js');
    addFileTo(files, path.dirname(require.resolve('mocha-given')) + '/browser/mocha-given.js');
}

framework.$inject = ['config.files'];

module.exports = {
    'framework:mocha-given': ['factory', framework]
};