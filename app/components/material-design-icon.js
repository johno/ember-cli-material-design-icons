import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  name: '',
  iconClass: null,

  iconClassDeclaration: Ember.computed('name', 'iconClass', function() {
    return `mdi mdi-${ this.get('name') } ${ this.get('iconClass') }`;
  })
});

function mdPrefix(className) {
  if (className) {
    return 'mdi mdi-' + className;
  } else {
    return null;
  }
}
