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
              name: 'Player1',
              role: 'Doctor'
            },{
              name: 'Player2',
              role: 'Sheriff'
            },{
              name: 'Player3',
              role: 'Civilian'
            }]
    		}
    	};
  	});
