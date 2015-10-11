angular.module('kodkollektivet.controllers', [])

    .controller('HomeCtrl', function($scope, SharedData, items){

	items.projects.then(function(data){
	    $scope.projects = data.results;
	    SharedData.setProjects(data.results);
    	});

	items.prolan.then(function(data){
            $scope.prolan = data;
	    SharedData.setProlan(data);
        });

	items.profra.then(function(data){
	    $scope.profra = data;
	    SharedData.setProfra(data);
	});

	items.procon.then(function(data){
	    $scope.procon = data;
	    SharedData.setProcon(data);
	});
	
    })


    .controller('ProjectsCtrl', function($scope, SharedData){
	
	$scope.projects = SharedData.getProjects();

	$scope.procon = SharedData.getProcon();

	$scope.profra = SharedData.getProfra();

	$scope.prolan = SharedData.getProlan();
		
    });
