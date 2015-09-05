angular.module('kodkollektivet', [
    'ui.router',
    'ngResource',
    'ui.bootstrap',
    'ngAside',
    'uiGmapgoogle-maps',
    'kodkollektivet.controllers',
    'kodkollektivet.services',
    'ct.ui.router.extras',
    'ngSanitize',
    'btford.markdown'
])

    .run(function($state, $rootScope, $location) {
        //$rootScope.$state = $state;
        //$rootScope.$location = $location;

        $(document).ready(function() {
            $('#fullpage').fullpage({
                scrollBar: true,
                anchors:['home', 'information', 'procon', 'contactus'],
                navigation: true,
                controlArrows: false
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
            requireBase: true
        });

        $stateProvider
            .state('app', {
                url: '/',
                templateUrl: "index.html",
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
                    'contributors': {
                        templateUrl: 'templates/contributors.html',
                        controller: 'ContributorController'
                    }
                },
                dsr: true,
                sticky: true
        });

        /*$stateProvider.state('app.projects', {
            url: 'projects',
            templateUrl: 'templates/projects.html',
            controller: 'ProjectController',
            dsr: true
        });*/

        $stateProvider.state('app.details', {
            url: '{projectSlug}',
            templateUrl: 'templates/project-details.html',
            controller: 'DetailProjectController'
        });

        /*$stateProvider.state('app.contributors', {
            url: 'contributors',
            templateUrl: 'templates/contributors.html'
        });*/

        $stickyStateProvider.enableDebug(true);
    });
