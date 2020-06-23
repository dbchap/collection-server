const mongoose = require('mongoose');
const { mongoHost } = require('../config/appconsts');
//tell mongoose to use es6 implementation of promises
mongoose.Promise = global.Promise;

mongoose.connect(mongoHost + '/collection-app-test');
mongoose.connection
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => {
        console.warn('Error : ', error);
    });

beforeEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
        done();
    });
});