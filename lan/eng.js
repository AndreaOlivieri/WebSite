var englishLanguage = function(){
	return {

		language : new Translation("en"),

		born       : new Translation("Born at Rome, Italy, 13/06/1991"),
		address    : new Translation("Via Baudelaire 10, 00143, Rome, Italy"),
		cap        : new Translation("00143"),
		city       : new Translation("Rome"),
		nation     : new Translation("Italy"),
		status     : new Translation("Dr."),
		occupation : new Translation("Developer"),

		/* INDEX */
		tWelcome        : new Translation("Welcome To"),
		tWebSite        : new Translation("Web Site"),
		tBy             : new Translation("by"),
		tIsLoading      : new Translation("loading"),
		tContact	       : new Translation("Contact"),
		tContactForm    : new Translation("Contact Form"),
		contactFormDesc : new Translation("For contacting me, complete next form with name, email and phone number."),
		tName           : new Translation("Name"),
		tEmail          : new Translation("Email"),
		tPhoneNumber    : new Translation("Phone Number"),
		tMessage        : new Translation("Message"),
		tSubmit         : new Translation("Submit"),

		/* Curriculum Vitae */
		tPrintCV         : new Translation("Print CV"),
		tContactMe       : new Translation("Contact Me"),
		tGoogleProfile   : new Translation("Google's profile"),
		tFacebookProfile : new Translation("Facebook's profile"),
		tTwitterProfile  : new Translation("Twitter's profile"),
		tLinkedinProfile : new Translation("Linkedin's profile"),
		/* Curriculum Entry */
		introCV       : new Translation(""),
		tEducation    : new Translation("Education"),

		tRome         : new Translation("Rome"),

		tToday   : new Translation("Today"),
		tSep2014	: new Translation("Sep 2014"),
  tSep2013 : new Translation("Sep 2013"),
		tSep2010 : new Translation("Sep 2010"),
		tSep2005 : new Translation("Sep 2005"),
  tApr2013 : new Translation("Apr 2013"),
  tJun2010 : new Translation("Jun 2010"),
  tJul2013 : new Translation("Jul 2013"),
   
		university        : new Translation("Roma Tre University"),
		universityAddress : new Translation("Via Ostiense 159, 00154, Rome, Italy"),
		highSchool        : new Translation("I.T.I.S. G.Armellini"),
		highSchoolAddress : new Translation("Largo B. Placido Riccardi 13, 00146 Rome, Italy"),
		masterDegree  : new Translation("Studying for Master's Degree in Computer Engineering"),
		firstDegree   : new Translation("Bachelor's Degree in Computer Engineering (104/110)"),
		diploma       : new Translation("Diploma of Computer Science (88/100)"),

		EQF6    : new Translation("Level 6 EQF"),
		EQF4    : new Translation("Level 4 EQF"),
		hrefEQF : new Translation("http://ec.europa.eu/ploteus/en/content/descriptors-page"),

		tExperiences          : new Translation("Experiences"), 
		tInformaticProgrammer : new Translation("Informatic Programmer"),
		tDeveloper            : new Translation("Developer"),
		hscAddress            : new Translation("Via Elio Lampridio Cerva 103, 00143, Rome, Italy"),
		hscLearned            : new Translation("For over a year I have collaborated for developing an enterprise software, using Delphi programming language and PL/SQL for database queries."),
		istcAddress           : new Translation("Via S. Martino della Battaglia 44, 00185, Rome, Italy"),
		istcLearned           : new Translation("For my internship I developed a desktop application to a robotic platform with the aim of analyzing the posture and balance of a person through three simple exercises engines. The application was developed in C# and working closely with the Kinect sensor for tracking posture."),

		tSkills               : new Translation("Skills"),
		tProgrammingLanguages : new Translation("Programming Languages"),
		tOverTheWeb           : new Translation("Over the Web"),
		tSoftwareKnowledges   : new Translation("Software Knowledges"),
		tOperatingSystems     : new Translation("Operating Systems"),

		tLanguages      : new Translation("Languages"),
		tMotherTongue   : new Translation("Mother Tongue"),
		tOtherLanguages : new Translation("Other Languages"),
		tItalian        : new Translation("Italian Language"),
		tEnglish        : new Translation("English"),

 	tLanguage          : new Translation("Language"), 
		tUnderstanding 	   : new Translation("Understanding"),
		tSpeaking 		       : new Translation("Speaking"),
		tWriting  		       : new Translation("Writing"),
  tListening 		      : new Translation("Listening"), 
  tReading   		      : new Translation("Reading"),
  tSpokenInteraction : new Translation("Spoken Interation"), 
  tSpokenProduction  : new Translation("Spoken Production"),
  languagesReference : new Translation("Common European Framework of Reference for Languages (CEFR)"),

  tCertificates : new Translation("Certificates"),
  ecdlDes       : new Translation("I attained it at 12/05/2009 in I.T.I.S. G.Armellini with 7 exams' overcoming: Basic Concepts of ICT, Using the Computer and Managing Files, Word Processing, Spreadsheets, Using Databases, Presentations, Web Browsing and Communication"),


		tWebSite    : new Translation("Website"),
		webSiteDes0 : new Translation("For detailed information about me, please visit my website: "),
		webSiteDes1 : new Translation("The website has been developed with HTML, CSS, Javascript, PHP, AngularJS, JQuery and Bootstrap."),
	
		tClose : new Translation("Close")
	}
};


var Translation = function(trans){

	this.trans = trans;

	this.getTranslation = function(){
		return this.trans;
	};

	this.setTranslation = function(newTrans){
		this.trans = newTrans;
	};
};


