'use strict';

// Declare app level module which depends on views, and components
angular.module('movieManiaApp', [
  'ngAnimate',
  'ngCookies',
  'ngResources',
  'ngRoute'
  'ngSanitize'
  'ngTough'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
