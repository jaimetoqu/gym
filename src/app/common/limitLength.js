(function () {
    "use strict";
    angular.module('public')
    .directive('limitLength', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModel) {
                attrs.$set('ngTrim', 'false');
                var limit = parseInt(attrs.limitLength, 10);

                scope.$watch(attrs.ngModel, function(newValue) {
                if (typeof ngModel.$viewValue === 'string' && newValue !== 'undefined') {
                    if(ngModel.$viewValue.length > limit){
                    ngModel.$setViewValue(ngModel.$viewValue.substring(0, limit));
                    ngModel.$render();
                    }
                }
                });
            }
        };
    });
})();