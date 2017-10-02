(function () {
  'use strict';

  function configRoutes ($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/views/home/home-template.html'
      });

    $urlRouterProvider.otherwise('/');

  };

  angular.module('app').config([
    '$stateProvider',
    '$urlRouterProvider',
    configRoutes
  ]);

}());
