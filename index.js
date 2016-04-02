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
  'cookie secret': '(your secret here)',

  'cloudinary config': 'cloudinary://775724521783313:CPGROhGYZwwHJ0RaUc9RCJWX2qA@the-yellow-men',
  'cloudinary folders': true,
});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();
