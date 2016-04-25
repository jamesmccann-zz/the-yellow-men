require('dotenv').config();
var keystone = require('keystone');

keystone.init({
  'name': 'Yellow Men',
  'static': ['public'],
  'views': 'templates/views',
  'view engine': 'ejs',

  'auto update': true,
  'mongo': process.env.MONGO_URI,

  'session': false,
  'auth': false,
  'user model': undefined,
  'cookie secret': process.env.SECRET,

  'cloudinary folders': true,
});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();
