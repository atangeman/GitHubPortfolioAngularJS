
/**
 * @file
 */
(function () {

    "use strict";

    angular
        .module('app')
        .controller('RepoController', RepoController);

    RepoController.$inject = ['repoService'/*, 'logger'*/];

    function RepoController(repoService/*, logger*/) {
        var vm = this;
        vm.activate = activate;
        vm.repos = [];
        vm.title = 'Repos';
        vm.apiURL = 'https://api.github.com';
        vm.repoURL = '/users/atangeman/repos';
        
        activate();

        function activate() {
            var url = vm.apiURL + vm.repoURL
            return getRepos(url).then(function() {
                console.log(vm.repos);
            });
        }

        function getRepos(url) {
            return repoService.getRepos(url).then(function(data) {
                vm.repos = data;
                return vm.repos;
            });
        }
    }

})();
