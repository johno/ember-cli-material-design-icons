/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-material-design-icons',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);

    app.import('vendor/css/material-icons.css');
    app.import('vendor/fonts/MaterialIcons-Regular.eot', { destDir: 'fonts' });
    app.import('vendor/fonts/MaterialIcons-Regular.svg', { destDir: 'fonts' });
    app.import('vendor/fonts/MaterialIcons-Regular.ttf', { destDir: 'fonts' });
    app.import('vendor/fonts/MaterialIcons-Regular.woff', { destDir: 'fonts' });
  }
};
