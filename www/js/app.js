(function () {
  'use strict';
  angular.module('Hyyra', ['ionic', 'ngStorage','ngMock'])
    .run(function ($ionicPlatform) {
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
        .state('restaurants', {
          url: '/',
          controller: 'RestaurantsController',
          templateUrl: 'templates/restaurants.html'
        })
        .state('restaurant', {
          url: '/restaurant/:restaurantId',
          controller: 'RestaurantController',
          templateUrl: 'templates/restaurant.html'
        })
        .state('selectedRestaurants', {
          url: '/restaurants/selected',
          controller: 'SelectedRestaurantsController',
          templateUrl: 'templates/selectedRestaurants.html'
        })
    });
})();
