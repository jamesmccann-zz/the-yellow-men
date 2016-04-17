var keystone = require('keystone');
var Types = keystone.Field.Types;

var Video = new keystone.List('Video', {
  autokey: { from: 'name', path: 'key', unique: true },
  defaultSort: 'created_at',
  defaultColumns: 'name, createdAt'
});

Video.add({
  name: { type: String, required: true, intial: true },
  createdAt: { type: Types.Date, default: Date.now },
  video: { type: Types.S3File },
  thumbnail: { type: Types.CloudinaryImage }
});

Video.relationship({ path: 'works', ref: 'Work', refPath: 'videos' });

Video.register();
