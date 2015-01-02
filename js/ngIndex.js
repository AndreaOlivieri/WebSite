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