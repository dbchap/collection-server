const assert = require('assert');
const Collectionitem = require('../models/collectionitem');
const ActionLog = require('../models/actionlog');

let logTest = [];
for (let idxTest = 0; idxTest < 25; ++idxTest) {
    logTest.push(new ActionLog({ action: 'test ' + idxTest }));
}

describe('Log tests', () => {
    beforeEach('creates 25 logs and limits to 20', (done) => {
        ActionLog.insertMany(logTest)
            .then((docs) => {

                ActionLog.find({}).
                    sort({ createdAt: -1 })
                    .limit(20)
                    .then(latestResults => {
                        ActionLog.deleteMany({}).then(() => {
                            ActionLog.insertMany(latestResults).then(() => done());
                        })
                    });
            })
    });

    it('only keeps 20', (done) => {
        ActionLog.find({}).limit(20)
            .then(actions => {
                console.log('found actions ', actions.length);
                assert(actions.length == 20);
                done();
            })
    });
});