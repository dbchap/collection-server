const assert = require('assert');
const Collectionitem = require('../models/collectionitem');

describe('Creating documents', () => {
    it('creates a collectionitem', (done) => {
        const collectionItem = new Collectionitem({ label: 'item1', columnIdx: 0 });
        collectionItem.save() //takes some time and returns a promise
            .then(() => {
                assert(!collectionItem.isNew); //if collectionItem is saved to db it is not new
                done();
            });
    });
});