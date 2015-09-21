angular.module('kodkollektivet.filters', [])

    .filter('MatchConWithPro', function() {
        return function(project, contributor, procon){
            console.log(project);
            console.log(contributor);
        }
    });
