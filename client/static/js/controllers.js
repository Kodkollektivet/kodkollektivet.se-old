angular.module('kodkollektivet.controllers', [])

    .controller('InfoController', function($scope, $sce, Info){
        Info.query(function(response){
            $scope.info = $sce.trustAsHtml(response[0].text);
        });
    })

    .controller('ProjectController', function($scope, $state, $stateParams, $location, Project, Contributor, ProCon, SharedData){

        $scope.showDetailed = false;

        Project.query(function(response){
            $scope.projects = response;
        });

        Contributor.query(function(response){
            $scope.contributors = response;
        });

        ProCon.query(function(response){
            $scope.procon = response;
        });

        $scope.slide = function() {
            $.fn.fullpage.moveSlideRight();
        };

        $scope.goToDetails = function(project) {
            SharedData.setProject(project);
            $scope.projectSlug = project.slug;
            $scope.showDetailed = true;
        };

        $scope.leaveDetails = function() {
            $scope.showDetailed = false;
        };

    })

    .controller('DetailProjectController', function ($scope, $state, Project, SharedData) {

        var selectedProject = SharedData.getProject();

        $scope.projectSlug = selectedProject.slug;
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