(function(){

	var modWords = angular.module('modWords', ['modLanguage']);

	modWords.controller('wordsController', ['languageService', function(languageService){
		
		lan = languageService.getLanguage();

		/* CV */
		this.tWelcome        = lan["tWelcome"];
		this.tWebSite        = lan["tWebSite"];
		this.tBy             = lan["tBy"];
		this.tIsLoading      = lan["tIsLoading"];
		this.tContact	     = lan["tContact"];
		this.tContactForm    = lan["tContactForm"];
		this.contactFormDesc = lan["contactFormDesc"];
		this.tName           = lan["tName"];
		this.tEmail          = lan["tEmail"];
		this.tPhone          = lan["tPhoneNumber"];
		this.tMessage        = lan["tMessage"];
		this.tSubmit         = lan["tSubmit"];
	}]);
	
})();