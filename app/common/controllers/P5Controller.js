/**
 * @file
 */
(function () {
    "use strict";
    angular.module('app').controller('P5Controller', P5Controller);
    
    P5Controller.$inject = ['p5Service', 'repoService'];

    function P5Controller(p5Service, repoService) {
        var vm = this;  
        vm.repos = [];
        vm.activate = activate;
        
        activate();
        
        function activate() {
            return getRepos().then(function() {
                console.log(vm.repos);
                return p5Service(vm.repos, this);
            });  
        }
        
        function getRepos() {
              /**
               * Step 2
               * Ask the data service for the data and wait
               * for the promise
               */
              return repoService.getRepos()
                  .then(function(data) {
                      /**
                       * Step 3
                       * set the data and resolve the promise
                       */
                      vm.repos = data;
                      return vm.repos;
              });
        }
    }
})();