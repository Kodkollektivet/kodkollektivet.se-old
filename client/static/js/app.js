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
		    items:function(GetAPIdata){
			return GetAPIdata.getItems();
		    }
		}
            })
            .when('/projects', {
                templateUrl: 'templates/project/list.html',
                controller: 'ProjectsCtrl',
            })
            .when('/project/:slug', {
                templateUrl: 'templates/project/details.html',
                controller: 'ProjectDetailsCtrl',
            })
            .otherwise({
                redirectTo: "/"
            });

    });
