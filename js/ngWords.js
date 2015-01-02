(function(){

	var modWords = angular.module('modWords', ['modLanguage']);

	modWords.controller('wordsController', ['languageService', '$scope', function(languageService, $scope){

		$scope.words = languageService.getLanguage();

	}]);

})();