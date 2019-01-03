define([], function() {
	return function ($scope) {
		$scope.title = 'QQ！';
		$scope.$on('$destroy', function(){
			// TODO 销毁回调执行
		})
	}
})
