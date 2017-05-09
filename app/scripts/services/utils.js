'use strict';

/**
 * @ngdoc service
 * @name networkProjectApp.utils
 * @description
 * # utils
 * Service in the networkProjectApp.
 */
angular.module('networkProjectApp')
	.service('utils', function () {
  		this.userInfo = {};

  		this.setUserInfo = function (userInfo) {
  			this.userInfo.nickname = userInfo.nickname;
  			this.userInfo.occupation = userInfo.occupation;
  		};

  		this.getUserInfo = function () {
  			return this.userInfo;
  		};
		
	});
