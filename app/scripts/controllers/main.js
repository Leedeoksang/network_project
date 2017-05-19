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
  		$scope.generalchatting = [{
        type: 'chat',
        message: 'Please ready! Player1 will start game'
      }];
      $scope.mafiachatting = [];
      $scope.victimList = [];
      $scope.dayvot = false;
      $scope.nightvot = false;

      $rootScope.$on('generalchatting', function (e, data) {
        var scroller;
        console.log('main general');
  			$scope.generalchatting.push({
          type: 'chat',
          message: data['content']
        });
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
        $scope.dayChatDisable = true;
        $scope.dayvot = true;
        $scope.dayVotingList = data['content'];
      });
      $rootScope.$on('night_voting', function (e, data) {
        $scope.dayChatDisable = true;
        $scope.nightvot = true;
        $scope.nightVotingList = data['content'];
      });
      $rootScope.$on('time', function (e, data) {
        $scope.dayvotComplete = false;
        $scope.nightvotComplete = false;
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
      $rootScope.$on('systemmsg', function (e, data) {
        if (data['content'] === 'night started') {
          $scope.dayChatDisable = true;
        } else if (data['content'] === 'day started') {
          $scope.dayChatDisable = false;
        }
        $scope.generalchatting.push({
          type: 'system',
          message: data['content']
        });
      });
      $rootScope.$on('votingend', function (e, data) {
        console.log('vot end');
        $scope.dayChatDisable = false;
        $scope.dayvot = false;
        $scope.nightvot = false;
      });
      $rootScope.$on('result', function (e, data) {
        if (data['content'] === 'mafia') {
          $scope.mafiaWin = true;
        } else {
          $scope.civilianWin = true;
        }
      });

      $window.onbeforeunload = function (event) {
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
