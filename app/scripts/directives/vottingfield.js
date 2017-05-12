'use strict';

/**
 * @ngdoc directive
 * @name networkProjectApp.directive:vottingField
 * @description
 * # vottingField
 */
angular.module('networkProjectApp')
  	.directive('vottingField', function (utils, socket) {
    	return {
      		templateUrl: './views/vottingfield.html',
      		restrict: 'E',
      		scope: {},
      		link: function postLink(scope, element, attrs) {
      			var userInfo = utils.getUserInfo();
          scope.test = function(){
            socket.send('ddd');
          }
    			scope.data = {
    				generalList: [],
    				mafiaList: [],
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

    			scope.ready = function () {

    			};
    			scope.start = function () {

    			};
    			scope.clickGeneral = function (general) {
    				// send general vot
    			};
    			scope.clickMafia = function (mafia) {
    				// send mafia vot
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
        				scroller = angular.element(document.querySelector('#mafia-field-container'))
        				scroller[0].scrollTop = scroller[0].scrollHeight;
        			}
        		};
        		scope.messageReceive = function () {
        			scroller = angular.element(document.querySelector('#mafia-field-container'))
    				scroller[0].scrollTop = scroller[0].scrollHeight;
        		};

        		scope.getDate = function (timestamp) {
        			var date = new Date(timestamp);
        			return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        		};

        		scope.renew = function () {
    				scope.data.generalList = [{
    					name: 'Player1'
    				},{
    					name: 'Player2'
    				}];

    				scope.data.mafiaList = [{
    					name: 'Player3'
    				},{
    					name: 'Player4'
    				}];
    			};

    			scope.renew();
      		}
    	};
  	});
