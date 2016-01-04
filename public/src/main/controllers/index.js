var angular = require('angular');

var controllers = angular.module('controllers', []);
controllers.controller('HomeCtrl', ['$scope', 'usSpinnerService', require('./homeCtrl.js')]);

module.exports = controllers;