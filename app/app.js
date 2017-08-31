'use strict';

/**
 * @ngdoc overview
 * @name moviemaniaApp
 * @description
 * # moviemaniaApp
 *
 * Main module of the application.
 */
angular
  .module('moviemaniaApp', [
  	'ngAnimate',
  	'ngCookies',
  	'ngResouces'
    	'ngRoute',
    	'ngSanitize',
    	'ngTough'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });