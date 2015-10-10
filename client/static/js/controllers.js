angular.module('kodkollektivet.controllers', [])

    .controller('ProjectsCtrl', function($scope, $routeParams, Project){
	Project.query(function(response){
	    $scope.projects = response.results;
	});
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
