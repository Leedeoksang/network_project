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
              name: 'PLAYER I',
              role: 'Doctor'
            },{
              name: 'PLAYER II',
              role: 'Sheriff'
            },{
              name: 'PLAYER III',
              role: 'Civilian'
            }]
    		}
    	};
  	});
