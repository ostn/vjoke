define([], function() {
	return function ($scope) {
		$scope.title = '微信！';
		$scope.$on('$destroy', function(){
			// TODO 销毁回调执行
		})
	}
})
