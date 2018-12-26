define([], function() {
	return function ($rootScope, $scope) {
		$scope.title = '统计信息！'
		// 渲染Echarts组件
		$scope.borgConf = {
			legend: ["电视台","电台","广播电视台","教育电视台","其他"],
			data: [
				{
					"value": 144,
					"name": "电视台"
				}, {
					"value": 133,
					"name": "电台"
				}, {
					"value": 233,
					"name": "广播电视台"
				}, {
					"value": 42,
					"name": "教育电视台"
				}, {
					"value": 1,
					"name": "其他"
				}
			],
			callback: function(param) {
				alert(param.name)
			}
		}
	}
});
