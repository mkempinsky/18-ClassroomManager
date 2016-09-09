(function(){
	'use strict';

	angular
		.module('app')
		.factory('assignmentFactory', assignmentFactory);

	assignmentFactory.$inject = [$http, $q, 'apiUrl'];

	function assignmentFactory($http, $q, apiUrl) {
		var service = {
			add: add, 
			getAll: getAll,
			getById: getById,
			update: update,
			remove: remove
		};

		return service;


		//// CRUD FUNCTIONS


		// ADD
		function add(assignment) {
			var defer = $q.defer();
			
			$http.post(apiUrl + '/assignments', assignment)
			.then(
				function(response){
					defer.resolve(response.data);
				},
				function(error) {
					defer.reject(error);
				}
			);
			return defer.promise;
		}	

		// GET ALL
		function getAll() {
			var defer = $q.defer();
			$http.get(apiUrl + '/assignments')
			.then(
				function(response) {
					defer.resolve(response.data);
				},
				function(error) {
					defer.reject(error);
				}
			);
			return defer.promise;
		}

		// GET BY ID
		function getById(id) {
			var defer = $q.defer();

			$http.get(apiUrl + '/assignments' + id)
			.then(
				function(response) {
					defer.resolve(response.data);
				},
				function(error) {
					defer.reject(error);
				}
				);
			return defer.promise;
		}

		// UPDATE
		function update(assignment) {
			var defer = $q.defer();

			$http.put(apiUrl + '/assignments' + assignment.assignmentId, assignment)
			.then (
				function() {
					defer.resolve();
				},
				function() {
					defer.reject(error); 
				}
			);
			return defer.promise;
		}

		// REMOVE
		function remove(assignment) {
			var defer = $q.defer();

			$http.delete(apiUrl + '/assignments' + assignment.assignmentId)
			.then(
				function(response) {
					defer.resolve(response.data);
				},
				function(error) {
					defer.reject(error);
				}
			);
			return defer.promise;
		}

	}
})();