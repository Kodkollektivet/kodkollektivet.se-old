angular.module('kodkollektivet', [
    'ngRoute',
    'ngResource',
    'ngSanitize',    
    'ui.bootstrap',
    'kodkollektivet.controllers',
    'kodkollektivet.factories',
])

    .config(function ($locationProvider, $httpProvider, $resourceProvider, $routeProvider){

        // This only works in angular 3!
        // It makes dealing with Django slashes at the end of everything easier.
        $resourceProvider.defaults.stripTrailingSlashes = false;

        // Django expects jQuery like headers
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';


        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });

	$routeProvider.
	    when('/', {
		templateUrl: 'templates/projects.html',
		controller: 'ProjectsCtrl'
	    })
	    // when('/project/:slug', {
	    // 	templateUrl:
	    // 	controller:
	    // }).
	    // when('/members', {
	    // 	templateUrl:
	    // 	controller:
	    // }).
	    // when('/member/:slug', {
	    // 	templateUrl:
	    // 	controller:
	    // })
	    

	.otherwise({redirectTo: '/'});
    });
