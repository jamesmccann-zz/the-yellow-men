require('dotenv').config();
var keystone = require('keystone');
var basicAuth = require('./basic-auth');

keystone.init({
  'name': 'Yellow Men',
  'static': ['public'],
  'views': 'templates/views',
  'view engine': 'ejs',

  'auto update': false,
  'mongo': process.env.MONGO_URI,

  'session': false,
  'auth': basicAuth(process.env.ADMIN_USER, process.env.ADMIN_PASS),
  'user model': undefined,
  'cookie secret': process.env.SECRET,

  'cloudinary folders': true,
});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();
