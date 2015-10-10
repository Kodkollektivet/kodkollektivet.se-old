angular.module('kodkollektivet.controllers', [])

    .controller('ProjectsCtrl', function($scope, Project, ProCon){

        Project.query(function(response){
            $scope.projects = response.results;
        });

        ProCon.query(function(response){
            $scope.procon = response;
        });
    });
