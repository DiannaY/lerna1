'use strict';

const create = require('..');

describe('@lerna1/create', () => {
    it('needs tests', () => {
        expect(create()).toBe('create');
    });
});
