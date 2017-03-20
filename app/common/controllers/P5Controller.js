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
        vm.getRepos = getRepos;
        vm.sketch = p5Service(this);
        
        activate();     
        
        function activate() {
            var url = vm.apiURL + vm.repoURL;
        }

        function getRepos(url) {
            return repoService.getReposByLanguage(url).then(function(data) {
                vm.repos = data;
                return vm.repos;
            });
        }
    }
})();