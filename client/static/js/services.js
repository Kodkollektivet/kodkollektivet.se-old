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

    .service('getProjects', function (Project){
        return  Project.query().$promise
            .then(function (response){
                return response.results;
            });
    });
