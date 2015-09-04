angular.module('kodkollektivet', [
    'ui.router',
    'ngResource',
    'ui.bootstrap',
    'ngAside',
    'uiGmapgoogle-maps',
    'kodkollektivet.controllers',
    'kodkollektivet.services'
])

    .config(
    function ($httpProvider, $resourceProvider, $stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider){

        // This only works in angular 3!
        // It makes dealing with Django slashes at the end of everything easier.
        $resourceProvider.defaults.stripTrailingSlashes = false;

        // Django expects jQuery like headers
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

        // CSRF Support
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';


        //$locationProvider.html5Mode(true).hashPrefix('!');

        //$urlRouterProvider.otherwise("/");

        $stateProvider

            .state('app', {
                url: '',
                templateUrl: "index.html",
                views: {
                    'info': {
                        templateUrl: 'templates/info.html',
                        controller: 'InfoController'
                    },
                    'projects': {
                        templateUrl: 'templates/projects.html',
                        controller: 'ProjectController'
                    }
                }
            })


            .state('projects',{
                url: '',
                templateUrl: "templates/projects.html",
                controller: 'ProjectController'
            })

            .state('projects.list',{
                url: '/list',
                templateUrl: 'templates/projects.list.html',
            })
        });

