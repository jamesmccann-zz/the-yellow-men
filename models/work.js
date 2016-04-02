var keystone = require('keystone');
var Types = keystone.Field.Types;

var Work = new keystone.List('Work', {
  autokey: { from: 'title', path: 'key', unique: true },
  defaultSort: 'date',
  defaultColumns: 'title, date'
});

Work.add({
  title: { type: String, required: true, initial: true },
  date: { type: Types.Date, index: true },
  images: { type: Types.CloudinaryImages },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
  description: { type: Types.Textarea },
  createdAt: { type: Date, default: Date.now }
})

Work.register();
