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
  		$scope.generalchatting = ['Please ready! Player1 will start game'];
      $scope.mafiachatting = [];

      $rootScope.$on('generalchatting', function (e, data) {
        var scroller;
        console.log('main general');
  			$scope.generalchatting.push(data['content']);
        scroller = angular.element(document.querySelector('#chat-field-container'))
        scroller[0].scrollTop = scroller[0].scrollHeight;
  		});
  		$rootScope.$on('mafiachatting', function (e, data) {
        var scroller;
        console.log('main mafia');
        $scope.mafiachatting.push(data['content']);
        scroller = angular.element(document.querySelector('#chat-field-container'))
        scroller[0].scrollTop = scroller[0].scrollHeight;
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
        $scope.dayVottingList = data['content'];
      });
      $rootScope.$on('night_voting', function (e, data) {
        $scope.nightVottingList = data['content'];
      });
      $rootScope.$on('time', function (e, data) {
        $scope.time = data['content'];
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
