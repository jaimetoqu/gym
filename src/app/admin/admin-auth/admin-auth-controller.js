(function () {
    "use strict";
    angular.module('admin')
    .controller('AdminAuthCtrl', AdminAuthCtrl);

    AdminAuthCtrl.$inject = ['$location', 'LoginService', 'CurrentUserModel'];
    function AdminAuthCtrl($location, LoginService, CurrentUserModel) {
        var vm = this;

        vm.logout = function () {
            // Make sure user is logged in
            if(!CurrentUserModel.isAuthenticated()) {
                return;
            }

            LoginService.logout(CurrentUserModel.getAccessToken()).then(function () {
                CurrentUserModel.saveToken('', '');
                //location url
                $location.path('/');
            });
        };
    }
})();