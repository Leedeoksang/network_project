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

  		// this.setUserInfo = function (userInfo) {
  		// 	this.userInfo.nickname = userInfo.nickname;
  		// 	this.userInfo.job = userInfo.job;
  		// };
      this.setUserJob = function (job) {
        this.userInfo.job = job;
      };
      this.setUserName = function (name) {
        this.userInfo.name = name;
      }
  		this.getUserInfo = function () {
  			return this.userInfo;
  		};
		
	});
