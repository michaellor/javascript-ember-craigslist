import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  contact: DS.attr(),
  category: DS.belongsTo('category', {async: true}),
  subcategory: DS.attr()
});
