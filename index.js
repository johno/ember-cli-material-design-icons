'use strict';

module.exports = {
  name: 'ember-cli-material-design-icons',

  included: function included(app) {
    this.app = app;
    this._super.included(app);

    app.import(app.bowerDirectory + '/material-design-icons/**/*.svg', { destDir: 'material-design-icons' });
  }
};
