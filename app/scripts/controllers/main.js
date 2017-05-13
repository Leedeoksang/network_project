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
  			$scope.generalchatting.push(data['content']);
        console.log($scope.generalchatting);
  		});
  		$rootScope.$on('mafiachatting', function (e, data) {
        console.log('main mafia');
        $scope.mafiachatting = data;
      });
      $rootScope.$on('player_list', function(e, data){
        console.log('player list');
        console.log(data['content'])
        $scope.playerlist = data['content'];
      });

      $scope.init = function () {
        var userInfo = {};

        userInfo.nickname = 'network';
        userInfo.occupation = 'Doctor';

        utils.setUserInfo(userInfo);
      };

      $scope.init();

  	});
