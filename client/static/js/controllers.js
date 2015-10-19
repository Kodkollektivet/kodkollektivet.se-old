angular.module('kodkollektivet.controllers', [])
    .controller('HomeCtrl', function($scope, projects, contributors, profra, prolan){

	$scope.projects = projects;
        $scope.prolan = prolan;
        $scope.profra = profra;
        $scope.contributors = contributors;	

    })

    .controller('ProjectsCtrl', function($scope, projects, procon, profra, prolan){

        $Scope.projects = projects;
        $scope.procon = procon;
        $scope.profra = profra;
        $scope.prolan = prolan;
	
    })

    .controller('ProjectDetailsCtrl', function($scope, $filter, $routeParams, projects, contributors, procon, profra, prolan){

	$scope.project = projects.find(function (project) {
            return project.slug === $routeParams.slug;
        });

        $scope.procon = procon.filter(function (project_contributor) {
            return project_contributor.project === $scope.project.slug;
        });
        $scope.profra = profra.filter(function (framework) {
            return framework.project === $scope.project.slug;
        });

        $scope.prolan = prolan.filter(function (language) {
            return language.project === $scope.project.slug;
        });

	// Sort contribs

	$scope.contributors = contributors.filter(function (contributor) {
	    var slugs = $scope.procon.map(function (p) {
		return p.contributor;
	    });
	    return slugs.indexOf(contributor.slug) !== -1;
	});
    })
	
        
    .controller('ContributorCtrl', function ($scope, contributors){
        $scope.contributors = contributors;

	
    });
