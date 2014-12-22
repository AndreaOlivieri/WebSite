var italianLanguage = function(){
	return {

		language : new Translation("it") ,

		born       : new Translation("Nato a Roma, Italia, il 13/06/1991"),
		address    : new Translation("Via Baudelaire 10, 00143, Roma, Italia"),
		cap        : new Translation("00143"),
		city       : new Translation("Roma"),
		nation     : new Translation("Italia"),
		status     : new Translation("Dott."),
		occupation : new Translation("Sviluppatore"),

		/* INDEX */
		tWelcome        : new Translation("Benvenuti nel"),
		tWebSite        : new Translation("Sito Web"),
		tBy             : new Translation("di"),
		tIsLoading      : new Translation("in caricamento"),
		tContact	    			: new Translation("Contatti"),
		tContactForm    : new Translation("Form Contatti"),
		contactFormDesc : new Translation("Per contattarmi, riempire la seguente form inserendo il proprio nome, l' email e il numero telefonico."),
		tName           : new Translation("Nome"),
		tEmail          : new Translation("Email"),
		tPhoneNumber    : new Translation("Numero Telefonico"),
		tMessage        : new Translation("Messaggio"),
		tSubmit         : new Translation("Invia"),

		/* Curriculum Vitae */
		tPrintCV         : new Translation("Stampa CV"),
		tContactMe       : new Translation("Contattami"),
		tGoogleProfile   : new Translation("Il mio profilo di Google"),
		tFacebookProfile : new Translation("Il mio profilo di Facebook"),
		tTwitterProfile  : new Translation("Il mio profilo di Twitter"),
		tLinkedinProfile : new Translation("Il mio profilo di Linkedin"),
		tGithubProfile   : new Translation("Il mio profilo di GitHub"),
		/* Curriculum Entry */
		introCV       : new Translation(""),
		tEducation    : new Translation("Istruzione"),

		tRome         : new Translation("Roma"),

		tToday   : new Translation("Oggi"),
		tSep2014	: new Translation("Set 2014"),
  tSep2013 : new Translation("Set 2013"),
		tSep2010 : new Translation("Set 2010"),
		tSep2005 : new Translation("Set 2005"),
  tApr2013 : new Translation("Apr 2013"),
  tJun2010 : new Translation("Giu 2010"),
  tJul2013 : new Translation("Lug 2013"),
   
		university        : new Translation("Universita degli Studi Roma Tre"),
	 universityAddress : new Translation("Via Ostiense 159, 00154, Roma, Italia"),
		highSchool   	    : new Translation("I.T.I.S. G.Armellini"),
		highSchoolAddress : new Translation("Largo B. Placido Riccardi 13, 00146 Roma, Italia"),
		masterDegree  : new Translation("Corso di laurea Magistrale in Ingegneria Informatica"),
		firstDegree   : new Translation("Laurea Triennale in Ingegneria Informatica (104/110)"),
		diploma       : new Translation("Diploma di Perito Industriale Capotecnico (88/100)"),
		
		EQF6    : new Translation("Livello 6 EQF"),
		EQF4    : new Translation("Livello 4 EQF"),
		hrefEQF : new Translation("http://www.isfol.it/eqf"),

		tExperiences          : new Translation("Esperienze"), 
		tInformaticProgrammer : new Translation("Programmatore Informatico"),
		tDeveloper            : new Translation("Sviluppatore"),
		hscAddress            : new Translation("Via Elio Lampridio Cerva 103, 00143, Roma, Italia"),
		hscLearned            : new Translation("Per oltre un anno ho collaborato allo sviluppo del software aziendale in qualità di programmatore informatico, utilizzando il linguaggio di programmazione Delphi e PL/SQL per le interrogazioni ai database."),
		istcAddress           : new Translation("Via S. Martino della Battaglia 44, 00185, Roma, Italia"),
		istcLearned           : new Translation("Per il tirocinio della laurea triennale in ingegneria informatica ho sviluppato un' applicazione desktop per una piattaforma robotica con lo scopo di analisi della postura e dell'equilibrio di una persona attraverso tre semplici esercizi motori. L'applicativo è stato sviluppato in C# e lavorando a stretto contatto con il sensore Kinect per il tracciamento della postura."),

		tSkills                : new Translation("Competenze"),
		tProgrammingLanguages  : new Translation("Linguaggi di Programmazione"),
		tOverTheWeb            : new Translation("Sul Web"),
		tSoftwareKnowledges    : new Translation("Conoscenze Software"),
		tOperatingSystems      : new Translation("Sistemi Operativi"),

		tLanguages      : new Translation("Lingue"),
		tMotherTongue   : new Translation("Madrelingua"),
		tOtherLanguages : new Translation("Altre Lingue"),
		tItalian        : new Translation("Italiano"),
		tEnglish        : new Translation("Inglese"),

		tLanguage          : new Translation("Lingua"), 
		tUnderstanding 	   : new Translation("Comprensione"),
		tSpeaking 		       : new Translation("Parlato"),
		tWriting  		       : new Translation("Produzione Scritta"),
  tListening 		      : new Translation("Ascolto"), 
  tReading   		      : new Translation("Lettura"),
  tSpokenInteraction : new Translation("Interazione"), 
  tSpokenProduction  : new Translation("Produzione Orale"),
  languagesReference : new Translation("Quadro comune europeo di riferimento per le lingue (CEFR)"),

  tCertificates : new Translation("Attestati"),
  ecdlDes       : new Translation("Conseguito il 12/05/2009 all' I.T.I.S. G.Armellini con il superamento di 7 esami: Concetti di base dell'ICT, Uso del Computer e Gestione dei File, Elaborazione Testi, Fogli Elettronici, Uso delle Basi di Dati, Strumenti di Presentazione, Navigazione e Comunicazione in Rete"),

		tWebSite    : new Translation("Sito Web"),
		webSiteDes0 : new Translation("Puoi trovare maggiori informazioni su di me visitando il mio sito web alla pagina: "),
		webSiteDes1 : new Translation("Il sito è stato sviluppato utilizzando HTML, CSS, Javascript, PHP, AngularJS, JQuery e Bootstrap."),

		tClose : new Translation("Chiudi"),
		privacy: new Translation("Autorizzo il trattamento dei dati personali contenuti nel mio curriculum vitae in base art. 13 del D. Lgs. 196/2003.")
	}
}

var Translation = function(trans){

	this.trans = trans;

	this.getTranslation = function(){
		return this.trans;
	};

	this.setTranslation = function(newTrans){
		this.trans = newTrans;
	};
};


