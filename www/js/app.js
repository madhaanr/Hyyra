var Hyy = angular.module('Hyyra', ['ionic']);
Hyy.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
  $stateProvider
    .state('home', {
      url:'/',
      controller: 'HyyraController',
      templateUrl: 'index.html'
    })
    .state('restaurants', {
      controller: 'cafeApiController',
      templateUrl: 'templates/restaurants.html'
    });
});