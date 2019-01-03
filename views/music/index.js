define([], function() {
	return function ($rootScope, $scope) {
		$scope.title = '我是音乐！';
		$scope.$on('$destroy', function(){
			// TODO 销毁回调执行
// 			if(confirm("确定要离开吗?离开后音乐可能无法播放!")) {
// 				console.info("leave")
// 			} else {
// 				console.log("留下了")
// 			}
		})
	}
});
