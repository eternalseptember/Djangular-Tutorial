(function () {
	'use strict';

	angular
		.module('thinkster.authentication.services')
		.factory('Authentication', Authentication);

	Authentication.$inject = ['$cookies', '$http'];

	function Authentication($cookies, $http) {
		var Authentication = {
			login: login,
			register: register
		};

		return Authentication;

		function register(email, username, password) {
			return $http.post('/api/v1/accounts/', {
				email: email,
				username: username,
				password: password,
			});
		}
	}

	function login(email, password) {
		return $http.post('/api/v1/auth/login/', {
			email: email,
			password: password
		});
	}
})();