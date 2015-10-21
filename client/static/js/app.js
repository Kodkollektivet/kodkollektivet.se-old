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
    .config(function($locationProvider, $resourceProvider, $routeProvider, $httpProvider)  {
         // This only works in angular 3!
        // It makes dealing with Django slashes at the end of everything easier.
        $resourceProvider.defaults.stripTrailingSlashes = false;
	
        // Django expects jQuery like headers
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	
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

            .when('/contributors/:slug', {
                templateUrl: 'templates/contributor/details.html',
                controller: 'ContributorDetailsCtrl',
                resolve: {
                    contributors: function (getContributors) { return getContributors; },
		    procon: function (getProcon) { return getProcon; },
                    projects: function (getProjects) { return getProjects; },		    
                }
		
            })

	
            .otherwise({
                redirectTo: "/"
            });

    });
