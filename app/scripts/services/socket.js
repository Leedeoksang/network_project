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
   		var URL = 'ws://141.223.205.31',
      // var URL = 'ws://141.223.60.58',
  		PORT = '9001',
  		ws;

  		ws = ngSocket(URL + ':' + PORT);
  		ws.onMessage(function (data) {
        data = JSON.parse(data['data']);
        console.log(data)
         console.log(data['content'])
  			if (data.type === 'generalchatting') {
  				$rootScope.$emit('generalchatting', data);
  			} else if (data.type === 'mafiachatting') {
  				$rootScope.$emit('mafiachatting', data);
  			} else if (data.type === 'player_list') {
  				$rootScope.$emit('player_list', data);
  			}
  		});

  		this.send = function (data) {
        console.log(data)
  			ws.send(data);
  		};
      this.start = function (data) {
        data.type = 'gamestart';
        this.send(data);
      }
      this.ready = function (data) {
        data.type = 'gameready';
        this.send(data);
      }

      this.sendvote = function (data) {
        console.log("sendvote");
        data.type = 'night_voting';
        this.send(data);
      }

   	});
