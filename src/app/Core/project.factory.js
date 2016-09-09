(function(){
	'use strict';

	angular
		.module('app')
		.factory('projectFactory', projectFactory);

	projectFactory.$inject = [$http, $q, 'apiUrl'];

	function projectFactory($http, $q, apiUrl) {
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
		function add(project) {
			var defer = $q.defer();
			
			$http.post(apiUrl + '/projects', project)
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
			$http.get(apiUrl + '/projects')
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

			$http.get(apiUrl + '/projects' + id)
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
		function update(project) {
			var defer = $q.defer();

			$http.put(apiUrl + '/projects' + project.projectId, project)
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
		function remove(project) {
			var defer = $q.defer();

			$http.delete(apiUrl + '/projects' + project.projectId)
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