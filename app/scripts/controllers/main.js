'use strict';

/**
 * @ngdoc function
 * @name networkProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the networkProjectApp
 */
angular.module('networkProjectApp')
  	.controller('MainCtrl', function ($timeout, $rootScope, $scope, socket, utils, $window) {
  		$scope.generalchatting = ['Please ready! Player1 will start game'];
      $scope.mafiachatting = [];
      $scope.victimList = [];

      $rootScope.$on('generalchatting', function (e, data) {
        var scroller;
        console.log('main general');
  			$scope.generalchatting.push(data['content']);
        $timeout(function () {
          scroller = angular.element(document.querySelector('#chat-field-container'))
          scroller[0].scrollTop = scroller[0].scrollHeight;
        },200);
  		});
  		$rootScope.$on('mafiachatting', function (e, data) {
        var scroller;
        console.log('main mafia');
        $scope.mafiachatting.push(data['content']);
        $timeout(function () {
          scroller = angular.element(document.querySelector('#mafia-field-container'))
          scroller[0].scrollTop = scroller[0].scrollHeight;
        },200);
      });
      $rootScope.$on('player_list', function (e, data) {
        console.log('player list');
        $scope.playerlist = data['content'];
      });
      $rootScope.$on('job', function (e, data) {
        var job = data['content'];
        $scope.job = job;
        utils.setUserJob(job);
      });
      $rootScope.$on('day_voting', function (e, data) {
        $scope.dayVotingList = data['content'];
      });
      $rootScope.$on('night_voting', function (e, data) {
        $scope.nightVotingList = data['content'];
        console.log($scope.nightVotingList);
      });
      $rootScope.$on('time', function (e, data) {
        $scope.time = data['content'];
      });
      $rootScope.$on('victim', function (e, data) {
        var userInfo = utils.getUserInfo();

        $scope.victimList.push(data['content']);
        if ($scope.victimList.indexOf(userInfo.name) > -1) {
          $scope.mainDisable = true;
        }
      });
      $rootScope.$on('player_name', function (e, data) {
        utils.setUserName(data['content']);
      });

      $window.onbeforeunload = function (event) {
        socket.close();
      };
      window.onbeforeunload = function (event) {
        socket.close();
      };

      $scope.init = function () {
        var userInfo = {};

        // userInfo.nickname = 'network';
        // userInfo.occupation = 'Doctor';

        // utils.setUserInfo(userInfo);
      };

      $scope.init();

  	});
