(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentNewStudentController', StudentNewStudentController);

    StudentNewStudentController.$inject = ['$stateParams'];

    /* @ngInject */
    function StudentNewStudentController($stateParams) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
        }
    }
})();