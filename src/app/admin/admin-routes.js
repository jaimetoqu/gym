(function () {
    "use strict";

    angular.module('admin')
    .config(config);

    config.$inject = ['$stateProvider', '$httpProvider'];
    function config($stateProvider, $httpProvider) {
        $httpProvider.interceptors.push('authHttpInterceptor');
        $httpProvider.defaults.headers.common.Accept = 'application/json';

        $stateProvider
            
            //Contains base state that all admin states inherit
            .state('admin', {
                url: '/admin',
                abstract: true,
                templateUrl: 'app/admin/admin.html'
            })
            // Contains state that all authenticated states inherit
            .state('admin.auth', {
                url: '',
                templateUrl: 'app/admin/admin-auth/admin-auth.html',
                controller: 'AdminAuthCtrl',
                controllerAs: 'adminAuth'
            })
            .state('admin.login', {
                url: '/login',
                templateUrl: 'app/admin/login/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login',
                //These are params that this state expects to be populated
                //Allows us to pass via $state.go(path, params)
                params: {
                    toParams: null,
                    toState: null
                }
            })
            .state('admin.auth.events', {
                url: "/events/{eventId}",
                templateUrl: "app/admin/events/events-edit.html",
                /*controller: 'EventsEditCtrl',
                controllerAs: 'eventsEdit',
                resolve: {
                    event: ['$stateParams', 'EventService', function ($stateParams, EventService) {
                    return EventService.getMenuItem($stateParams.eventId);
                    }]
                }*/
            });
    }
})();