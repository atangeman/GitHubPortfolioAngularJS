/**
 * @file
 */
(function () {
    "use strict";
    angular.module('app').factory('repoService', repoService);
    repoService.$inject = ['$http'];

    function repoService($http) {
        return {
            getRepos: getRepos
            , getReposByLanguage: getReposByLanguage
        };
        /////////////
        function getRepos(url) {
            return $http.get('https://api.github.com/users/atangeman/repos').then(getReposComplete).catch(getReposFailed);

            function getReposComplete(response) {
                return response.data;
            }

            function getReposFailed(error) {
                /* logger.error('XHR Failed for getAvengers.' + error.data); */
            }
        }

        function getReposByLanguage(url) {
            return $http.get('https://api.github.com/users/atangeman/repos').then(getReposComplete).catch(getReposFailed);

            function getReposComplete(response) {
                var data = response.data;
                var returnObjArr = []; 
                var returnObj = {};
                for (var i = 0; i < data.length; ++i) {
                    if (returnObj[data[i].language] != null) {
                        var fData = formatRepo(data[i]);
                        returnObj[data[i].language].items.push(fData);
                    }
                    else {
                        returnObj[data[i].language] = {
                            language: data[i].language,
                            alias: "T",
                            size: 90,
                            posX: null,
                            items: []
                        }
                    }
                }
                return Object.values(returnObj);
            }

            function formatRepo(data) {
                return {
                    id: data.id,
                    name: data.name,
                    description: data.description,
                    url: data.url
                }
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