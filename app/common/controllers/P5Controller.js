
/**
 * @file
 */
(function () {

    "use strict";

    angular
        .module('app')
        .controller('P5Controller', P5Controller);

    P5Controller.$inject = ['p5Service'];

    function P5Controller(p5Service) {
        var vm = this;
        vm.activate = activate; 
        
        activate();
        
        function activate() {
            return p5Service(this);
        }
    }

        
})();