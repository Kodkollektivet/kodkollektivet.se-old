angular.module('kodkollektivet.controllers', [])

    .controller('InfoController', function($scope, $sce, Info){
        Info.query(function(response){
            $scope.info = $sce.trustAsHtml(response[0].text);
        });
    })

    .controller('ProjectController', function($scope, $state, $stateParams, Project, Contributor, ProCon){

        $scope.currentDetail = "";

        Project.query(function(response){
            $scope.projects = response;
        });

        Contributor.query(function(response){
            $scope.contributors = response;
        });

        ProCon.query(function(response){
            $scope.procon = response;
        });

        $scope.goToDetails = function(slug) {

            console.log(slug);
            $scope.currentDetail = slug;
            $state.go("^.details", {projectSlug:slug});
        };

    })

.controller('ContactController', function($scope, Contact){

    $scope.contact = {};
    $scope.contact.name = '';
    $scope.contact.email = '';
    $scope.contact.tel = '';
    $scope.contact.text = '';

    $scope.submitContactForm = function(){
        Contact.save($scope.contact,
            function(data){
                //success callback
                alert('Thank you!\nWe contact you soon!\nBest regards\n\t\t / Kodkollektivet')

            },
            function(err){
                // error callback
                //console.log(err.status);
            }
        );
    };
});