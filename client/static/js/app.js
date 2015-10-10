angular.module('kodkollektivet', [
    'ui.router',
    'ngResource',
    'ui.bootstrap',
    'uiGmapgoogle-maps',
    'kodkollektivet.controllers',
    'kodkollektivet.factories',
    'ngSanitize',
    'btford.markdown'
])

    .config(['markdownConverterProvider', function (markdownConverterProvider) {
        // options to be passed to Showdown
        // see: https://github.com/coreyti/showdown#extensions
        markdownConverterProvider.config({
            extensions: ['github']
        });
    }])

    .config(
    function ($locationProvider, $httpProvider, $resourceProvider, $stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider){

        // This only works in angular 3!
        // It makes dealing with Django slashes at the end of everything easier.
        $resourceProvider.defaults.stripTrailingSlashes = false;

        // Django expects jQuery like headers
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

        // CSRF Support
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';


        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });

        $stateProvider
            .state('app', {
                url: '/',
                abstract: true,
                views: {
                    'info': {
                        templateUrl: 'templates/info.html',
                        controller: 'InfoController'
                    },
                    'projects': {
                        templateUrl: 'templates/projects.html',
                        controller: 'ProjectController'
                    },
                    'contact': {
                        templateUrl: 'templates/contact.html',
                        controller: 'ContactController'
                    },
                },
            })

            .state('app.details', {
                url: '',
                templateUrl: 'templates/project-details.html',
                controller: 'DetailProjectController'
            });
    });
