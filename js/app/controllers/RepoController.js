define([
  'ext/jquery.ext',
  'ember',
  'ext/TravisUrls',
  'app/utils'
], function ($, Ember, TravisUrls, utils) {

  var RepoController = Ember.Controller.extend({
    bindings   : [],
    needs      : ['repos'],
    isLoading  : function () {
      return this.get('repo').get('isLoading');
    }.property('repo.isLoading'),
    gitHubUrl  : function () {
      return TravisUrls.githubRepo(this.get('repo.slug'));
    }.property('repo.slug'),
    activate   : function (action) {
      utils.debug('RepoController::activate:> action: ' + action);
      this._unbind();
      return this["view" + ($.camelize(action))]();
    },
    viewCurrent: function () {
      utils.debug('RepoController::viewCurrent:>');
      return this._bind('build', 'repo.lastBuild');
    },
    viewBuild  : function () {
      utils.debug('RepoController::viewBuild:>');
    },
    _bind      : function (to, from) {
      utils.debug('RepoController::_bind> to: ' + to + ' from: ' + from);
      return this.bindings.push(Ember.oneWay(this, to, from));
    },
    _unbind    : function () {
      var binding, _i, _len, _ref;
      _ref = this.bindings;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        binding = _ref[_i];
        binding.disconnect(this);
      }
      return this.bindings.clear();
    }
  });

  return  RepoController;

});