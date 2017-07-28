(function () {
    "use strict";
    angular.module('public', ['ui.router', 'common'])
    .config(MainRoutes);

    MainRoutes.$inject = ['$stateProvider'];
    function MainRoutes($stateProvider) {
        $stateProvider
            .state('public', {
                abstract: true,
                templateUrl: 'app/public/public.html'
            })
            .state('public.home', {
                url: '/',
                templateUrl: 'app/public/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'homeC'
            })
            .state('public.events', {
                url: '/events',
                templateUrl: 'app/public/events/events.html',
                controller: 'EventsCtrl',
                controllerAs: 'eventsC'
            })
            .state('public.galery', {
                url: '/galery',
                templateUrl: 'app/public/galery/galery.html',
                //controller: 'GaleryCtrl',
                //controllerAs: 'galery'
            })
            .state('public.contact', {
                url: '/contact',
                templateUrl: 'app/public/contact/contact.html',
                //controller: 'ContactCtrl',
                //controllerAs: 'contact'
            })
            .state('public.about', {
                url: '/about',
                templateUrl: 'app/public/about/about.html'
            });
    }
})();