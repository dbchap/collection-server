const CollectionItem = require('../models/collectionitem');

async function findAll(ctx) {
    const collectionitems = await CollectionItem.find({});
    ctx.body = collectionitems;
}

async function create(ctx) {
    const collectionitem = new CollectionItem(ctx.request.body);
    const savedItem = await collectionitem.save();
    ctx.body = savedItem;
}

async function remove(ctx) {
    const { id } = ctx.params;
    const collectionitem = CollectionItem.findById(id);
    const removedItem = await collectionitem.remove();
    ctx.body = removedItem;
}

module.exports = {
    findAll,
    create,
    remove
};