angular
.module('bambu', [])
.factory('starwars', function($http){
	var people = function(pageUrl){
		return $http.get(pageUrl);
	}

	return {
		people: people
	}
})
.controller('mainController', function($scope, starwars){
	$scope.getPeople = function(pageUrl){
		starwars.people(pageUrl)
		.then(function(response){
			$scope.pageContent = response.data;
		})
	}

	$scope.getPeople('https://swapi.co/api/people/?page=1');
});