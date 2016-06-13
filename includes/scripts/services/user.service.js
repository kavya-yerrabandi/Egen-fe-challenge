(function(){
    'use strict';

    var services = angular.module('userServices', []);

    var baseUrl = 'http://mocker.egen.io';

    services.service('userService', ['$http', '$q', function($http, $q){
        var self = this;
        self.getUsers = function(){
            return $http.get(baseUrl+'/users')
                .then(successFn, errorFn);
        };
        self.createUser = function(data){
            return $http.post(baseUrl+'/users',data)
                .then(successFn, errorFn);
        };
        self.getUser = function(id){
            return $http.get(baseUrl+'/users/'+id)
                .then(successFn, errorFn);
        };
        self.deleteData = function(id){
            return $http.delete(baseUrl+'/users/'+id)
                .then(successFn, errorFn);
        };

        function successFn(response) {
            return response.data;
        }

        function errorFn(response) {
            return $q.reject('Error: ' + response.statusText);
        }
    }]);


})();

