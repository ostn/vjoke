define([], function() {
	return function ($scope) {
		$scope.title = '我是文档！';
		$scope.$on('$destroy', function(){
			// TODO 销毁回调执行
		})
	}
})
