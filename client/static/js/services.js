angular.module('kodkollektivet.services', ['ngResource'])

    .service('getProfra', function (Profra){
        return Profra.query().$promise
            .then(function (response){
                return response;
            });
    })

    .service('getProcon', function (Procon){
        return Procon.query().$promise
            .then(function (response){
                return response;
            });
    })

    .service('getProlan', function (Prolan){
        return Prolan.query().$promise
            .then(function (response){
                return response;
            });
    })

    .service('getContributors', function (Contributor){
        return Contributor.query().$promise
            .then(function (response){
                return response;
            });
    })


    .service('getProjects', function (Project){
        return Project.query().$promise
            .then(function (response){
                return response.results;
            });
    })

    .service('getProjectReadme', function (slug){
        return $resource("https://api.github.com/repos/kodkollektivet/" + slug + "/readme").query().$promise
            .then(function (response){
                return response;
            });
    });

        return $resource('http://api.kodkollektivet.se/contributor/');
