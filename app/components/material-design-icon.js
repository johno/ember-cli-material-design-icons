import Ember from 'ember';

export default Ember.Component.extend({
  name: '',
  size: null,
  iconClass: null,

  iconClassDeclaration: function() {
    return [
      mdPrefix(this.get('name')),
      mdPrefix(this.get('size')),
      this.get('iconClass')
    ].compact().join(' ');
  }.property('name', 'size' ,'iconClass'),
});

function mdPrefix(className) {
  if (className) {
    return 'md-' + className;
  } else {
    return null;
  }
}
