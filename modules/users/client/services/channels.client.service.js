(function () {
    'use strict';
  
    // Users service used for communicating with the users REST endpoint
    angular
      .module('users.services')
      .factory('ChannelsService', ChannelsService);
  
      ChannelsService.$inject = ['$resource'];
  
    function ChannelsService($resource) {
      var Channels = $resource('/api/channels', {}, {
        update: {
          method: 'PUT'
        },
        channels:getChannels(),
        deleteProvider: {
          method: 'DELETE',
          url: '/api/users/accounts',
          params: {
            provider: '@provider'
          }
        }
      });

      angular.extend(Channels, {
        loadChannels: function(){
            return getChannels();
        }
      });
  
      return Channels;
    }

    function getChannels(){
        var channels = [
            {'id':127,'name':'BHT1 HD','number':1,'censored':0,'genre_id':'svi-kanali','favorite':0,'archive':1,'archive_range':120,'pvr':0,'monitoring_status':1,'logo':'\/interface\/misc\/logos\/320\/127.jpg','url':''},
            {'id':128,'name':'Channel 2','number':1,'censored':0,'genre_id':'svi-kanali','favorite':0,'archive':1,'archive_range':120,'pvr':0,'monitoring_status':1,'logo':'\/interface\/misc\/logos\/320\/127.jpg','url':''},
            {'id':129,'name':'Channel 3','number':1,'censored':0,'genre_id':'svi-kanali','favorite':0,'archive':1,'archive_range':120,'pvr':0,'monitoring_status':1,'logo':'\/interface\/misc\/logos\/320\/127.jpg','url':''},
            {'id':130,'name':'Channel 4','number':1,'censored':0,'genre_id':'svi-kanali','favorite':0,'archive':1,'archive_range':120,'pvr':0,'monitoring_status':1,'logo':'\/interface\/misc\/logos\/320\/127.jpg','url':''},
            {'id':131,'name':'Channel 5','number':1,'censored':0,'genre_id':'svi-kanali','favorite':0,'archive':1,'archive_range':120,'pvr':0,'monitoring_status':1,'logo':'\/interface\/misc\/logos\/320\/127.jpg','url':''},
            {'id':132,'name':'Channel 6','number':1,'censored':0,'genre_id':'svi-kanali','favorite':0,'archive':1,'archive_range':120,'pvr':0,'monitoring_status':1,'logo':'\/interface\/misc\/logos\/320\/127.jpg','url':''},
            {'id':133,'name':'Channel 7','number':1,'censored':0,'genre_id':'svi-kanali','favorite':0,'archive':1,'archive_range':120,'pvr':0,'monitoring_status':1,'logo':'\/interface\/misc\/logos\/320\/127.jpg','url':''},
            {'id':134,'name':'Channel 8','number':1,'censored':0,'genre_id':'svi-kanali','favorite':0,'archive':1,'archive_range':120,'pvr':0,'monitoring_status':1,'logo':'\/interface\/misc\/logos\/320\/127.jpg','url':''},
            {'id':135,'name':'Channel 9','number':1,'censored':0,'genre_id':'svi-kanali','favorite':0,'archive':1,'archive_range':120,'pvr':0,'monitoring_status':1,'logo':'\/interface\/misc\/logos\/320\/127.jpg','url':''},
            {'id':132,'name':'Channel 6','number':1,'censored':0,'genre_id':'svi-kanali','favorite':0,'archive':1,'archive_range':120,'pvr':0,'monitoring_status':1,'logo':'\/interface\/misc\/logos\/320\/127.jpg','url':''},
            {'id':133,'name':'Channel 7','number':1,'censored':0,'genre_id':'svi-kanali','favorite':0,'archive':1,'archive_range':120,'pvr':0,'monitoring_status':1,'logo':'\/interface\/misc\/logos\/320\/127.jpg','url':''},
            {'id':134,'name':'Channel 8','number':1,'censored':0,'genre_id':'svi-kanali','favorite':0,'archive':1,'archive_range':120,'pvr':0,'monitoring_status':1,'logo':'\/interface\/misc\/logos\/320\/127.jpg','url':''},
            {'id':135,'name':'Channel 9','number':1,'censored':0,'genre_id':'svi-kanali','favorite':0,'archive':1,'archive_range':120,'pvr':0,'monitoring_status':1,'logo':'\/interface\/misc\/logos\/320\/127.jpg','url':''},
            {'id':132,'name':'Channel 6','number':1,'censored':0,'genre_id':'svi-kanali','favorite':0,'archive':1,'archive_range':120,'pvr':0,'monitoring_status':1,'logo':'\/interface\/misc\/logos\/320\/127.jpg','url':''},
            {'id':133,'name':'Channel 7','number':1,'censored':0,'genre_id':'svi-kanali','favorite':0,'archive':1,'archive_range':120,'pvr':0,'monitoring_status':1,'logo':'\/interface\/misc\/logos\/320\/127.jpg','url':''},
            {'id':134,'name':'Channel 8','number':1,'censored':0,'genre_id':'svi-kanali','favorite':0,'archive':1,'archive_range':120,'pvr':0,'monitoring_status':1,'logo':'\/interface\/misc\/logos\/320\/127.jpg','url':''},
            {'id':135,'name':'Channel 9','number':1,'censored':0,'genre_id':'svi-kanali','favorite':0,'archive':1,'archive_range':120,'pvr':0,'monitoring_status':1,'logo':'\/interface\/misc\/logos\/320\/127.jpg','url':''},
            {'id':136,'name':'Channel 10','number':1,'censored':0,'genre_id':'svi-kanali','favorite':0,'archive':1,'archive_range':120,'pvr':0,'monitoring_status':1,'logo':'\/interface\/misc\/logos\/320\/127.jpg','url':''}];
          
            return channels;
        
    }
  
  }());
  