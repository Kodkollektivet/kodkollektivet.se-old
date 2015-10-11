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

    .factory('ProCon', function($resource){
        return $resource('http://api.kodkollektivet.se/procon/');
    })

    .factory('ProFra', function($resource){
        return $resource('http://api.kodkollektivet.se/profra/');
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

	var projects = [];
	var contributors = [];
	var languages = [];
	var frameworks = [];
	var roles = [];
	var profra = [];
	var procon = [];
	var prolan = [];
	var prorol = [];
	
        return {
            setProjects: function(indata){
                projects = indata;
            },
            getProjects: function(){
                return projects;
            },
            setContributors: function(indata){
                contributors = indata;
            },
            getContributos: function(){
                return contributors;
            },
            setLanguages: function(indata){
                languages = indata;
            },
            getLanguages: function(){
                return languages;
            },
            setFrameworks: function(indata){
                frameworks = indata;
            },
            getFrameworks: function(){
                return frameworks;
            },
            setRoles: function(indata){
                roles = indata;
            },
            getRoles: function(){
                return rolse;
            },
            setProfra: function(indata){
                profra = indata;
            },
            getProfra: function(){
                return profra;
            },
            setProcon: function(indata){
                procon = indata;
            },
            getProcon: function(){
                return procon;
            },
            setProlan: function(indata){
                prolan = indata;
            },
            getProlan: function(){
                return prolan;
            },
            setProrol: function(indata){
                prorol = indata;
            },
            getProrol: function(){
                return prorol;
            },
	    
        };
    });



