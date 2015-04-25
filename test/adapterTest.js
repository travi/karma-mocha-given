var adapter = require('../index'),
    assert = require('chai').assert;

suite('Mocha-Given Karma adapter tests', function () {
    'use strict';

    test('that the karma dependency injection format is met', function () {
        assert.equal(adapter['framework:mocha-given'][0], 'framework');
    });
});