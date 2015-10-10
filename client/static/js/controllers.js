angular.module('kodkollektivet.controllers', [])

    .controller('InfoController', function($scope, $sce, Info){
        Info.query(function(response){
            $scope.info = $sce.trustAsHtml(response[0].text);
        });
    })

    .controller('ProjectController', function($scope, $sce, $http, $state, $stateParams, $location, Project, Contributor, ProCon, SharedData, Language, ProLan){


        Project.query(function(response){
            $scope.projects = response.results;
            $scope.nextPage = response.next;
            console.log($state.current);
        });

        Contributor.query(function(response){
            $scope.contributors = response;

        });

        ProCon.query(function(response){
            $scope.procon = response;
        });

        Language.query(function (response) {
            $scope.languages = response;
        });

        ProLan.query(function(response){
            $scope.prolans = response;
        });

        $scope.goToDetails = function(project) {
            console.log($state.current);
            SharedData.setProject(project);
            $state.go('app.details');
        };

        $scope.leaveDetails = function() {
            $scope.showDetailed = false;
        };

    })

    .controller('DetailProjectController', function ($scope, $state, $stateParams, Project, SharedData) {

        var selectedProject = SharedData.getProject();
        $scope.project = selectedProject;
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
                    alert('Thank you!\nWe contact you soon!\nBest regards\n\t\t / Kodkollektivet');

                },
                function(err){
                    // error callback
                }
            );
        };
    });
