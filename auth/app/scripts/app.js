define([
  'marionette',
  'backbone',
  'controllers/auth',
  'routers/router'
],

function (Marionette, Backbone, AuthController, Router) {
  'use strict';

  return function (options) {
    var app = new Marionette.Application();

    app.addRegions({layout: options.el});

    app.addInitializer(function () {
      this.router = new Router({
        controller: new AuthController({region: app.layout})
      });
    });

    app.addInitializer(function () {
      Backbone.history.start();
    });

    return app;
  };

});
