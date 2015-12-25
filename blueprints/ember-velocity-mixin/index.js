/*jshint node:true*/
module.exports = {
  description: 'Install Dependencies',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    this.addAddonToProject('ember-cli-velocity');
  }
};
