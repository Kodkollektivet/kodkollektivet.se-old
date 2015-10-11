angular.module('kodkollektivet', [
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'kodkollektivet.controllers',
    'kodkollektivet.factories',
    'kodkollektivet.directives',
])
    .config(function($routeProvider, $locationProvider) {
        
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'ProjectsCtrl',
            })
            .when('/projects', {
                templateUrl: 'templates/project/list.html',
                controller: 'ProjectsCtrl',
            })
            .otherwise({
                redirectTo: "/"
            });

    });
