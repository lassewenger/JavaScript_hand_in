const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
    it('saves a user', (done) => {
        const joe = new User({name: 'Joe'});

        joe.save()
        .then(() => { //callback successful save 
            assert(!joe.isNew);
            done();
        })
    });
});