angular.module('kodkollektivet', [
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'kodkollektivet.controllers',
    'kodkollektivet.factories',
    'kodkollektivet.directives',
    'kodkollektivet.services',    
])
    .config(function($routeProvider, $locationProvider) {
        
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl',
                resolve: {
                    profra: function(APIdata){
                        return APIdata.profra;
                    },
                    prolan: function(APIdata){
                        return APIdata.prolan;
                    },
                    projects: function(APIdata){
                        return APIdata.projects;
                    },
                }
            })
            .when('/projects', {
                templateUrl: 'templates/project/list.html',
                controller: 'ProjectsCtrl',
                resolve: {
                    procon: function(APIdata){
                        return APIdata.procon;
                    },
                    profra: function(APIdata){
                        return APIdata.profra;
                    },
                    prolan: function(APIdata){
                        return APIdata.prolan;
                    },
                    projects: function(APIdata){
                        return APIdata.projects;
                    },
                }
            })
            .when('/project/:slug', {
                templateUrl: 'templates/project/details.html',
                controller: 'ProjectDetailsCtrl',
            })
            .otherwise({
                redirectTo: "/"
            });

    });
