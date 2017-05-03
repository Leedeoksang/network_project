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
            scope.testarray = [{name: "test1", role: "role1"}, {name: "test2", role: "role2"}];
    		}
    	};
  	});
