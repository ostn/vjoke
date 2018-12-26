define([], function() {
	return function ($rootScope, $scope, $interval, $url) {
		$scope.title = '个人信息！';
	}
// 	return function dddd($rootScope, $scope, $interval) {
// 		$scope.title = '个人信息！';
// 		$interval(function() {
// 			console.info(6666)
// 		}, 2000)
// 	}
	
// 	return ["$scope", function ($scope) {
// 		$scope.title = "This is About page";
// 	}]; 
	
// 	return ["$scope", "$url", function ($scope, $url) {
// 		$scope.title = "This is About page";
// 	}]; 
});
