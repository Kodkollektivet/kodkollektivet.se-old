angular.module('kodkollektivet.controllers', [])

    .controller('InfoController', function($scope, $sce, Info){
        Info.query(function(response){
            $scope.info = $sce.trustAsHtml(response[0].text);
        });
    })

    .controller('ProjectController', function($scope, Project, Contributor, ProCon){
        Project.query(function(response){
            $scope.projects = response;
        });
        Contributor.query(function(response){
            $scope.contributors = response;
        });
        ProCon.query(function(response){
            $scope.procon = response;
        });

    });