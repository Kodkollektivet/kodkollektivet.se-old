angular.module('kodkollektivet.services', ['ngResource'])
    .service('APIdata', function(Project, Procon, Profra, Prolan){

        var create_promise = function (provider){
            return provider.query().$promise
                .then(function (response){
                    return response;
                });
        };

        return {
            procon: create_promise(Procon),
            profra: create_promise(Profra),
            prolan: create_promise(Prolan),

            projects: Project.query().$promise
                .then(function (response){
                    return response.results;
                }),
        };
    });
