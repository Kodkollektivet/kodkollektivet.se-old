angular.module('kodkollektivet.services', [])

    .factory('Info', function($resource) {
        return $resource('http://127.0.0.1:8000/info/');
    })

    .factory('Project', function($resource){
        return $resource('http://127.0.0.1:8000/project/');
    })

    .factory('Contributor', function($resource){
        return $resource('http://127.0.0.1:8000/contributor/');
    })

    .factory('ProCon', function($resource){
        return $resource('http://127.0.0.1:8000/procon/');
    })

    .factory('Contact', function($resource) {
        return $resource('http://127.0.0.1:8000/contact/', {}, {
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



