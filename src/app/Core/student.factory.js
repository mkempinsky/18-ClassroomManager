(function(){
	'use strict';

	angular
		.module('app')
		.factory('studentFactory', studentFactory);

	studentFactory.$inject = [$http, $q, 'apiUrl'];

	function studentFactory($http, $q, apiUrl) {
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
		function add(student) {
			var defer = $q.defer();
			
			$http.post(apiUrl + '/students', student)
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
			$http.get(apiUrl + '/students')
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

			$http.get(apiUrl + '/students' + id)
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
		function update(student) {
			var defer = $q.defer();

			$http.put(apiUrl + '/students' + student.studentId, student)
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
		function remove(student) {
			var defer = $q.defer();

			$http.delete(apiUrl + '/students' + student.studentId)
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