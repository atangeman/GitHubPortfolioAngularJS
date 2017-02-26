/**
 * @file
 */
(function () {
    "use strict";
    
    angular
        .module('app.core')
        .factory('githubService', githubService);
    
    githubService.$inject = ['$http', 'logger'];

    function githubService($http, logger) {
        var service = {
            apiURL: 'https://api.github.com',
            repoURL: '/users/atangeman/repos',
            getRepos: getRepos,
            repos: []
         };
        return service;
        /////////////
        function getRepos(url) {
            return $http.get(url)
                .then(getAvengersComplete)
                .catch(getAvengersFailed);

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