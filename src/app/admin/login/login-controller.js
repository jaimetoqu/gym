(function () {
    "use strict";
    angular.module('admin')
    .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$state', 'LoginService', 'CurrentUserModel'];

    function LoginCtrl($state, LoginService, CurrentUserModel) {
        var vm = this;
        vm.username = '';
        vm.password = '';
        vm.error = '';

        //Handles when user clicks the login button.
        vm.login = function () {
            LoginService.getAccessToken(vm.username, vm.password).then(function (accessToken) {
                CurrentUserModel.saveToke(vm.username, accessToken);

                // If user went directly to login page, redirect to admin home
                if(!$state.params || !$state.params.toState) {
                    $state.go('admin.auth');
                } else {
                    $state.go($state.params.toState.name, $state.params.toParams);
                }
            }, function (response) {
                vm.error = "Login Failed: Username or password did not match";
            });
        };

        vm.valid = function () {
            return (vm.username !== '' && vm.password !== '');
        };
    }
})();