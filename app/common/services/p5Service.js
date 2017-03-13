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
              sketch.createCanvas(windowWidth, windowHeight);
            };

            sketch.draw = function() {
              background(0, 50);
              sketch.fill(255);
              sketch.rect(x, y, 50, 50);
              sketch.drawGrid();
            };
            
            sketch.drawGrid = function() {
                sketch.stroke(200);
                sketch.fill(120);
                for (var x=-2*sketch.width; x < 2*sketch.width; x+=40) {
                    sketch.line(x, -2*sketch.height, x, 2*sketch.height);
                    sketch.text(x, x+1, 12);
                }
                for (var y=-2*sketch.height; y < 2*sketch.height; y+=40) {
                    sketch.line(-2*sketch.width, y, 2*sketch.width, y);
                    sketch.text(y, 1, y+12);
                }
            }
            
            sketch.windowResized = function() {
                sketch.resizeCanvas(windowWidth, windowHeight);
            };
        };       
    }

})();