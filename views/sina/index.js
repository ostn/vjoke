define([], function() {
	return function ($scope) {
		$scope.title = '新浪微博！';
		$scope.$on('$destroy', function(){
			// TODO 销毁回调执行
		})
	}
})
