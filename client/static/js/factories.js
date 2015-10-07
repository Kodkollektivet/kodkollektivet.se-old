angular.module('kodkollektivet.factories', [])

    // TODO: Make Project factory generic to allow next/previous
    .factory('Project', function($resource){
        return $resource('http://api.kodkollektivet.se/project/', {}, {
	    query: { method: "GET", isArray: false }
	});
    })

    .factory('Contributor', function($resource){
        return $resource('http://api.kodkollektivet.se/contributor/');
    })

    .factory('Language', function($resource){
        return $resource('http://api.kodkollektivet.se/language/');
    })

    .factory('GhContributor', function($resource) {

    })

    .factory('ProCon', function($resource){
        return $resource('http://api.kodkollektivet.se/procon/');
    })

    .factory('ProLan', function($resource){
        return $resource('http://api.kodkollektivet.se/prolan/');
    })

    .factory('Contact', function($resource) {
        return $resource('http://api.kodkollektivet.se/contact/', {}, {
            'save': {
                method: 'POST',
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                }
            }
        });
    })

    .factory('SharedData', function() {
        var selectedProject = {};

        return {
            setProject: function(project){
                selectedProject = project;
            },
            getProject: function(){
                return selectedProject;
            }
        };
    });



