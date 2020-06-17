module.exports = (router) => {
  router.prefix('/v1')
  router.use('/collectionitems', require('./collectionitems'))
}
