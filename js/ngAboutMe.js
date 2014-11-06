(function(){

	var modAboutMe = angular.module('modAboutMe', ['modLanguage']);

	modAboutMe.controller('aboutMeController', ['languageService', function(languageService){

			lan = languageService.getLanguage();

			this.status     = lan["status"];
			this.name       = "Andrea";
			this.surname    = "Olivieri";
			this.address    = lan["address"];
			this.email      = "andrea.olivieri1991@gmail.com";
			this.phone      = "+39 3355888093";
			this.skype      = "andrea.olivieri17";
			this.website    = "www.andrea-olivieri.com";
			this.blog       = "andreaolivieri.wordpress.com";
			this.occupation = lan["occupation"];
			this.born       = lan["born"];
		}]);

})();