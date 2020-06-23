module.exports = (router) => {
  router.prefix('/v1')
  router.use('/collectionitems', require('./collectionitems'))
  router.use('/logger', require('./logger'))
}
