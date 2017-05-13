'use strict';

/**
 * @ngdoc function
 * @name networkProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the networkProjectApp
 */
angular.module('networkProjectApp')
  	.controller('MainCtrl', function ($rootScope, $scope, socket, utils, $window) {
  		$scope.generalchatting = [];
      $scope.mafiachatting = [];

      $rootScope.$on('generalchatting', function (e, data) {
        console.log('main general');
        console.log('main');
  			$scope.generalchatting.push(data);
        console.log($scope.generalchatting);
  		});
  		$rootScope.$on('mafiachatting', function (e, data) {
        console.log('main mafia');
        $scope.mafiachatting = data;
      });
      $rootScope.$on('playerlist', function (e, data) {
        console.log('playerlist');
        $scope.playerlist = data;
      });
     

      $scope.init = function () {
        var userInfo = {};

        userInfo.nickname = 'network';
        userInfo.occupation = 'Doctor';

        utils.setUserInfo(userInfo);
      };

      $scope.init();

  	});
