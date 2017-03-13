/**
 * @file
 */
(function () {
    "use strict";
     angular
        .module('app')
        .factory('p5Service', p5Service);

    p5Service.$inject = ['$window'];

    function p5Service(sketch, $window) {
        return function($window) {
            var x = 100; 
            var y = 100;
            
            sketch.setup = function() {
              sketch.createCanvas(windowWidth,windowHeight);
            };

            sketch.draw = function() {
              sketch.background(255,50);
              sketch.fill(255);
              sketch.rect(x, y, 50, 50);
            };
            
            sketch.windowResized = function() {
                sketch.resizeCanvas(windowWidth, windowHeight);
            };
        };       
    }

})();