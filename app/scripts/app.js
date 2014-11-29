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
		.when('/posts/:postId', {
		    templateUrl: 'views/showpost.html',
		    controller: 'PostViewCtrl'
		  })
		.when('/register', {
		  templateUrl: 'views/register.html',
		  controller: 'AuthCtrl',
		  resolve: {
		    user: function(Auth) {
		      return Auth.resolveUser();
		    }
		  }
		})
		.when('/login', {
		  templateUrl: 'views/login.html',
		  controller: 'AuthCtrl',
		  resolve: {
		    user: function(Auth) {
		      return Auth.resolveUser();
		    }
		  }
		})
	  	.when('/users/:userId', {
		  templateUrl: 'views/profile.html',
		  controller: 'ProfileCtrl'
		})
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FIREBASE_URL', 'https://resplendent-torch-898.firebaseio.com/');
