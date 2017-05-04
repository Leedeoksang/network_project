'use strict';

/**
 * @ngdoc directive
 * @name networkProjectApp.directive:playerList
 * @description
 * # playerList
 */

angular.module('networkProjectApp')
  	.directive('playerList', function () {
    	return {
      		templateUrl: './views/playerlist.html',
      		restrict: 'E',
      		link: function postLink(scope, element, attrs) {
            scope.players = [{
              name: 'Player1'
            },{
              name: 'Player2'
            }]
            scope.name = 'Player1';
            scope.role = 'Doctor';
    		}
    	};
  	});
