/* Hard coded for simplicty. A better approach would be to use relative values. */
var chart_width = 500;
var chart_height = 250;

angular.module('d3App', [])
	.controller('mainController', ["$scope", function($scope){
		$scope.chart_data = [
		{"value": 100, "name": "alpha", "growth": .9},
		{"value": 70, "name": "beta", "growth": .4},
		{"value": 40, "name": "gamma", "growth": -.3},
		{"value": 15, "name": "delta", "growth": -.65},
		{"value": 5, "name": "epsilon", "growth": .7},
		{"value": 1, "name": "zeta", "growth": .2}
		];

		$scope.visualization = d3plus.viz()
			.container("#viz")
			.data($scope.chart_data)
			.type("tree_map")
			.id("name")
			.size("value")
			.color("growth")
			.draw()

		$scope.updateChart = function() {




		}

		$scope.updateChartParam1 = function() {
				console.log("Hello Char");
			$scope.chart_data = [
			{"value": 100, "name": "hola", "growth": .9},
			{"value": 40, "name": "hello", "growth": .4},
			{"value": 15, "name": "epsilon", "growth": .7},
			{"value": 1, "name": "zeta", "growth": .2}
			];
			$scope.visualization
			.data($scope.chart_data)
			.draw()

		}

		$scope.updateChartParam2 = function() {
				console.log("Hello Char");
			$scope.chart_data = [
			{"value": 100, "name": "bye", "growth": .3},
			{"value": 40, "name": "Adios", "growth": .4},
			{"value": 15, "name": "epsilon", "growth": .1},
			{"value": 1, "name": "zeta", "growth": .2}
			];
			$scope.visualization
			.data($scope.chart_data)
			.draw()

		}


		/* Show the chart on load. */
		$scope.updateChart();
	}]);
