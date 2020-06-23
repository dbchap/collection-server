const Router = require('koa-router');

const router = new Router();
const Logger = require('../controllers/logger');

router.get('/', Logger.findAll);
router.post('/', Logger.create);

module.exports = router.routes();