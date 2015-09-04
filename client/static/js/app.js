angular.module('kodkollektivet', [
    'ui.router',
    'ngResource',
    'ui.bootstrap',
    'ngAside',
    'uiGmapgoogle-maps',
    'kodkollektivet.controllers',
    'kodkollektivet.services',
    'ct.ui.router.extras'
])

    .run(function($state, $rootScope, $location) {
        $rootScope.$state = $state;
        $rootScope.$location = $location;
    })


    .config(
    function ($locationProvider, $httpProvider, $resourceProvider, $stateProvider, $stickyStateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider){

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
            requireBase: false
        });

        $urlRouterProvider.otherwise("/");

        $stateProvider.state('app', {
            url: '/',
            templateUrl: "index.html",
            views: {
                'info': {
                    templateUrl: 'templates/info.html',
                    controller: 'InfoController'
                },
                'gh-view': {
                    templateUrl: 'templates/gh-viewport.html',
                },
                'contact': {
                    templateUrl: 'templates/contact.html',
                    controller: 'ContactController'
                }
            },
            dsr: true
        });

        $stateProvider.state('app.projects', {
            url: 'projects',
            templateUrl: 'templates/projects.html',
            controller: 'ProjectController'
        });

        $stateProvider.state('app.contributors', {
            url: 'contrib',
            templateUrl: 'templates/contributors.html'
        });

        $stickyStateProvider.enableDebug(true);
    });
