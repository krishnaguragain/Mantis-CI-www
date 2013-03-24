define([
  'ember',
  'ext/Helpers',
  'hbs!repo/build'
], function (Ember, Helpers) {
  return Ember.View.extend({
    templateName     : 'repo/build',
    classNames       : ['build'],
    classNameBindings: ['color', 'loading'],
    loadingBinding   : 'controller.loading',
    color            : function () {
      return Helpers.colorForState(this.get('controller.build.state'));
    }.property('controller.build.state')
  });
});