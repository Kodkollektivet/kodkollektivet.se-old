angular.module('kodkollektivet.controllers', [])

    .controller('HomeCtrl', function($scope, projects, profra, prolan){
        $scope.projects = projects;
        $scope.prolan = prolan;
        $scope.profra = profra;
    })


    .controller('ProjectsCtrl', function($scope, projects, procon, profra, prolan){
        $scope.projects = projects;
        $scope.procon = procon;
        $scope.profra = profra;
        $scope.prolan = prolan;
    })

    .controller('ProjectDetailsCtrl', function($scope, $filter, $routeParams, projects, contributors, procon, profra, prolan){
	console.log($routeParams);
        $scope.project = projects.filter(function(project){
	    if ($routeParams.slug == project.slug){
		return project;
	    };
	})[0];
	
	console.log($scope.project);
	
        $scope.procons = procon.filter(function(procon){
	    if ($scope.project.slug == procon.project){
		return procon;
	    };
	});
	
        $scope.profra = profra;
	
        $scope.prolan = prolan;

	console.log($scope.procons.toString());
	
	$scope.contributors = $filter('filter')(contributors, $scope.procons);


    });
