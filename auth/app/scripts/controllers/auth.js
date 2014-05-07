define([
  'marionette',
  'views/login'
],

function (Marionette, LoginView) {
  'use strict';

  var AuthController = Marionette.Controller.extend({
    initialize: function (options) {
      this.region = options.region;
    },

    login: function () {
      this.region.show(new LoginView());
    }
  });

  return AuthController;
});
