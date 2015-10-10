
angular.module('kodkollektivet.directives', [])

    .directive('projects', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/projects.html'
        };
    })

    .directive('projectContributors', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/contributors.html'
        };
    });
               
