angular.module('kodkollektivet.services', ['ngResource'])

    .service('APIdata', function(SharedData, Project, Procon, Profra, Prolan, Contributor){
        return {
            homeItems: function(){

                if (SharedData.getProjects().length == 0){

		    var api_data = {'projects': Project.query().$promise,
    				    'procon': Procon.query().$promise,
				    'profra': Profra.query().$promise,
				    'prolan': Prolan.query().$promise,
		    		    'contributors': Contributor.query().$promise,
		    		   };

		    api_data.projects.then(function(data){
			SharedData.setProjects(data.results);
		    });
                    return api_data;

                }
                else {
                    return SharedData.getProjects();
                }
            }
        }
    });
