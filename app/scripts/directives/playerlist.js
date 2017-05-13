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
          scope: {
            "playerlist": '='
          },
      		link: function postLink(scope, element, attrs) {
            // scope.playerlist = [{
            //   name:
            // }]
    		  }
    	};
  	});
