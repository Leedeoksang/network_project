'use strict';

/**
 * @ngdoc function
 * @name networkProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the networkProjectApp
 */
angular.module('networkProjectApp')
  	.controller('MainCtrl', function ($rootScope, $scope, socket, utils) {
  		
      $rootScope.$on('generalchatting', function (e, data) {
        console.log('main general');
  			$scope.genearlbroadcast = data;
  		});
  		$rootScope.$on('mafiachatting', function (e, data) {
        console.log('main mafia');
        $scope.mafiabroadcast = data;
      });


      // var data = JSON.parse("{timestamp: 1494695732767, text: abc, type: generalchatting, occupation: Doctor}");
      // var data = JSON.parse("{'a': 'b'}")
      // console.log(data)
    //   $rootScope.$on('', function (e, data) {

    //   });

      $scope.init = function () {
        var userInfo = {};

        userInfo.nickname = 'network';
        userInfo.occupation = 'Doctor';

        utils.setUserInfo(userInfo);
      };

      $scope.init();

  	});
