define([], function() {
	return function ($scope) {
		$scope.title = 'Wifi！';
		$scope.$on('$destroy', function(){
			// TODO 销毁回调执行
		})
	}
})
