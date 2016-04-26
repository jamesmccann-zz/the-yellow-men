var keystone = require('keystone');
var Work = keystone.list('Work');
var ContentBlock = keystone.list('ContentBlock');

module.exports = function(req, res) {
  var view = new keystone.View(req, res);

  var locals = res.locals

  view.on('init', function(next) {
    ContentBlock.model.findOne()
      .where('name', 'home-intro')
      .exec(function(err, cb) {
        locals.intro = cb
        next(err)
    });
  });

  view.on('init', function(next) {
    Work.model.find()
      .where('state', 'published')
      .sort('-date')
      .exec(function(err, works) {
        locals.works = [].concat(works)
        next(err)
      });

  })

  view.render('home/index');
};
