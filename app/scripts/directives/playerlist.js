'use strict';

/**
 * @ngdoc directive
 * @name networkProjectApp.directive:playerList
 * @description
 * # playerList
 */

angular.module('networkProjectApp')
  	.directive('playerList', function (utils) {
    	return {
      		templateUrl: './views/playerlist.html',
      		restrict: 'E',
          scope: {
            'playerlist': '=',
            'victimList': '='
          },
      		link: function postLink(scope, element, attrs) {
            scope.isVictim = function (player) {
              return scope.victimList.indexOf(player) > -1;
            };
            scope.isMe = function (player) {
              var userInfo = utils.getUserInfo();
              return userInfo.name === player;
            }
    		  }
    	};
  	});
