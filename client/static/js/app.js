angular.module('kodkollektivet', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
    'kodkollektivet.controllers',
    'kodkollektivet.factories',
    'kodkollektivet.directives',
    'kodkollektivet.services',
    'btford.markdown',
])
    .config(function($locationProvider, $resourceProvider, $routeProvider)  {
         // This only works in angular 3!
        // It makes dealing with Django slashes at the end of everything easier.
        $resourceProvider.defaults.stripTrailingSlashes = false;
        
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl',
                resolve: {
                    profra: function (getProfra) { return getProfra; },
                    prolan: function (getProlan) { return getProlan; },
                    projects: function (getProjects) { return getProjects; },
                    contributors: function (getContributors) { return getContributors; },		    		    
                }
            })
            .when('/projects', {
                templateUrl: 'templates/project/list.html',
                controller: 'ProjectsCtrl',
                resolve: {
                    procon: function (getProcon) { return getProcon; },
                    profra: function (getProfra) { return getProfra; },
                    prolan: function (getProlan) { return getProlan; },
                    projects: function (getProjects) { return getProjects; },
                }
            })
            .when('/projects/:slug', {
                templateUrl: 'templates/project/details.html',
                controller: 'ProjectDetailsCtrl',
                resolve: {
                    procon: function (getProcon) { return getProcon; },
                    profra: function (getProfra) { return getProfra; },
                    prolan: function (getProlan) { return getProlan; },
                    projects: function (getProjects) { return getProjects; },
                    contributors: function (getContributors) { return getContributors; },		    
                }
		
            })

            .when('/contributors', {
                templateUrl: 'templates/contributor/list.html',
                controller: 'ContributorsCtrl',
                resolve: {
                    procon: function (getProcon) { return getProcon; },
                    projects: function (getProjects) { return getProjects; },
                    contributors: function (getContributors) { return getContributors; },		    
                }
		
            })

            .otherwise({
                redirectTo: "/"
            });

    });
