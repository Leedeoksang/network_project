'use strict';

/**
 * @ngdoc directive
 * @name networkProjectApp.directive:chatField
 * @description
 * # chatField
 */
angular.module('networkProjectApp')
  	.directive('chatField', function (utils) {
   		return {
      		templateUrl: './views/chatfield.html',
      		restrict: 'E',
      		scope: {},
      		link: function postLink(scope, element, attrs) {
        		var userInfo = utils.getUserInfo();

        		scope.data = {
        			text: '',
        			chatList: [{
        				timestamp: 0,
        				nickname: 'test',
        				text: 'test chat'
 	       				},{
 	       				timestamp: 0,
 	       				nickname: 'test',
        				text: 'test chat'
        			}]
        		};

        		scope.messageSend = function (e) {
        			var now,
        				scroller;
        			if (e.key == 'Enter') {
        				// send function needed
        				now = new Date();
        				scope.data.chatList.push({
        					timestamp: now.getTime(),
        					nickname: userInfo.nickname,
        					text: scope.data.text
        				});
        				scope.data.text = '';
        				scroller = angular.element(document.querySelector('#chat-field-container'))
        				scroller[0].scrollTop = scroller[0].scrollHeight;
        			}
        		};
        		scope.messageReceive = function () {
        			scroller = angular.element(document.querySelector('#chat-field-container'))
    				scroller[0].scrollTop = scroller[0].scrollHeight;
        		};

        		scope.getDate = function (timestamp) {
        			var date = new Date(timestamp);
        			return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        		};
      		}
    	};
  	});
