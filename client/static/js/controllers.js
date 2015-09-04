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

    })

.controller('ContactController', function($scope, Contact){

    $scope.contact = {};
    $scope.contact.name = '';
    $scope.contact.email = '';
    $scope.contact.tel = '';
    $scope.contact.text = '';


    $scope.submitContactForm = function(){
        Contact.save($scope.contact);
    };
});