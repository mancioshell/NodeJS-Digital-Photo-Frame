var angular = require('angular');
require('angular-spinner');
var angularRoute = require('angular-route');
var controllers = require('./controllers');

var mainApp =  angular.module('mainApp', [
    'ngRoute',
    'angularSpinner',
    'controllers'
]);

mainApp.config(['$routeProvider',
    function($routeProvider) {

		$routeProvider.
	    when('/home', {
	        templateUrl: 'home.html',
	        controller: 'HomeCtrl',
	        controllerAs: 'vm',
	    }).
	    otherwise({
	        redirectTo: '/home'
	    });
	}
]);
