var keystone = require('keystone');
var Work = keystone.list('Work');

module.exports = function(req, res) {
  var view = new keystone.View(req, res);

  var params = req.params
  var locals = res.locals

  view.on('init', function(next) {

    Work.model.findOne()
      .where('key', params.key)
      .where('state', 'published')
      .exec(function(err, work) {
        locals.work = work
        next(err)
      });

  })

  view.render('work/index');
};
