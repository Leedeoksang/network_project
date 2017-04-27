'use strict';

/**
 * @ngdoc directive
 * @name networkProjectApp.directive:vottingField
 * @description
 * # vottingField
 */
angular.module('networkProjectApp')
  .directive('vottingField', function () {
    return {
      templateUrl: './views/vottingfield.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	
      }
    };
  });
