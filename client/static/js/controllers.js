angular.module('kodkollektivet.controllers', [])
    .controller('HomeCtrl', function($scope, projects, contributors, profra, prolan){

	$scope.projects = projects;
        $scope.prolan = prolan;
        $scope.profra = profra;
        $scope.contributors = contributors;	

    })

    .controller('ProjectsCtrl', function($scope, projects, procon, profra, prolan){

        $scope.projects = projects;
        $scope.procon = procon;
        $scope.profra = profra;
        $scope.prolan = prolan;
	
    })

    .controller('ProjectDetailsCtrl', function($scope, $filter, $routeParams, projects, contributors, procon, profra, prolan){

        var filter_on_project = function(item) {
            return item.project === $scope.project.slug;
        };

        $scope.project = projects.find(function (project) {
            return project.slug === $routeParams.slug;
        });

        $scope.procon = procon.filter(filter_on_project);
        $scope.profra = profra.filter(filter_on_project);
	$scope.prolan = prolan.filter(filter_on_project);
	
        var project_contributor_slugs = $scope.procon.map(function (pc) {
            return pc.contributor;
        });

        $scope.contributors = contributors.filter(function (contributor) {
            return project_contributor_slugs.indexOf(contributor.slug) !== -1;
        });
    })
	
        
    .controller('ContributorCtrl', function ($scope, contributors){
        $scope.contributors = contributors;

	
    });
