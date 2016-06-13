(function(){
    'use strict';

    angular.module('userControllers',['userServices']).controller('userController', userControllerFn);

    userControllerFn.$inject = ['userService', '$location', '$routeParams'];
    function userControllerFn(userService, $location, $routeParams) {
        var vm = this;

        vm.newUser = {};

        vm.addUser = function(){
            userService.createUser(vm.newUser)
                .then(function(){
                        console.dir(vm.users);
                        vm.newUser = {};
                        $location.path('/user-list');
                }, function(error){
                    console.log(error);
                    alert("failed to contact the server!");
                });
        };

        vm.viewUser = function() {
            userService.getUser($routeParams.id)
                .then(function(data){
                    console.dir(data);
                    vm.user = data;
                }, function(error){
                    console.log(error);
                    alert("failed to contact the server!");
                });
        };

        vm.deleteUser = function(id) {
            userService.deleteData(id)
                .then(function(){
                    $location.path('/user-list');
                }, function(error){
                    console.log(error);
                    alert("failed to contact the server!");
                });
        };

        vm.createNewUser = function(){
            $location.path('/add-user');
        };

        vm.viewAndDeleteUser = function(user) {
            $location.path('/user-detail/'+user.id);
        };

        vm.users = [];

        vm.usersList = function(){
            userService.getUsers()
                .then(function(data){
                        console.dir(data);
                        vm.users = data;
                }, function(error){
                    console.log(error);
                    alert("failed to contact the server!");
                });
        };
    }
})();