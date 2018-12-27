define([], function() {
	return function ($scope) {
		$scope.title = '个人信息！';
		$scope.$on('$destroy', function(){
			// TODO 销毁回调执行
		})
	}
})
