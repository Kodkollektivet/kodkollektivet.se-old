angular.module('kodkollektivet.services', [])

    .factory('Info', function($resource) {
        return $resource('http://127.0.0.1:8000/info/');
    })



