var adapter = require('../index')['framework:mocha-given'],
    assert = require('chai').assert,
    path = require('path');

suite('Mocha-Given Karma adapter tests', function () {
    'use strict';

    test('that the karma dependency injection format is met', function () {
        assert.equal(adapter[0], 'factory');
        assert.isFunction(adapter[1]);
    });

    test('that the file list will be injected', function () {
        assert.equal(adapter[1].$inject[0], 'config.files');
    });

    test('that the mocha-given adapter is added to the file list', function () {
        var fileList = [],
            originalFileCount = fileList.length;

        adapter[1](fileList);

        assert.equal(fileList.length, originalFileCount + 1);
        assert.include(fileList, {
            pattern: path.dirname(require.resolve('mocha-given') + '/index.js'),
            included: true,
            served: true,
            watched: false
        });
    });
});