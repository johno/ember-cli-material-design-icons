'use strict';

module.exports = {
  name: 'ember-cli-material-design-icons',

  included: function(app) {
    this._super.included(app);

    this.app.import('vendor/css/material-icons.css');
    this.app.import('vendor/fonts/MaterialIcons-Regular.eot', { destDir: 'fonts' });
    this.app.import('vendor/fonts/MaterialIcons-Regular.svg', { destDir: 'fonts' });
    this.app.import('vendor/fonts/MaterialIcons-Regular.ttf', { destDir: 'fonts' });
    this.app.import('vendor/fonts/MaterialIcons-Regular.woff', { destDir: 'fonts' });
  }
};
