const assert = require('assert');
const Collectionitem = require('../models/collectionitem');

let collectionitem;
const label = 'test1';
const columnIdx = 0;
describe('Deleting collection item', (done) => {
    beforeEach((done) => {
        collectionitem = new Collectionitem({ label, columnIdx });
        collectionitem.save().then(() => done());
    });
    it(`removes collection item using label ${label} and columnIdx ${columnIdx}`, (done) => {
        collectionitem.remove()
            .then(() => Collectionitem.findOne({ label, columnIdx }))
            .then((foundItem) => {
                assert(foundItem === null);
                done();
            });

    })
})