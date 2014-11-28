(function(){

	var modContact = angular.module('modContact', ['modWords']);

	modContact.controller('contactController', ['$http', function($http){

		this.email = new Email();

		this.sendEmail = function(){

	        $http({
	            method  : 'POST',
	            url     : '/andrea-olivieri.com/contact/contactengine.php',
	            data    : $.param(this.email),  //param method from jQuery
	            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
	        }).success(function(data){

	            if (data) { //success comes from the return json object
	               console.log("email sent");
	            } else {
	               console.log("email didn't send");
	            }

	        });

	        this.email = new Email();

		};
	}]);

	var Email = function(){
		this.name    	   = null;
		this.senderEmail   = null;
		this.phone   	   = null;
		this.message 	   = null;
	};

})();