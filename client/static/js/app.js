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

        $(document).ready(function() {
            $('#fullpage').fullpage({
                
            });
        });
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
            controller: 'ProjectController',
            dsr: true
        });

        $stateProvider.state('app.details', {
            url: 'details/{projectSlug}',
            templateUrl: 'templates/project-details.html',
            controller: 'DetailProjectController'
        });

        $stateProvider.state('app.contributors', {
            url: 'contributors',
            templateUrl: 'templates/contributors.html'
        });

        $stickyStateProvider.enableDebug(true);
    });
