
/**
 * @file
 */
(function () {

    "use strict";

    angular
        .module('app')
        .controller('GoogleChartController', DefaultCtrl);

    DefaultCtrl.$inject = ['defaultService', 'logger'];

    function DefaultCtrl(repoService, logger) {
        var vm = this;
        vm.load = load;
        vm.data = [];
        vm.googleChartService;

        activate();

        function activate() {
            return getData().then(function() {
                logger.info('Activated Default View');
            });
        }

        function getData() {
            return defaultService.getData().then(function(data) {
                vm.data = data;
                return vm.data;
            });
        }
    }

})();
