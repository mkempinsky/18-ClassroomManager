(function() {
    'use strict';

    angular
        .module('app')
        .controller('newProjectController', newProjectController);

    newProjectController.$inject = ['$stateParams'];

    /* @ngInject */
    function newProjectController($stateParams) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
        }
    }
})();