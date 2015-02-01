(function(){

	var modIndex = angular.module('modIndex', ['modContact', 'modWords', 'modIcon', 'modCV']);

	modIndex.controller('tabController', function(){
		this.tab = 1;
		this.tabcount = 0;

		this.selectTab = function(newTab){
			if(newTab==5 && this.tabcount==0){ //Bisogna caricare manualmente la mappa la prima volta
				var iframe = document.getElementById("canvas_map");
				iframe.src = "https://www.google.com/maps/embed/v1/place?q=Via%20Baudelaire%2C%20Roma%2C%20RM%2C%20Italia%2010&key=AIzaSyD3m7hYRLl-QYiJTi-zQmsm9X6cq2YP2zQ";
				this.tabcount=1;
			}

			this.tab = newTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	modIndex.controller('footerController', function(){

		var size = 151;
		var swatch = document.getElementById("swatch");
		swatch.src = "http://www.clocklink.com/html5embed.php?clock=008&timezone=GMT"+getTimeZone()+"&color=black&size="+size+"&Title=&Message=&Target=&From=2015,1,1,0,0,0&Color=black";
	});

	function getTimeZone(){
		var date = new Date();
		var time = Math.round(date.getTimezoneOffset() / -60) * 100;
		var timezone = "";
		if(time < 0){
			timezone = "-";
		}
		time = Math.abs(time);
		timezone += ('0000'+ time).slice(-4);
		return timezone;
	}

	/**************** TAB ********************/
	modIndex.directive('home', function(){
		return {
			restrict    : 'E',
			templateUrl : 'template/home.html',
		}
	});
	modIndex.directive('about', function(){
		return {
			restrict    : 'E',
			templateUrl : 'template/about.html',
		}
	});
	modIndex.directive('cv', function(){
		return {
			restrict    : 'E',
			templateUrl : 'template/cv.html',
		}
	});
	modIndex.directive('blog', function(){
		return {
			restrict    : 'E',
			templateUrl : 'template/blog.html',
		}
	});
	modIndex.directive('contact', function(){
		return {
			restrict    : 'E',
			templateUrl : 'template/contact.html',
		}
	});

})();