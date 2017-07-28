(function () {
    "use strict";
    angular.module('public')
    .controller('HomeCtrl', HomeCtrl);

    function HomeCtrl() {
        let vm = this;
        vm.img = 'http://www.kaylainthecity.com/wp-content/uploads/gym.jpg';
        
        vm.firstImage = function () {
             return document.querySelector("#img-background").src="http://www.kaylainthecity.com/wp-content/uploads/gym.jpg";
        };
        vm.secondImage = function () {
             return document.querySelector("#img-background").src="https://www.t-nation.com/system/publishing/articles/10004600/original/The-10-People-That-Drive-Gym-Owners-Crazy.png?1489783039";
        };
        vm.thirdImage = function () {
             return document.querySelector("#img-background").src="https://ichef.bbci.co.uk/news/660/cpsprodpb/16285/production/_91175709_gettyimages-585549648-1.jpg";
        };
            
    }
})();