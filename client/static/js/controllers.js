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
    });
