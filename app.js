angular.module('d3App', [])
	.controller('mainController', ["$scope", function($scope){
		$scope.chart_data = [
			{"value": 10, "name": "A", "growth": -.9},
			{"value": 40, "name": "B", "growth": .4},
			{"value": 15, "name": "C", "growth": .7},
			{"value": 80, "name": "D", "growth": -.2}
		];

		$scope.visualization = d3plus.viz()
			.container("#viz")
			.data($scope.chart_data)
			.type("tree_map")
			.id("name")
			.size("value")
			.color({
		    "range": [ "#FA58AC" , "gray" , "#819FF7" ],
		    "value": "growth"
		  })
			.draw()

		$scope.updateChart = function() {




		}

		$scope.updateChartParam1 = function() {
				console.log("Hello Char");
			$scope.chart_data = [
			{"value": 10, "name": "A", "growth": -.9},
			{"value": 40, "name": "B", "growth": .4},
			{"value": 15, "name": "C", "growth": .7},
			{"value": 80, "name": "D", "growth": -.2}
			];
			$scope.visualization
			.data($scope.chart_data)
			.draw()

		}

		$scope.updateChartParam2 = function() {
				console.log("Hello Char");
			$scope.chart_data = [
			{"value": 100, "name": "A", "growth": .3},
			{"value": 40, "name": "B", "growth": -.4},
			{"value": 15, "name": "C", "growth": -.1},
			{"value": 1, "name": "D", "growth": .2}
			];
			$scope.visualization
			.data($scope.chart_data)
			.draw()

		}


		/* Show the chart on load. */
		$scope.updateChart();
	}]);
