angular.module('kodkollektivet.controllers', [])
    .controller('HomeCtrl', function($scope, projects, contributors, profra, prolan, news){

	$scope.projects = projects;
        $scope.prolan = prolan;
        $scope.profra = profra;
        $scope.contributors = contributors;	
        $scope.news = news;
    })

    .controller('ProjectsCtrl', function($scope, projects, procon, profra, prolan){

        $scope.projects = projects;
        $scope.procon = procon;
        $scope.profra = profra;
        $scope.prolan = prolan;
	
    })

    .controller('ProjectDetailsCtrl', function($scope, $filter, $routeParams, projects, contributors, procon, profra, prolan){

        var filter_on_project = function(item) {
            return item.project === $scope.project.slug;
        };

        $scope.project = projects.find(function (project) {
            return project.slug === $routeParams.slug;
        });

        $scope.procon = procon.filter(filter_on_project);
        $scope.profra = profra.filter(filter_on_project);
	$scope.prolan = prolan.filter(filter_on_project);
	
        var project_contributor_slugs = $scope.procon.map(function (pc) {
            return pc.contributor;
        });

        $scope.contributors = contributors.filter(function (contributor) {
            return project_contributor_slugs.indexOf(contributor.slug) !== -1;
        });
    })
	
        
    .controller('ContributorCtrl', function ($scope, contributors){
        $scope.contributors = contributors;
	
    })

    .controller('ContributorDetailsCtrl', function($scope, $filter, $routeParams, contributors, projects, procon){

        $scope.contributor = contributors.find(function (contributor) {
            return contributor.slug === $routeParams.slug;
        });
	
	console.log($scope.contributor);

        var filter_on_contributor = function(item) {
            return item.contributor === $scope.contributor.slug;
        };
	
	$scope.procon = procon.filter(filter_on_contributor);

        var project_contributor_slugs = $scope.procon.map(function (pc) {
            return pc.project;
        });

        $scope.projects = projects.filter(function (project) {
            return project_contributor_slugs.indexOf(project.slug) !== -1;
        });

	
    })

    .controller('NewsCtrl', function($scope, news){
        $scope.news = news;
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

