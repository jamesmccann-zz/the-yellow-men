var keystone = require('keystone');
var Types = keystone.Field.Types;

var ContentBlock = new keystone.List('ContentBlock', {
  autokey: { from: 'name', path: 'key', unique: true },
  defaultColumns: 'name, content'
});

ContentBlock.add({
  name: { type: String },
  content: { type: Types.Textarea },
  createdAt: { type: Date, default: Date.now }
})

ContentBlock.register();

