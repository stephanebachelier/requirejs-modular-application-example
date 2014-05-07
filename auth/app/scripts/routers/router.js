define([
  'marionette'
],

function (Marionette) {
  'use strict';

  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      login: 'login'
    }
  });

  return Router;
});
