const assert = require('assert');
const Collectionitem = require('../models/collectionitem');

let collectionitem;
const label = 'test1';
const columnIdx = 0;
describe('Reading collection item details', (done) => {
    beforeEach((done) => {
        collectionitem = new Collectionitem({ label, columnIdx });
        collectionitem.save().then(() => done());
    });
    it(`finds collection item with the label of ${label} and columnIdx ${columnIdx}`, (done) => {
        Collectionitem.findOne({ label, columnIdx })
            .then((collectionItem) => {
                assert(collectionItem.label === label);
                done();
            });
    })
})