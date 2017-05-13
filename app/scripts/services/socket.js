'use strict';

/**
 * @ngdoc service
 * @name networkProjectApp.socket
 * @description
 * # socket
 * Service in the networkProjectApp.
 */
angular.module('networkProjectApp')
  	.service('socket', function (ngSocket) {
   		var URL = 'ws://141.223.202.206',
      // var URL = 'ws://141.223.60.58',
  		PORT = '9001',
  		ws;
  	
  		ws = ngSocket(URL + ':' + PORT)

  		ws.onMessage(function (data) {
  			console.log(data)
        if (data == 'A') {
          $rootScope.$emit('A', 'Hello');
        }
  			// if (data.type === 'A') {
  			// 	$rootScope.$emit('A', 'data');
  			// } else if (data.type === 'B') {
  			// 	$rootScope.$emit('B', 'data');
  			// } else if (data.type === 'C') {
  			// 	$rootScope.$emit('C', 'data');
  			// }
  		});

  		this.send = function (data) {
  			ws.send(data);
  		};

      this.sendVotting = function () {

      };
   	});
