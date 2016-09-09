(function(){
	'use strict';

	angular.module('app', ['ui.router', 'toastr'])
			.value('apiUrl', 'http://localhost:50629/api')
			.config(appConfig);

		appConfig.$inject= ['$urlRouterProvider', '$stateProvider']

			function appConfig($urlRouterProvider, $stateProvider){
				// tells ui.router where to go if it comes across bad state
				$urlRouterProvider.otherwise('dashboard');

				$stateProvider
					.state('dashboard', {
						url: '/dashboard',
						controller: 'DashboardController as dashboard',
						templateUrl: 'app/Dashboard/dashboard.html'
						})

					// student pages
					.state('student', {
						url: '/student',
						abstract: true, 
						template: '<div ui-view></div>'
					})
						.state('student.grid', {
							url: '/grid',
							controller: 'StudentGridController as studentGrid',
							templateUrl: 'app/Student/student.grid.html'
						})
						.state('student.detail', {
							url: '/detail?studentId',
							controller: 'StudentDetailController as studentDetail',
							templateUrl: 'app/Student/student.detail.html'	
						})
						.state('student.newStudent', {
							url: '/newStudent',
							controller: 'StudentNewStudentController',
							templateUrl: 'app/Student/student.newStudent.html'
						})

					// project pages
					.state('project', {
						url: '/project',
						abstract: true, 
						template: '<div ui-view></div>'
					})
						.state('project.grid', {
							url: '/grid',
							controller: 'ProjectGridController as projectGrid',
							templateUrl: 'app/Project/project.grid.html'
						})
						.state('project.detail', {
							url: '/detail?projectId',
							controller: 'ProjectDetailController as projectDetail',
							templateUrl: 'app/Project/project.detail.html'	
						})
						.state('project.newProject',{
							url: '/newProject',
							controller: 'ProjectNewProjectController as newProject',
							templateUrl: 'app/Project/project.newProject.html'
						});
						
					
			}
})();