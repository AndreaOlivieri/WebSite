(function(){

	var modIcon = angular.module('modIcon', ['modLanguage']);

	modIcon.controller('iconController', ['languageService', function(languageService){

		lan = languageService.getLanguage();

		this.google   = new Icon( "Google+",
			                      "https://plus.google.com/102553212030062995896/about",
			                      lan["tGoogleProfile"],
			                      "img/icon/icn-googleplus.png");

		this.facebook = new Icon( "Facebook",
			                      "https://www.facebook.com/andrea.olivieri.5074",
			                      lan["tFacebookProfile"],
			                      "img/icon/icn-facebook.jpg");

		this.twitter  = new Icon( "Twitter",
			                      "https://twitter.com/OliAndrea17",
			                      lan["tTwitterProfile"],
			                      "img/icon/icn-twitter.png");

		this.linkedin = new Icon( "Linkedin",
			                      "http://it.linkedin.com/pub/andrea-olivieri/65/228/8a2",
			                      lan["tLinkedinProfile"],
			                      "img/icon/icn-linkedin.png");

		this.github = new Icon( "Github",
			                      "https://github.com/AndreaOlivieri",
			                      lan["tGithubProfile"],
			                      "img/icon/icn-github.png");

		this.print    = new Icon( lan["tPrintCV"],
			                      "javascript:window.print()",
			                      lan["tPrintCV"],
			                      "img/icon/icn-print.png");

		this.innlab = new Icon( "InnovAction Lab",
			                      "http://www.innovactionlab.org/",
			                      lan["tInnLabProfile"],
			                      "img/logo/logo_innlab.png");

		this.fashape = new Icon( "Fashape",
			                      "https://fashape.com/",
			                      lan["tFashapeProfile"],
			                      "img/logo/logo_fashape.png");

	}]);

	var Icon = function(name, href, title, src){
		this.name  = name;
		this.href  = href;
		this.title = title;
		this.src   = src;
	};

})();