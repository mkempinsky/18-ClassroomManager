(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentDetailController', StudentDetailController);

    StudentDetailController.$inject = ['$stateParams'];

    /* @ngInject */
    function StudentDetailController($stateParams) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
        }
    }
})();