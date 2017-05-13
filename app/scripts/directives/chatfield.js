'use strict';

/**
 * @ngdoc directive
 * @name networkProjectApp.directive:chatField
 * @description
 * # chatField
 */
angular.module('networkProjectApp')
  	.directive('chatField', function (utils, socket) {
   		return {
      		templateUrl: './views/chatfield.html',
      		restrict: 'E',
      		scope: {
                'chatBroadcast': '@'
            },
      		link: function postLink(scope, element, attrs) {
        		var userInfo = utils.getUserInfo();

        		scope.data = {
        			text: '',
        			chatList: [{
        				timestamp: 0,
        				occupation: 'test',
        				text: 'test chat'
 	       				},{
 	       				timestamp: 0,
 	       				occupation: 'test',
        				text: 'test chat'
        			}]
        		};

        		scope.messageSend = function (e) {
        			var now,
        				scroller,
                        data;
        			if (e.key == 'Enter') {
        				// send function needed
        				now = new Date();
                        data = {
                            timestamp: now.getTime(),
                            occupation: userInfo.occupation,
                            type: 'generalchatting',
                            text: scope.data.text
                        }
        				scope.data.chatList.push(data);
        				scope.data.text = '';
                        socket.send(data);
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
