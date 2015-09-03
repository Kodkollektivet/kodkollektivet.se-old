angular.module('kodkollektivet.services', [])

    .factory('Info', function($resource) {
        return $resource('http://api.kodkollektivet.se/info/');
    })



