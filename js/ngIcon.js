(function(){

	var modIcon = angular.module('modIcon', ['modLanguage']);

	modIcon.controller('iconController', ['languageService', function(languageService){

		lan = languageService.getLanguage();

		this.google   = new Icon( "Google+",
			                      "https://plus.google.com/104083083589650440165/posts",
			                      lan["tGoogleProfile"],
			                      "img/icn-googleplus.png");

		this.facebook = new Icon( "Facebook",
			                      "https://www.facebook.com/andrea.olivieri.5074",
			                      lan["tFacebookProfile"],
			                      "img/icn-facebook.jpg");

		this.twitter  = new Icon( "Twitter",
			                      "https://twitter.com/OliAndrea17",
			                      lan["tTwitterProfile"],
			                      "img/icn-twitter.png");

		this.linkedin = new Icon( "Linkedin",
			                      "http://it.linkedin.com/pub/andrea-olivieri/65/228/8a2",
			                      lan["tLinkedinProfile"],
			                      "img/icn-linkedin.png");

		this.print    = new Icon( lan["tPrintCV"],
			                      "javascript:window.print()",
			                      lan["tPrintCV"],
			                      "img/icn-print.png");

		this.contact  = new Icon( lan["tContactMe"],
			                      "contact/contact.html",
			                      lan["tContactMe"],
			                      "img/icn-contact.jpg");
	}]);

	var Icon = function(name, href, title, src){
		this.name  = name;
		this.href  = href;
		this.title = title; 
		this.src   = src;
	};

})();