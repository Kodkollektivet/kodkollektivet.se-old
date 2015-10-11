angular.module('kodkollektivet.controllers', [])

    .controller('HomeCtrl', function($scope, SharedData, Project, ProCon, ProFra, ProLan, items){

	items.projects.then(function(data){
	    $scope.projects = data.results;
	    SharedData.setProjects(data.results);	    
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
	
    })


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
	
    })

    .controller('ProjectDetailsCtrl', function($scope, $routeParams, Project, ProCon, ProFra, ProLan){


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
