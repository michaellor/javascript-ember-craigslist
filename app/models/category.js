import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  city: DS.attr(),
  state: DS.attr(),
  country: DS.attr(),
  listings: DS.hasMany('listing', { async: true})
});
