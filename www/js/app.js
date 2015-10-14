var Hyy = angular.module('Hyyra', ['ionic']);
Hyy.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/')
    $stateProvider.state('/', {
      controller: 'HyyraController',
      templateUrl: '/'
    })
    ;
});