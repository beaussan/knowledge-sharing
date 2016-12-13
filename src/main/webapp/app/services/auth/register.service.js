(function () {
    'use strict';

    angular
        .module('knowledgeSharingApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
