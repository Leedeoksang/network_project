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
   		var URL = 'ws://119.202.81.165',
  		PORT = '8765',
  		ws;
  	
  		ws = ngSocket(URL + ':' + PORT)

  		ws.onMessage(function (data) {
  			console.log(data)
  			if (data.type === 'A') {
  				$rootScope.$emit('A', 'data');
  			} else if (data.type === 'B') {
  				$rootScope.$emit('B', 'data');
  			} else if (data.type === 'C') {
  				$rootScope.$emit('C', 'data');
  			}
  		});

  		this.send = function (data) {
  			console.log('haha');
  			ws.send(data);
  		};
  		
   	});
