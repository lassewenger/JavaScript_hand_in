const assert = require('assert');
const User = require('../src/user');

describe('Delete a user', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'Joe' });
        joe.save()
        .then(() => done());
    });

    //det ene specifike instanseret objekt
    it('model instance remove', (done) => {
        joe.remove()
        .then(() => User.findOne({ name: 'Joe'}))
        .then((user) => {
            assert(user === null);
            done();
        });
    });

    //fra selve klassen
    it('class method remove', (done) => {
        //klasse metode sletter alle der opfylder kriteriet
        User.remove({ name: 'Joe'})
        .then(() => User.findOne({ name: 'Joe' }))
        .then((user) => {
            assert(user === null)
            done();
        });
    });

    it('class method findAndRemove', (done) => {
        User.findOneAndRemove({ name: 'Joe' })
        .then(() => User.findOne ({ name: 'Joe'}))
        .then((user) => {
            assert(user === null);
            done();
        });
    });

    it('class method findByIdAndRemove', (done) => {
        User.findByIdAndRemove(joe._id)
        .then(() => User.findOne ({ name: 'Joe'}))
        .then((user) => {
            assert(user === null);
            done();
        });
    });
});

