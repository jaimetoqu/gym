(function () {
    "use strict";

    angular.module('admin')
    .factory('AuthHttpInterceptor', AuthHttpInterceptor);

    AuthHttpInterceptor.$inject = ['CurrentUserModel'];
    function AuthHttpInterceptor(CurrentUserModel) {
        return {
            request: function (config) {
                if (CurrentUserModel.isAuthenticated()) {
                    config.headers.Authorization = "Bearer " +
                    CurrentUserModel.getAccessToken();
                }

                return config;
            }
        };
    }
})();