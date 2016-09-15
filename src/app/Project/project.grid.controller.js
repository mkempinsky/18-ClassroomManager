(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProjectGridController', ProjectGridController);

    ProjectGridController.$inject = ['projectFactory'];

    /* @ngInject */
    function ProjectGridController(projectFactory) {
        var vm = this;
        vm.title = 'ProjectGridController';

        activate();

        ////////////////

        function activate() {
            projectFactory.getAll().then(
                function(projects){
                    vm.projects = projects;
                }
            );
        }
    }
})();