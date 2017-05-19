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
   		var URL = 'ws://119.202.81.112',
      // var URL = 'ws://141.223.60.58',
  		PORT = '10000',
  		ws,
      victimList = [],
      me;


  		ws = ngSocket(URL + ':' + PORT);

  		ws.onMessage(function (data) {
        console.log(data);
        if (victimList.indexOf(me) < 0) {
          console.log(data);
          data = JSON.parse(data['data']);
    			if (data.type === 'generalchatting') {
    				$rootScope.$emit('generalchatting', data);
    			} else if (data.type === 'mafiachatting') {
    				$rootScope.$emit('mafiachatting', data);
    			} else if (data.type === 'player_list') {
            console.log(data);
    				$rootScope.$emit('player_list', data);
    			} else if (data.type === 'job') {
            $rootScope.$emit('job', data);
          } else if (data.type == 'time') {
            $rootScope.$emit('time', data);
          } else if (data.type === 'day_voting') {
            $rootScope.$emit('day_voting', data);
          } else if (data.type === 'night_voting') {
            $rootScope.$emit('night_voting', data);
          } else if (data.type === 'victim') {
            $rootScope.$emit('victim', data);
            victimList.push(data['content']);
          } else if (data.type === 'player_name') {
            $rootScope.$emit('player_name', data);
            me = data['content'];
          } else if (data.type === 'systemmsg') {
            $rootScope.$emit('systemmsg', data);
          } else if (data.type === 'votingend') {
            $rootScope.$emit('votingend', data);
          } else if (data.type === 'result') {
            $rootScope.$emit('result', data);
          }
        }
   		});

  		this.send = function (data) {
        console.log(data)
  			ws.send(data);
  		};
      this.start = function (data) {
        data.type = 'gamestart';
        this.send(data);
      };
      this.ready = function (data) {
        data.type = 'gameready';
        this.send(data);
      };
      this.sendDayVote = function (data) {
        data.type = 'day_voting';
        this.send(data);
      };
      this.sendNightVote = function (data) {
        data.type = 'night_voting';
        this.send(data);
      };
      this.close = function (data) {
        ws.close();
      };
   	});
// 