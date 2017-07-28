(function () {
    "use strict";
    angular.module('public')
    .service('EventModel', EventModel);

    function EventModel() {
        var vm = this;
    }

    EventModel.prototype.setName = function (name) {
        vm.name = name;
    }
    EventModel.prototype.getName = function () {
        return vm.name;
    }

    EventModel.prototype.setDescrip = function (descrip) {
        vm.descrip = descrip;
    }
    EventModel.prototype.getDescrip = function () {
        return vm.descrip;
    }

    EventModel.prototype.setPhoto = function (photo) {
        vm.photo = photo;
    }
    EventModel.prototype.getPhoto = function () {
        return vm.photo;
    }

})();