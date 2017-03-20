/**
 * @file
 */
(function () {
    "use strict";
    angular.module('app').controller('P5Controller', P5Controller);
    P5Controller.$inject = ['p5Service', 'repoService'];

    function P5Controller(p5Service, repoService) {
        var vm = this;
        vm.activate = activate;
        var repos = {};
        vm.apiURL = 'https://api.github.com';
        vm.repoURL = '/users/atangeman/repos';
        var url = vm.apiURL + vm.repoURL;
        
        activate();
        
        function activate() {
            console.log(vm.repos);
            return p5Service(this, vm.repos);  
        }

        function getRepos(url) {
            return repoService.getReposByLanguage(url).then(function(data) {
                vm.repos = data;
                return vm.repos;
            });
        }
    }
})();