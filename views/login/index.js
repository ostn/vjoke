define([], function() {
	return function ($rootScope, $scope) {
		var bool = false;
		$scope.login = function() {
			if (bool == false) {
				bool = true;
				document.querySelectorAll('.cont_letras > p')[0].style.left = '200px';
				document.querySelectorAll('.cont_letras > p')[1].style.left = '-320px';
				document.querySelectorAll('.cont_letras > p')[2].style.left = '200px';
				setTimeout(function() {
					document.querySelector('.cont_join').className = 'cont_join cont_join_form_act';
				}, 1000);
			} else {
				$rootScope.go('home')
			}
		}
	}
});
