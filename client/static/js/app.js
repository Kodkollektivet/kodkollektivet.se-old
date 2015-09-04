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

    .config(
    function ($httpProvider, $resourceProvider, $stateProvider, $stickyStateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider){

        // This only works in angular 3!
        // It makes dealing with Django slashes at the end of everything easier.
        $resourceProvider.defaults.stripTrailingSlashes = false;

        // Django expects jQuery like headers
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

        // CSRF Support
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

        //$urlRouterProvider.otherwise("/");

        //$locationProvider.html5Mode(true).hashPrefix('!');

        //$urlRouterProvider.otherwise("/");

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
                    controller: 'InfoController'
                }
            }
        });

        $stateProvider.state('app.projects',{
            url: '/projects',
            sticky: true,
            dsr: true,
            views: {
                'projects': {
                    templateUrl: 'templates/projects.html'
                }
            },
        });

        $stateProvider.state('app.contributors', {
            url: '/contributors',
            sticky: true,
            views: {
                'contributors': {
                    templateUrl: 'templates/contributors.html'
                }
            }
        });

        $stickyStateProvider.enableDebug(true);
        });


