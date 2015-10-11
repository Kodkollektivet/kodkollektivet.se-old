angular.module('kodkollektivet', [
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'kodkollektivet.controllers',
    'kodkollektivet.factories',
    'kodkollektivet.directives',
])
    .config(function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
        
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
