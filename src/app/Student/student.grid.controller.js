(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentGridController', StudentGridController);

    StudentGridController.$inject = ['studentFactory', 'projectFactory'];

    /* @ngInject */
    function StudentGridController(studentFactory, projectFactory) {
        var vm = this;
        vm.title = 'StudentGridController';

        activate();

        ////////////////

        function activate() {
            studentFactory.getAll().then(
                function(students){
                    vm.students = students;
                });
        }
    }
})();