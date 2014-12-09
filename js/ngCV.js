(function(){

	var modCV = angular.module('modCV',['modAboutMe', 'modIcon', 'modWords', 'modLanguage']);

	modCV.controller('cvController', ['languageService', function(languageService){

		lan = languageService.getLanguage();

		this.education  = new Entry(lan["tEducation"],
			[ new Education(lan["tSep2013"],   lan["tToday"], lan["masterDegree"], lan["university"],      "http://www.uniroma3.it/", lan["universityAddress"], ""),
			  new Education(lan["tSep2010"], lan["tJul2013"],  lan["firstDegree"], lan["university"],      "http://www.uniroma3.it/", lan["universityAddress"], new EQF("6")),
			  new Education(lan["tSep2005"], lan["tJun2010"],      lan["diploma"], lan["highSchool"], "http://www.itisarmellini.it/", lan["highSchoolAddress"], new EQF("4"))
			]);

		this.experiences = new Entry(lan["tExperiences"],
			[ new Experience(lan["tSep2013"], lan["tSep2014"],     "H.S.C. s.r.l.",      "http://www.hsc.it/",  lan["hscAddress"], lan["tInformaticProgrammer"],  lan["hscLearned"]),
			  new Experience(lan["tApr2013"], lan["tJul2013"], "I.S.T.C. - C.N.R.", "http://www.istc.cnr.it/", lan["istcAddress"],            lan["tDeveloper"], lan["istcLearned"])
			]);

		this.skills     = new Entry(lan["tSkills"],
			[ new Skill( lan["tProgrammingLanguages"], "Java, C#, Delphi, PL/SQL"),
			  new Skill(           lan["tOverTheWeb"], "HTML, CSS, SASS, Javascript, JQuery, AngularJS"),
			  new Skill(   lan["tSoftwareKnowledges"], "Sublime Text, Eclipse, RAD Studio, Delphi 7, PLSQL Developer, Android SDK, Git, GitHub, Borland StarTeam, Photoshop, Microsoft Office"),
			  new Skill(     lan["tOperatingSystems"], "Windows, Mac OS, Android")
			]);

		this.languages  = new EntryLanguages(lan["tLanguages"],
			 new MotherTongue(lan["tItalian"]),
			 new OtherLanguages( lan["tOtherLanguages"],
				 [
				   new Language(lan["tEnglish"], "B1", "B1", "B1", "B1", "B1"),
				 ])
			 );

		this.certificates  = new Entry(lan["tCertificates"],
			[
				new Certificate("ECDL Core", lan["ecdlDes"])
			]);

		this.website    = new Entry(lan["tWebSite"],
			[ lan["webSiteDes0"],
			  lan["webSiteDes1"]
			]);

		this.privacy = lan["privacy"];

	}]);

	var Entry = function(title, records){
		this.title   = title;
		this.records = records;
	};

	var Education = function(start, end, description, place, href, address, eqf){
		this.start       = start;
		this.end         = end;
		this.description = description;
		this.place       = place;
		this.href        = href;
		this.address     = address;
		this.eqf         = eqf;
	};

	var EQF = function(number){
		this.level = lan["EQF"+number];
		this.href  = lan["hrefEQF"];
	}

	var Experience = function(start, end, place, href, description, position, learned){
		this.start        = start;
		this.end          = end;
		this.place        = place;
		this.href         = href;
		this.description  = description;
		this.position     = position;
		this.learned      = learned;
	};

	var Skill = function(title, skills){
		this.title  = title;
		this.skills = skills;
	};

	var EntryLanguages = function(title, motherTongue, otherLanguages){
		this.title          = title;
		this.motherTongue   = motherTongue;
		this.otherLanguages = otherLanguages;
	};

	var MotherTongue = function(language){
		this.definition = lan["tMotherTongue"];
		this.name       = language;
	};

	var OtherLanguages = function(title, records){
		this.title              = title;
		this.tLanguage          = lan["tLanguage"];
		this.tUnderstanding			= lan["tUnderstanding"];
		this.tSpeaking 					= lan["tSpeaking"];
		this.tWriting  					= lan["tWriting"];
		this.tListening 				= lan["tListening"];
		this.tReading   				= lan["tReading"];
		this.tSpokenInteraction = lan["tSpokenInteraction"];
		this.tSpokenProduction 	= lan["tSpokenProduction"];
		this.languagesReference = lan["languagesReference"];
		this.records 						= records;
	};

	var Language = function(name, listening, reading, spokenInteraction, spokenProduction, writing){
		this.name              = name;
		this.listening         = listening;
		this.reading  				 = reading;
		this.spokenInteraction = spokenInteraction;
		this.spokenProduction  = spokenProduction;
		this.writing 					 = writing;
	};

	var Certificate = function(name, description){
		this.name        = name;
		this.description = description;
	};


})();