const mongoose = require('mongoose');
const appconsts = require('../config/appconsts');

const CollectionItemSchema = new mongoose.Schema({
    column: { type: Number, min: 0, max: appconsts.MAX_COLUMN_IDX },
    label: { type: String, trim: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('collectionitem', CollectionItemSchema);