var italianLanguage = function(){
	return {

		language : new Translation("it") ,

		name       : new Translation("Andrea"),
		surname    : new Translation("Olivieri"),
		email      : new Translation("andrea.olivieri1991@gmail.com"),
		phoneNumber: new Translation("+39 3355888093"),
		skype      : new Translation("andrea.olivieri17"),
		website    : new Translation("www.andrea-olivieri.com"),
		blog       : new Translation("andreaolivieri.wordpress.com"),

		born       : new Translation("Nato a Roma, Italia, il 13/06/1991"),
		address    : new Translation("Via Baudelaire 10, 00143, Roma, Italia"),
		cap        : new Translation("00143"),
		city       : new Translation("Roma"),
		nation     : new Translation("Italia"),
		status     : new Translation("Dott."),
		occupation : new Translation("Sviluppatore Software"),

		/* Home */
		tWelcome        : new Translation("Benvenuti nel"),
		tWebSite        : new Translation("Sito Web"),
		tBy             : new Translation("di"),
		tIsLoading      : new Translation("in caricamento"),
		tContact        : new Translation("Contatti"),
		tHome           : new Translation("Home"),
		tAbout          : new Translation("About"),
		tCV             : new Translation("CV"),
		tBlog           : new Translation("Blog"),
		tContactForm    : new Translation("Form Contatti"),
		contactFormDesc : new Translation("Per contattarmi, riempire la seguente form inserendo il proprio nome, l' email e il numero telefonico."),
		tName           : new Translation("Nome"),
		tAddress        : new Translation("Indirizzo"),
		tEmail          : new Translation("Email"),
		tSkype          : new Translation("Skype"),
		tPhoneNumber    : new Translation("Numero Telefonico"),
		tMessage        : new Translation("Messaggio"),
		tSubmit         : new Translation("Invia"),

		/* About */
		introduce_myself : new Translation("Mi Presento"),
		hello_everybody  : new Translation("Ciao a tutti! Sono Andrea, ho 23 anni e sono laureato alla triennale di ingegneria informatica e sto studiando per conseguire la laurea magistrale presso l’università di Roma Tre.  La mia più grande passione è il computer, con il quale passo la maggior parte del tempo ed è il motivo principale dei miei studi e del mio lavoro. Sono un sviluppatore specializzato nella programmazione orientata agli oggetti con il linguaggio Java utilizzando metodologie agile per lo sviluppo del software ed il pattern MVC per la sua struttura, conosco inoltre altri linguaggi come Delphi e C#. Oltre al software mi occupo della parte front-end dello sviluppo di siti web sapendo utilizzare HTML, CSS/SASS, Javascript, jQuery e AngularJS come framework per la realizzazione delle pagine. In passato ho fatto un po’ di esperienza lavorando insieme ad un team di sviluppatori ed ho imparato l’utilizzo di sistemi software per il controllo della versione come GIT o Borland StarTeam, in modo da poter collaborare per la scrittura del codice senza problemi. Nel tempo libero, seguo dei corsi online su vari siti (Udemy, Code School) per aggiornare le mie conoscenze o per apprenderne di nuove come ad esempio lo sviluppo di applicazioni android, l’utilizzo di photoshop o nuovi linguaggi di scripting."),

		my_story     : new Translation("La Mia Storia"),
		my_story_text: new Translation("Fin da quando ero piccolo ho sempre provato un forte interesse per i computer che mi ha portato ad intraprendere una carriera nell'ambito dell'informatica. I primi passi li ho mossi nell'istituto tecnico G. Armellini di Roma dove ho imparato a programmare utilizzando Java. Tra le tante esperienze fatte in quell'istituto ne ho fatta una di livello internazionale partecipando ad un progetto europeo per la sicurezza informatica in collaborazione con un liceo turco ed uno spagnolo. Nel 2010 ho conseguito l'ECDL ed in seguito mi sono sono diplomato con 88/100. Terminata la scuola, mi sono iscritto all'università di Roma Tre alla facoltà di ingegneria informatica. Superati tutti gli esami, ho fatto il tirocinio presso I.S.T.C.-C.N.R. dove ho sviluppato un' applicazione desktop per una piattaforma robotica con lo scopo di analisi della postura e dell'equilibrio di una persona attraverso tre semplici esercizi motori. L'applicativo è stato sviluppato in C# e lavorando a stretto contatto con il sensore Kinect per il tracciamento della postura. Nell’estate del 2013, a meno di tre anni dall’immatricolazione, ho conseguito con 104/110 la laurea triennale in ingegneria informatica. Da neo-laureato ho fatto la mia prima esperienza lavorativa all’ H.S.C. dove, lavorando insieme ad un team di programmatori, ho imparato il linguaggio di programmazione Delphi per lo sviluppo del software aziendale e PL-SQL per le interrogazioni ai database Oracle. Nel settembre del 2014, dopo un esperienza di circa un anno, ho lasciato il posto per riprendere a studiare per la laurea magistrale in ingegneria informatica. Nel frattempo sono entrato nel mondo delle startup partecipando allo ‘startup weekend 2014’ di Roma con il team di ‘Showay’ ed in seguito ad ‘InnovAction Lab 2015’."),

		tFashape      : new Translation("Fashape"),
		fashape_story : new Translation(""),

		/* Icons */
		tPrintCV         : new Translation("Stampa CV"),
		tGoogleProfile   : new Translation("Il mio profilo di Google"),
		tFacebookProfile : new Translation("Il mio profilo di Facebook"),
		tTwitterProfile  : new Translation("Il mio profilo di Twitter"),
		tLinkedinProfile : new Translation("Il mio profilo di Linkedin"),
		tGithubProfile   : new Translation("Il mio profilo di GitHub"),
		tInnLabProfile   : new Translation("Sito web di InnovAction Lab"),
		tFashapeProfile  : new Translation("Sito web di Fashape"),

		/* Curriculum Vitae */
		introCV       : new Translation(""),
		tEducation    : new Translation("Istruzione"),

		tRome         : new Translation("Roma"),

		tToday   : new Translation("Oggi"),
		tFeb2015 : new Translation("Feb 2015"),
		tMay2015 : new Translation("Mag 2015"),
		tSep2014 : new Translation("Set 2014"),
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
		tDeveloper            : new Translation("Sviluppatore Software"),
		ctoFashape            : new Translation("Co-founder e CTO"),
		fashapeAddress        : new Translation("Roma, Italia"),
		fashapeLearned        : new Translation("Fashape è la startup che mira ad aiutare le persone a trovare i prodotti maschili più fashion del momento, proponendo una wishlist degli oggetti più votati sui social network. L'intero sviluppo del sito è stato portato avanti da me mediante l'utilizzo delle risorse cloud di Microsoft Azure e l’ausilio del framework javascript Meteor."),
		innlabAddress         : new Translation("Roma, Italia"),
		innlabLearned         : new Translation("InnovAction Lab è un corso formativo che ti da la possibilità di trasformare la tua idea innovativa in una vera startup. Al termine del percorso sono riuscito, insieme al mio team, a fondare la nostra startup : Fashape."),
		hscAddress            : new Translation("Via Elio Lampridio Cerva 103, 00143, Roma, Italia"),
		hscLearned            : new Translation("Per oltre un anno ho collaborato allo sviluppo del software aziendale in qualità di programmatore informatico, utilizzando il linguaggio di programmazione Delphi e PL/SQL per le interrogazioni ai database."),
		istcAddress           : new Translation("Via S. Martino della Battaglia 44, 00185, Roma, Italia"),
		istcLearned           : new Translation("Per il tirocinio della laurea triennale in ingegneria informatica ho sviluppato un' applicazione desktop per una piattaforma robotica con lo scopo di analisi della postura e dell'equilibrio di una persona attraverso tre semplici esercizi motori. L'applicativo è stato sviluppato in C# e lavorando a stretto contatto con il sensore Kinect per il tracciamento della postura."),

		tSkills                : new Translation("Competenze"),
		tProgrammingLanguages  : new Translation("Linguaggi di Programmazione"),
		tWith                  : new Translation("con"),
		tIntern                : new Translation("Tirocinante"),
		tOverTheWeb            : new Translation("Sul Web"),
		tSoftwareKnowledges    : new Translation("Conoscenze Software"),
		CVS                    : new Translation("CVS"),
		tOperatingSystems      : new Translation("Sistemi Operativi"),

		tLanguages      : new Translation("Lingue"),
		tMotherTongue   : new Translation("Madrelingua"),
		tOtherLanguages : new Translation("Altre Lingue"),
		tItalian        : new Translation("Italiano"),
		tEnglish        : new Translation("Inglese"),

		tLanguage          : new Translation("Lingua"),
		tUnderstanding     : new Translation("Comprensione"),
		tSpeaking          : new Translation("Parlato"),
		tWriting           : new Translation("Produzione Scritta"),
		tListening         : new Translation("Ascolto"),
		tReading           : new Translation("Lettura"),
		tSpokenInteraction : new Translation("Interazione"),
		tSpokenProduction  : new Translation("Produzione Orale"),
		languagesReference : new Translation("Quadro comune europeo di riferimento per le lingue (CEFR)"),

		tCertificates : new Translation("Attestati"),
		ecdlDes       : new Translation("Conseguito il 12/05/2009 all' I.T.I.S. G.Armellini con il superamento di 7 esami: Concetti di base dell'ICT, Uso del Computer e Gestione dei File, Elaborazione Testi, Fogli Elettronici, Uso delle Basi di Dati, Strumenti di Presentazione, Navigazione e Comunicazione in Rete"),

		tWebSite    : new Translation("Sito Web"),
		webSiteDes0 : new Translation("Puoi trovare maggiori informazioni su di me visitando il mio sito web alla pagina: "),

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


