angular.module('kodkollektivet.controllers', [])

    .controller('InfoController', function($scope, $sce, Info){
        Info.query(function(response){
            $scope.info = $sce.trustAsHtml(response[0].text);
        });
    })

    .controller('ProjectController', function($scope, $sce, $http, $state, $stateParams, $location, Project, Contributor, ProCon, SharedData, Language, ProLan){

        $scope.showDetailed = false;

        Project.query(function(response){
            $scope.projects = response;
        });

        Contributor.query(function(response){
            $scope.contributors = response;
        });

        ProCon.query(function(response){
            $scope.procons = response;
        });

        Language.query(function (response) {
            $scope.languages = response;
        });

        ProLan.query(function(response){
            $scope.prolans = response;
        });

        $scope.slide = function() {
            $.fn.fullpage.moveSlideRight();
        };

        $scope.goToDetails = function(project) {
            SharedData.setProject(project);
            $scope.project = project;
            $scope.projectSlug = project.slug;
            $scope.info = $sce.trustAsHtml(project.about);
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

    .controller('ContributorController', function ($scope, $http, Contributor, SharedData) {

        Contributor.query(function(response){
            $scope.contributors = response;
        });

        $scope.slide = function() {
            $.fn.fullpage.moveSlideRight();
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