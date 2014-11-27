'use strict';

/* global app:true */
/* exported app */

/**
 * @ngdoc overview
 * @name extratimeApp
 * @description
 * # extratimeApp
 *
 * Main module of the application.
 */
var app = angular
  .module('extratimeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
	  .when('/', {
	      templateUrl: 'views/posts.html',
	      controller: 'PostsCtrl'
	    })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FIREBASE_URL', 'https://resplendent-torch-898.firebaseio.com/');
