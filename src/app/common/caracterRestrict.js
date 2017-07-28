(function () {
    "use strict";
    angular.module('public')
    .directive('caracterRestrict', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModel) {
                attrs.$set('ngTrim', 'false');
                let aceptedCaracters = RegExp(attrs.caracterRestrict);
                scope.$watch(attrs.ngModel, function(newValue, oldValue) {
                if (newValue === undefined) return;
                if (newValue !== '' && !aceptedCaracters.test(newValue)) {
                    ngModel.$setViewValue(oldValue);
                    ngModel.$render();
                    }
                });
            }
        };
    });
})();