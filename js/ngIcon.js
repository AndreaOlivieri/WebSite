(function(){

	var modIcon = angular.module('modIcon', ['modLanguage']);

	modIcon.controller('iconController', ['languageService', function(languageService){

		lan = languageService.getLanguage();

		this.google   = new Icon( "Google+",
			                      "https://plus.google.com/104083083589650440165/posts",
			                      lan["tGoogleProfile"],
			                      "icon/icn-googleplus.png");

		this.facebook = new Icon( "Facebook",
			                      "https://www.facebook.com/andrea.olivieri.5074",
			                      lan["tFacebookProfile"],
			                      "icon/icn-facebook.jpg");

		this.twitter  = new Icon( "Twitter",
			                      "https://twitter.com/OliAndrea17",
			                      lan["tTwitterProfile"],
			                      "icon/icn-twitter.png");

		this.linkedin = new Icon( "Linkedin",
			                      "http://it.linkedin.com/pub/andrea-olivieri/65/228/8a2",
			                      lan["tLinkedinProfile"],
			                      "icon/icn-linkedin.png");

		this.github = new Icon( "Github",
			                      "https://github.com/AndreaOlivieri",
			                      lan["tGithubProfile"],
			                      "icon/icn-github.png");

		this.print    = new Icon( lan["tPrintCV"],
			                      "javascript:window.print()",
			                      lan["tPrintCV"],
			                      "icon/icn-print.png");

		this.contact  = new Icon( lan["tContactMe"],
			                      "contact/contact.html",
			                      lan["tContactMe"],
			                      "icon/icn-contact.jpg");
	}]);

	var Icon = function(name, href, title, src){
		this.name  = name;
		this.href  = href;
		this.title = title;
		this.src   = src;
	};

})();