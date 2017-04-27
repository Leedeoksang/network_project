'use strict';

/**
 * @ngdoc directive
 * @name networkProjectApp.directive:chatField
 * @description
 * # chatField
 */
angular.module('networkProjectApp')
  .directive('chatField', function () {
    return {
      templateUrl: './views/chatfield.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
