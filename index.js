var keystone = require('keystone');

keystone.init({
  'name': 'Yellow Men',
  'static': ['public'],
  'views': 'templates/views',
  'view engine': 'ejs',

  'auto update': false,
  'mongo': 'mongodb://localhost/yellow-men',

  'session': false,
  'auth': false,
  'user model': undefined,
  'cookie secret': '(your secret here)'
});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();
