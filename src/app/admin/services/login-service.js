(function () {
    "use strict";
    angular.module('admin')
    .service('LoginService', LoginService);

    LoginService.$inject = ['$http', 'ApiPath'];
    function LoginService($http, ApiPath) {
        var vm = this;

        //Retrieves an access token using a username and password 
        vm.getAccessToken = function (userName, password) {
            var params = {
                'userName': userName,
                'password': password,
                'grant_type': password
            };

            return $http.get(ApiPath + '/token', params).then(function (response) {
                return response.data.access_token;
            });
        };

        //Make request to revoke current token
        vm.logout = function (tokenValue) {
            var params = {
                token_type_hint: 'access_token',
                token: tokenValue
            };

            return $http.post(ApiPath + '/revoke', params);
            
        };
    }

})();