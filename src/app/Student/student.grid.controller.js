(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentGridController', StudentGridController);

    StudentGridController.$inject = ['$stateParams'];

    /* @ngInject */
    function StudentGridController($stateParams) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
        }
    }
})();