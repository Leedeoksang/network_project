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
      		scope: {
                'mafiachatting': '=',
                'dayVotingList': '=',
                'nightVotingList': '=',
                'dayvot': '=',
                'dayvotComplete': '=',
                'nightvot': '=',
                'nightvotComplete': '=',
                'job': '=',

            },
      		link: function postLink(scope, element, attrs) {
      			var userInfo = utils.getUserInfo();

    			scope.data = {
    				text: ''
    			};  

                scope.vot = function (type) {
                    var data = {};
                    if (type === 'day') {
                        scope.dayvotComplete = true;
                        data.content = scope.data.selected;
                        socket.sendDayVote(data);
                    } else if (type === 'night') {
                        scope.nightvotComplete = true;
                        data.content = scope.data.selected2;
                        socket.sendNightVote(data);
                    }
                };


        		scope.messageSend = function (e) {
        			var now,
        				scroller,
                        data;

        			if (e.key == 'Enter') {
        				// send function needed
        				now = new Date();
        				data ={
        					// timestamp: now.getTime(),
        					occupation: userInfo.occupation,
                            type: 'mafiachatting',
        					text: scope.data.text
        				};
        				scope.data.text = '';
                        socket.send(data);
        				scroller = angular.element(document.querySelector('#mafia-field-container'));
        				scroller[0].scrollTop = scroller[0].scrollHeight;
        			}
        		};

                scope.ready = function () {
                    var data = {};
                    socket.ready(data);
                };
                scope.start = function () {
                    var data = {};
                    socket.start(data);
                };
                scope.clickGeneral = function (general) {
                    // send general vot
                };
                scope.clickMafia = function (mafia) {
                    var data = {
                        content: mafia.name
                    };
                    socket.sendNightVote(data);
                    // send mafia vot
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
