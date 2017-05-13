'use strict';

/**
 * @ngdoc service
 * @name networkProjectApp.socket
 * @description
 * # socket
 * Service in the networkProjectApp.
 */
angular.module('networkProjectApp')
  	.service('socket', function (ngSocket, $rootScope) {
   		var URL = 'ws://121.180.237.167',
      // var URL = 'ws://141.223.60.58',
  		PORT = '9001',
  		ws;

  		ws = ngSocket(URL + ':' + PORT);
  		ws.onMessage(function (data) {
         console.log(data);
         data=JSON.parse(data['data']);

  			if (data.type === 'generalchatting') {
  				$rootScope.$emit('broadcast', data);
  			} else if (data.type === 'mafiachatting') {
  				$rootScope.$emit('B', 'data');
  			} else if (data.type === 'player_list') {
          console.log("ccc");
  				$rootScope.$emit('player_list', data);
  			}
  		});

  		this.send = function (data) {
        console.log(data)
  			ws.send(data);
  		};

      this.sendVotting = function () {

      };
   	});
