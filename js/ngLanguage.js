(function(){

	var modLanguage = angular.module('modLanguage', []);

	modLanguage.factory('languageService', function(){
		return new Language();
	});

	var Language = function(){

		this.currentLanguage = null;

		this.getLanguage = function(){
			
			if (this.currentLanguage == null) {

				if(window.navigator.language == 'it'){
					this.currentLanguage = new italianLanguage();
				}else{
					this.currentLanguage = new englishLanguage();
				}
			}
			return this.currentLanguage;
		};

		this.setLanguage = function(nameOfLanguage){

			var newLanguage = null;

			if(nameOfLanguage == 'it'){
				newLanguage = new italianLanguage();
			}else{
				newLanguage = new englishLanguage();
			}

			this.translate(newLanguage);
		};

		this.translate = function(newLanguage){

			for (var key in this.currentLanguage){
			    this.currentLanguage[key].setTranslation(newLanguage[key].getTranslation());
			}
		};
	}

	modLanguage.controller('languageController', ['languageService', function(languageService){

		this.language = languageService.getLanguage()["language"];

		this.changeLanguage = function(){

			if (languageService.getLanguage()["language"].trans == 'it'){
				languageService.setLanguage('en');
			}else{
				languageService.setLanguage('it');
			}
			
		};
	}]);

})();