angular.module('kodkollektivet.controllers', [])

    .controller('ProjectsCtrl', function($scope, Project, ProCon, ProFra, ProLan){

        Project.query(function(response){
            $scope.projects = response.results;
        });

        ProCon.query(function(response){
            $scope.procon = response;
        });

	ProFra.query(function(response){
	    $scope.profra = response;
	});

	ProLan.query(function(response){
	    $scope.prolan = response;
	});
	
    });
