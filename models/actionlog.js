const mongoose = require('mongoose');
const appconsts = require('../config/appconsts');

const ActionLogSchema = new mongoose.Schema({
    action: { type: String }
}, {
    timestamps: true,
    capped: { max: 20 }
});

module.exports = mongoose.model('actionlog', ActionLogSchema);