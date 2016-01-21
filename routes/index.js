var keystone = require('keystone'),
  middleware = require('./middleware'),
  importRoutes = keystone.importer(__dirname);

keystone.pre('routes', middleware.initErrorHandlers);

keystone.set('404', function(req, res, next) {
  res.notfound();
});

keystone.set('500', function(err, req, res, next) {
  var title, message;
  if (err instanceof Error) {
      message = err.message;
      err = err.stack;
  }
  res.err(err, title, message);
});

var routes = {
  views: importRoutes('./views')
};

exports = module.exports = function(app) {
  app.get('/', routes.views.index);
}
