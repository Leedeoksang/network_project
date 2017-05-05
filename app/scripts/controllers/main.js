'use strict';

/**
 * @ngdoc function
 * @name networkProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the networkProjectApp
 */
angular.module('networkProjectApp')
  	.controller('MainCtrl', function ($rootScope, $scope, socket) {
  		$rootScope.$on('A', function (e, data) {
  			$rootScope.A = data
  		});
  		$rootScope.$on('B', function (e, data) {
  			$rootScope.B = data
  		});
  		$rootScope.$on('C', function (e, data) {
  			$rootScope.C = data
  		});

  		$scope.test = function () {
  			socket.send();
  		};
  	});
