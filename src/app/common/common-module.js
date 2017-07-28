(function (params) {
    "use strict";
    angular.module('common', [])
    .constant('ApiPath', 'http://jsonplaceholder.typicode.com')
    .config(config)

    config.$inject = ['$httpProvider'];
    function config($httpProvider) {
        
    }
})();