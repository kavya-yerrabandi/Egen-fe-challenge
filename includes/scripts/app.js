(function(){
    'use strict';

    angular.
        module('userProfile',['ngRoute', 'userControllers', 'ngMessages']).
        config(['$locationProvider', '$routeProvider',
            function config($locationProvider, $routeProvider) {


                $routeProvider.
                when('/user-list', {
                    templateUrl: 'includes/views/user-list.html',
                    controller: 'userController',
                    controllerAs: 'userCtrl'
                }).
                when('/add-user', {
                    templateUrl: 'includes/views/add-user.html',
                    controller: 'userController',
                    controllerAs: 'userCtrl'
                }).
                when('/user-detail/:id', {
                    templateUrl: 'includes/views/user-detail.html',
                    controller: 'userController',
                    controllerAs: 'userCtrl'
                }).
                otherwise('/user-list');
            }
        ]);
})();