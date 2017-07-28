(function () {
    "use strict";
    angular.module('public')
    .controller('EventsCtrl', EventsCtrl);

    EventsCtrl.$inject = ['$http', 'ApiPath'];
    function EventsCtrl($http, ApiPath, EventModel) {
        var vm = this;
        vm.all = [];
        $http.get(ApiPath + '/posts').then(function (data) {
            vm.all = data;
        });
    }
})();