const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {

    mongoose.connect('mongodb://localhost/users_test');//connect to db 
    mongoose.connection
    .once('open', () => { done();})            //done callback, venter på connection
    .on('error', (error) => {                 // før der kan startes på test   
        console.warn('Warning', error);
    });
});

 //tømmer db collection users før test bliver kørt
beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        //ready to run next test
        done(); //done gør at testen ikke fortsætter før db er tømt
    }); 
});             

//before udføres 1 gang, beforeEach udføres efter hver test ('Hooks')                                
