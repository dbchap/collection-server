const ActionLog = require("../models/actionlog");

async function create(ctx) {
    const log = new ActionLog(ctx.request.body);
    const savedLog = await log.save();
    const latestResults = await ActionLog.find({}).sort({ createdAt: -1 }).limit(20);
    await ActionLog.deleteMany({});
    await ActionLog.insertMany(latestResults);
    ctx.body = savedLog;
}

async function findAll(ctx) {
    const latestResults = await ActionLog.find({}).sort({ createdAt: -1 }).limit(10);
    console.log('latest restuls' , latestResults.length);
    ctx.body = latestResults;
} 


module.exports = {
    findAll,
    create,
};