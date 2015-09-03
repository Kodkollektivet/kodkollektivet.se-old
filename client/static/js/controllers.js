angular.module('kodkollektivet.controllers', [])

    .controller('InfoController', function($scope, $sce, Info){
        Info.query(function(response){
            $scope.info = $sce.trustAsHtml(response[0].text);
        });
    });