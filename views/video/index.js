define([], function() {
	return function ($scope, $stateParams) {
		
		$scope.title = "Video"
		
		
		console.log($stateParams.id)
		$scope.id = $stateParams.id;
	}
});
