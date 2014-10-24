'use strict';

module.exports = {
  name: 'ember-cli-material-design-icons',

  included: function(app) {
    this._super.included(app);

    this.app.import('vendor/css/material-design-iconic-font.css');
    this.app.import('vendor/fonts/Material-Design-Iconic-Font.eot', { destDir: 'fonts' });
    this.app.import('vendor/fonts/Material-Design-Iconic-Font.svg', { destDir: 'fonts' });
    this.app.import('vendor/fonts/Material-Design-Iconic-Font.ttf', { destDir: 'fonts' });
    this.app.import('vendor/fonts/Material-Design-Iconic-Font.woff', { destDir: 'fonts' });
  }
};
