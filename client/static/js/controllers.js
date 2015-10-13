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

        $scope.contributors = contributors.filter(function (contributor) {
            return contributor.project === $scope.procon.slug;
        });
    });
