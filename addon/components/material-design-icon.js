import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'i',
  name: '',
  classNameBindings: ['prefixedClass'],

  prefixedClass: Ember.computed('name', function() {
    return `mdi mdi-${ this.get('name') }`;
  })
});
