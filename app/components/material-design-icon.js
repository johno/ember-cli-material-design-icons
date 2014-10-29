import Ember from 'ember';

export default Ember.Component.extend({
  name: '',
  size: null,
  iconClass: null,
  spin: false,
  spinReverse: false,

  iconClassDeclaration: function() {
    return [
      mdPrefix(this.get('name')),
      mdPrefix(this.get('size')),
      getSpinningClassDeclaration(this.get('spin'), this.get('spinReverse')),
      this.get('iconClass')
    ].compact().join(' ');
  }.property('name', 'size' ,'iconClass', 'spin', 'spinDirection'),
});

function getSpinningClassDeclaration(spin, spinReverse) {
  if (spinReverse) {
    return 'md-spin md-spin-reverse';
  } else if (spin) {
    return 'md-spin';
  } else  {
    return null;
  }
}

function mdPrefix(className) {
  if (className) {
    return 'md-' + className;
  } else {
    return null;
  }
}
