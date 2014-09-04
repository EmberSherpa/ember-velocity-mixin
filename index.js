module.exports = {
  name: 'ember-velocity-mixin',
  included: function(app) {
    this.app = app;
    app.import('bower_components/velocity/velocity.js');
  }
};
