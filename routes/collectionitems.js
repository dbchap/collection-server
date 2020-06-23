const Router = require('koa-router');

const router = new Router();
const CollectionItemsCtrl = require('../controllers/collectionitems');

router.get('/', CollectionItemsCtrl.findAll);
router.post('/', CollectionItemsCtrl.create);
router.delete('/:id', CollectionItemsCtrl.remove);

module.exports = router.routes();