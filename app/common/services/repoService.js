/**
 * @file
 */
(function () {
    "use strict";
    
    angular
        .module('app')
        .factory('repoService', repoService);
    
    repoService.$inject = ['$http'];
    
    function repoService($http) {
        var service = {
            getRepos: getRepos,
            repos: []
         };
        return service;
        /////////////
        function getRepos(url) {
            return $http.get('https://api.github.com/users/atangeman/repos')
                .then(getReposComplete)
                .catch(getReposFailed);

            function getReposComplete(response) {
                return response.data.results;
            }

            function getReposFailed(error) {
               /* logger.error('XHR Failed for getAvengers.' + error.data); */
            }
        }

        function getReadme(url) {
            return $http.jsonp(url).then(function (result) {
                return result.data;
            });
        }
    }
})();