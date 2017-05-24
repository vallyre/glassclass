(function(ng) {

  ng.module('GlassClassApp', ['ui.router', 'LocalStorageModule']);

  ng.module('GlassClassApp').config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider.state('GlassParent', {
          url: '/',
          abstract: true,
          template: '<ui-view></ui-view>'
      }).state('GlassParent.classes', {
          url: 'classes',
          templateUrl: 'classes.html',
          controller: 'ClassesController as classctrl'
      });

  });

})(angular);
