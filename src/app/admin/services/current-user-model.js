(function () {
    "use strict";
    angular.module('admin')
    .service('CurrentUserModel', CurrentUserModel);

    function CurrentUserModel() {
        var vm = this;
        var userName = '';
        var accessToken = ''; 

        vm.saveToken = function (userName, token) {
            userName = userName;
            accessToken = accessToken;
        };

        vm.getAccessToken = function () {
            return accessToken;
        };
        
        vm.getUserName = function () {
            return userName;
        };

        vm.isAuthenticated = function () {
            return accessToken !== '';
        };
    }
})();
