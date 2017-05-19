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
      		restrict: 'EA',
      		scope: {
                'generalchatting': '=',
                'dayChatDisable': '='
            },
      		link: function postLink(scope, element, attrs) {
        		var userInfo = utils.getUserInfo();

        		scope.data = {
        			text: ''
        		};

        		scope.messageSend = function (e) {
        			var now,
        				scroller,
                        data;
        			if (e.key == 'Enter') {
        				now = new Date();
                data = {
                    // timestamp: now.getTime(),
                    occupation: userInfo.occupation,
                    type: 'generalchatting',
                    text: scope.data.text
                };
        				// scope.generalchatting.push(scope.data.text)
        				scope.data.text = '';
                socket.send(data);
        			}
        		};
      		}
    	};
  	});
