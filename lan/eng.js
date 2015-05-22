var englishLanguage = function(){
	return {

		language : new Translation("en"),

		name       : new Translation("Andrea"),
		surname    : new Translation("Olivieri"),
		email      : new Translation("andrea.olivieri1991@gmail.com"),
		phoneNumber: new Translation("+39 3355888093"),
		skype      : new Translation("andrea.olivieri17"),
		website    : new Translation("www.andrea-olivieri.com"),
		blog       : new Translation("andreaolivieri.wordpress.com"),

		born       : new Translation("Born at Rome, Italy, 13/06/1991"),
		address    : new Translation("Via Baudelaire 10, 00143, Rome, Italy"),
		cap        : new Translation("00143"),
		city       : new Translation("Rome"),
		nation     : new Translation("Italy"),
		status     : new Translation("Dr."),
		occupation : new Translation("Software Developer"),

		/* Home */
		tWelcome        : new Translation("Welcome To"),
		tWebSite        : new Translation("Web Site"),
		tBy             : new Translation("by"),
		tIsLoading      : new Translation("loading"),
		tContact        : new Translation("Contact"),
		tHome           : new Translation("Home"),
		tAbout          : new Translation("About"),
		tCV             : new Translation("CV"),
		tBlog           : new Translation("Blog"),
		tContactForm    : new Translation("Contact Form"),
		contactFormDesc : new Translation("For contacting me, complete next form with name, email and phone number."),
		tName           : new Translation("Name"),
		tAddress        : new Translation("Address"),
		tEmail          : new Translation("Email"),
		tSkype          : new Translation("Skype"),
		tPhoneNumber    : new Translation("Phone Number"),
		tMessage        : new Translation("Message"),
		tSubmit         : new Translation("Submit"),

		/* About */
		introduce_myself : new Translation("Let Me Introduce Myself"),
		hello_everybody  : new Translation("Hello everyone! I'm Andrea, 23 years old and graduated in computer engineering and I'm studying for my master's degree at Roma Tre university. My biggest passion is the computer, with whom I spend most of the time, it’s the main reason of my studies and my work. I am a developer specializing in object-oriented programming with Java language using agile methodologies for software development and the MVC pattern for its structure, I also know other languages such as Delphi and C#. In addition I deal with the front-end part of websites development because I know HTML, CSS/SASS, Javascript, jQuery and AngularJS as a framework for the pages realization. In the past I've done a bit of experience working together with a developers team and I learned how to use the software systems for version control as GIT or Borland StarTeam, so we can write code together without any problems. In my free time, I follow online courses on different sites (Udemy, School Code) to update my knowledge or learn new ones such as the development of Android applications, the use of photoshop or new scripting languages."),

		my_story     : new Translation("My Story"),
		my_story_text: new Translation("Since I was a little boy I feel a strong interest for the computers that led me to follow an informatic career. I've moved my first steps at G. Armellini technical institute of Rome where I’ve started to program using Java. Among many experiences in that high school, the most important was participating in an european project for information security in conjunction with a turkish and spanish high school. In 2010 I obtained the ECDL and then I graduated with 88/100. After high school, I enrolled at Roma Tre university in the faculty of computer engineering. After passing all exams, I decided to do an internship at ISTC-CNR where I developed a desktop application to a robotic platform with the aim of analyzing the person's posture and balance through three simple exercises engines. The application was developed in C# and worked closely with the Kinect sensor for tracking posture. In the summer of 2013, less than three years after enrollment, I achieved my bachelor's degree in computer engineering with 104/110L. As recent graduate I decided to do my first working experience at H.S.C. company where I learned Delphi programming language in order to develop its enterprise software and PL-SQL to query Oracle databases. After one year I left the company to start studying full-time again for the master degree in computer engineering. Meanwhile I entered in the startup's world participating at ‘startup weekend 2014’ of Rome within ‘Showay’ team and then ‘InnovAction Lab 2015’."),

		tFashape      : new Translation("Fashape"),
		fashape_story : new Translation(""),

		/* Icons */
		tPrintCV         : new Translation("Print CV"),
		tGoogleProfile   : new Translation("Google's profile"),
		tFacebookProfile : new Translation("Facebook's profile"),
		tTwitterProfile  : new Translation("Twitter's profile"),
		tLinkedinProfile : new Translation("Linkedin's profile"),
		tGithubProfile   : new Translation("GitHub's profile"),
		tInnLabProfile   : new Translation("InnovAction Lab website"),
		tFashapeProfile  : new Translation("Fashape website"),

		/* Curriculum Vitae */
		introCV       : new Translation(""),
		tEducation    : new Translation("Education"),

		tRome         : new Translation("Rome"),

		tToday   : new Translation("Today"),
		tFeb2015 : new Translation("Feb 2015"),
		tMay2015 : new Translation("May 2015"),
		tSep2014 : new Translation("Sep 2014"),
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
		tDeveloper            : new Translation("Software Developer"),
		ctoFashape            : new Translation("Co-founder and CTO"),
		fashapeAddress        : new Translation("Rome, Italy"),
		fashapeLearned        : new Translation("Fashape is the startup that help people to find the best men’s fashion products through a daily wish list of most voted objects from social networks. The entire development of the site was carried out by me with Meteor javascript framework and Microsoft Azure cloud resources."),
		innlabAddress         : new Translation("Rome, Italy"),
		innlabLearned         : new Translation("InnovAction Lab is a training course that gives you the ability to turn your innovative idea into a startup. At the end of the course I was able, with my team, to found our startup: Fashape."),
		hscAddress            : new Translation("Via Elio Lampridio Cerva 103, 00143, Rome, Italy"),
		hscLearned            : new Translation("For over a year I have collaborated for developing an enterprise software, using Delphi programming language and PL/SQL for database queries."),
		istcAddress           : new Translation("Via S. Martino della Battaglia 44, 00185, Rome, Italy"),
		istcLearned           : new Translation("For my internship I developed a desktop application to a robotic platform with the aim of analyzing the person's posture and balance through three simple exercises engines. The application was developed in C# and working closely with the Kinect sensor for tracking posture."),

		tSkills               : new Translation("Skills"),
		tProgrammingLanguages : new Translation("Programming Languages"),
		tWith                 : new Translation("with"),
		tIntern                : new Translation("Intern"),
		tOverTheWeb           : new Translation("Over the Web"),
		tSoftwareKnowledges   : new Translation("Software Knowledges"),
		CVS                   : new Translation("CVS"),
		tOperatingSystems     : new Translation("Operating Systems"),

		tLanguages      : new Translation("Languages"),
		tMotherTongue   : new Translation("Mother Tongue"),
		tOtherLanguages : new Translation("Other Languages"),
		tItalian        : new Translation("Italian Language"),
		tEnglish        : new Translation("English"),

		tLanguage          : new Translation("Language"),
		tUnderstanding 	   : new Translation("Understanding"),
		tSpeaking          : new Translation("Speaking"),
		tWriting           : new Translation("Writing"),
		tListening         : new Translation("Listening"),
		tReading           : new Translation("Reading"),
		tSpokenInteraction : new Translation("Spoken Interation"),
		tSpokenProduction  : new Translation("Spoken Production"),
		languagesReference : new Translation("Common European Framework of Reference for Languages (CEFR)"),

		tCertificates : new Translation("Certificates"),
		ecdlDes       : new Translation("I attained it at 12/05/2009 in I.T.I.S. G.Armellini with 7 exams' overcoming: Basic Concepts of ICT, Using the Computer and Managing Files, Word Processing, Spreadsheets, Using Databases, Presentations, Web Browsing and Communication"),


		tWebSite    : new Translation("Website"),
		webSiteDes0 : new Translation("For detailed information about me, please visit my website: "),

		tClose : new Translation("Close"),
		privacy: new Translation("")
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


