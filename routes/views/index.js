var keystone = require('keystone');
var Work = keystone.list('Work');

module.exports = function(req, res) {
  var view = new keystone.View(req, res);

  var locals = res.locals

  view.on('init', function(next) {

    Work.model.find()
      .where('state', 'published')
      .limit(4)
      .exec(function(err, works) {
        locals.works = [].concat(works)
        next(err)
      });

  })

  view.render('index');
};
