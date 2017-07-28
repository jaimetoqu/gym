(function () {
    "use strict";
    angular.module('admin')
    .service('AuthRedirectorService', AuthRedirectorService);

    AuthRedirectorService.$inject = ['$state', 'CurrentUserModel'];
    function AuthRedirectorService($state, CurrentUserModel) {
        var vm = this;

        /**
         * Processes the logic when a state begins. We ensure that
         * the user is authenticated before letting them proceed
         * to the next page.
         */
        vm.onStateChangeStart = function (event, toState, toParams, fromState, fromParams) {
            //Only redirect if going to an admin state
            //unless going directly to login
            if (toState.name.indexOf('admin.') === 0 && toState.name != 'admin.login' 
            && !CurrentUserModel.isAuthenticated()) {
                event.preventDefault();
                $state.go('admin.login', {
                    'toState': toState,
                    'toParams': toParams
                });
            }
        };
    }
})();