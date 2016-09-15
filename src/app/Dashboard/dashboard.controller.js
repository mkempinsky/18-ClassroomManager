(function() {
    'use strict';

    angular
        .module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$stateParams', 'studentFactory', 'projectFactory', 'assignmentFactory'];

    /* @ngInject */
    function DashboardController($stateParams, studentFactory, projectFactory, assignmentFactory) {
        var vm = this;
        vm.title = 'DashboardController';

        activate();

        ////////////////

        function activate() {
            studentFactory.getAll().then(
                function(students){
                    vm.studentAmt = students.length;
                }
            );

            projectFactory.getAll().then(
                function(projects) {
                    vm.projectAmt = projects.length;
                }
            );

            assignmentFactory.getAll().then(
                function(assignments){
                    vm.assignmentAmt = assignments.length;
                }

            );
        }
    }
})();
