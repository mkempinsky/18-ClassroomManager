(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentDetailController', StudentDetailController);

    StudentDetailController.$inject = [
        'studentFactory', 
        'projectFactory', 
        'assignmentFactory', 
        '$stateParams', 
        '$state'
        ];

    /* @ngInject */
    function StudentDetailController(
        studentFactory,
        projectFactory,
        assignmentFactory,
        $stateParams,
        $state) {
        var vm = this;
        vm.assignProject = assignProject;
        vm.save = save;

        activate();

        ////////////////

        function activate() {
            if ($stateParams.studentID) {
                studentFactory.getById($stateParams.studentId).then(
                    function(student){
                        vm.student = student;
                    }
                );
            } else {
                vm.student = {};
            }
        projectFactory.getAll().then(
            function(projects){
                vm.projects = projects;
            }
        );
    } 

        function save () {
            if($stateParams.studentId) {
                studentFactory.update(vm.student).then(
                    function(){
                        $state.go('student.grid');
                    }
                );
            } else {
                studentFactory.create(vm.student).then(
                    function(){
                        $state.go('student.grid');
                    }
                );
            }
        }
        
        function assignProject() {
            assignmentFactory.create({
                studentId: vm.student.studentId,
                projectId: vm.projectId
            }).then(
            function() {
                $state.go('student.grid');
            }
        );
    }

}

})();