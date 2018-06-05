angular
.module('bambu', [])
.factory('starwars', function($http){
	var people = function(pageNum){
		return $http.get(pageNum);
	}

	return {
		people: people
	}
})
.controller('mainController', function($scope, starwars){
	$scope.getPeople = function(pageNum){
		starwars.people(pageNum)
		.then(function(response){
			$scope.pageContent = response.data;
		})
	}

	$scope.getPeople('https://swapi.co/api/people/?page=1');
});