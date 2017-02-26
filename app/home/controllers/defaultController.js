
/**
 * @file
 */
(function () {

    "use strict";

    angular
        .module('app')
        .controller('DefaultCtrl', DefaultCtrl);

    DefaultCtrl.$inject = ['defaultService', 'logger'];

    function DefaultCtrl(defaultService, logger) {
        var vm = this;
        vm.activate = activate;
        vm.data = [];
        vm.title = 'Default';

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
