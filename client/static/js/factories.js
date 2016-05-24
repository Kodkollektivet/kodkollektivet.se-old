angular.module('kodkollektivet.factories', [])

    // TODO: Make Project factory generic to allow next/previous
    .factory('Project', function($resource){
        return $resource('http://api.kodkollektivet.se/project/', {}, {
            query: { method: "GET", isArray: true }
        });
    })

    .factory('Contributor', function($resource){
        return $resource('http://api.kodkollektivet.se/contributor/');
    })

    .factory('Language', function($resource){
        return $resource('http://api.kodkollektivet.se/language/');
    })

    .factory('Procon', function($resource){
        return $resource('http://api.kodkollektivet.se/procon/');
    })

    .factory('Profra', function($resource){
        return $resource('http://api.kodkollektivet.se/profra/');
    })

    .factory('Prolan', function($resource){
        return $resource('http://api.kodkollektivet.se/prolan/');
    })

    .factory('News', function($resource){
        return $resource('http://api.kodkollektivet.se/news/');
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
    });



