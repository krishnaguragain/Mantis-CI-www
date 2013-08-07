define([
  'views/SplashView',
  'views/AboutView',
  'views/FavoritesView',
  'views/ReposView',
  'views/ReposIndexView',
  'views/SearchView',
  'views/ReposListControlView',
  'views/ReposListView',
  'views/SearchboxView',
  'views/RepoView',
  'views/RepoTabsView',
  'views/BuildView',
  'views/BuildsView',
  'views/BuildsItemView',
  'views/JobsView',
  'views/JobsItemView',
  'views/JobView',
  'views/LogView'
], function (SplashView, AboutView, FavoritesView, ReposView, ReposIndexView, SearchView, ReposListControlView, ReposListView, SearchboxView, RepoView, RepoTabsView, BuildView, BuildsView, BuildsItemView, JobsView, JobsItemView, JobView, LogViews) {
  return {
    SplashView           : SplashView,
    AboutView            : AboutView,
    FavoritesView        : FavoritesView,
    ReposView            : ReposView,
    ReposIndexView       : ReposIndexView,
    SearchView           : SearchView,
    ReposListControlView : ReposListControlView,
    ReposListView        : ReposListView,
    SearchboxView        : SearchboxView,
    RepoView             : RepoView,
    RepoTabsView         : RepoTabsView,
    BuildView            : BuildView,
    BuildsView           : BuildsView,
    BuildsItemView       : BuildsItemView,
    JobsView             : JobsView,
    JobsItemView         : JobsItemView,
    JobView              : JobView,
    LogView              : LogViews.LogView,
    PreView              : LogViews.PreView
  };
});