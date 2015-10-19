
angular.module('kodkollektivet.directives', [])

    .directive('projectList', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/project/list.html'
        };
    })

    .directive('projectContributors', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/project/contributors.html'
        };
    })

    .directive('contributorsList', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/contributor/list.html'
        };
    });

               
