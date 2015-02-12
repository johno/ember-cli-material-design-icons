import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  name: '',
  size: null,
  iconClass: null,
  spin: false,
  spinReverse: false,
  flip: null,
  rotate: null,

  iconClassDeclaration: function() {
    return [
      mdPrefix(this.get('name')),
      mdPrefix(this.get('size')),
      getRotateClassDeclaration(this.get('rotate')),
      getFlipClassDeclaration(this.get('flip')),
      getSpinningClassDeclaration(this.get('spin'), this.get('spinReverse')),
      this.get('iconClass')
    ].compact().join(' ');
  }.property('name', 'size' ,'iconClass', 'spin', 'spinDirection'),
});

function getSpinningClassDeclaration(spin, spinReverse) {
  if (spinReverse) {
    return 'mdi-spin mdi-spin-reverse';
  } else if (spin) {
    return 'mdi-spin';
  } else  {
    return null;
  }
}

function getRotateClassDeclaration(rotate) {
  if(rotate) {
    return mdPrefix('rotate-' + rotate);
  } else {
    return null;
  }
}

function getFlipClassDeclaration(flip) {
  if(flip) {
    return mdPrefix('flip-' + flip);
  } else {
    return null;
  }
}

function mdPrefix(className) {
  if (className) {
    return 'mdi-' + className;
  } else {
    return null;
  }
}
