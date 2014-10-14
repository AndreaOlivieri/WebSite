(function(){

	var modIndex = angular.module('modIndex', ['modAboutMe', 'modContact', 'modWords']);

	modIndex.controller('tabController', function(){
		this.tab = 1;

		this.selectTab = function(newTab){
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
			templateUrl : 'template/curriculum.html',
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