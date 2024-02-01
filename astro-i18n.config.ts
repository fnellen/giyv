import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
	primaryLocale: "de", // default app locale
	secondaryLocales: ["it", "en"], // other supported locales
	fallbackLocale: "de", // fallback locale (on missing translation)
	trailingSlash: "never", // "never" or "always"
	run: "client+server", // "client+server" or "server"
	showPrimaryLocale: false, // "/en/about" vs "/about"
	translationLoadingRules: [], // per page group loading
	translationDirectory: {}, // translation directory names
	translations: {
		common: {
			de: {
				"not_found": {
					"404": "Leider nichts gefunden ... 404",
					"desc_1": "Die Seite, die du suchst, existiert leider nicht. Kehre zum Blog zurück oder schaue dir die neuesten Beiträge an.",
					"desc_2": "Wenn du schon dabei bist, folge uns doch auf Instagram!",
					"desc_3": "Falls du einen Fehler gefunden hast, kannst du uns gerne eine Email schreiben.",
					"email_subject": "Fehler 404 - Seite nicht gefunden",
					"email_body": "Hallo, ich habe einen Fehler auf der Website GIYV gefunden. Folgende Seite ist betroffen:",
				},
				"nav": {
					"home": "Startseite",
					"content": "Inhalte",
					"about": "Über uns",
					"your_voice": "Deine Stimme",
					"blog": "Blog",
					"contact": "Kontakt",
					"participate": "Mach mit",
				},
				"latest_articles": {
					"latest_articles": "Neueste Artikel",
					"description": "Hier findest du die neuesten Artikel aus unserem Blog.",
					"read_more": "Weiterlesen",
				},
				"article": {
					"available_in": "Verfügbar in",
					"check_out_post": "Schau dir unseren Beitrag an",
					"share": "Teile diesen Beitrag",
					"follow_us": "Folge uns",
					"written_by": "Geschrieben vom Team",
					"authors": "Autorinnen und Autoren",
					"published_at": "Veröffentlicht am",
					"read_time": "Lesezeit",
				},
				"footer": {
					"site": "Website",
					"languages": "Sprachen",
					"resources": "Ressourcen",
					"all_rights_reserved": "Alle Rechte vorbehalten",
					"cookie_preferences": "Cookie Einstellungen",
					"impressum": "Impressum",
					"datenschutz": "Datenschutz",
				},
				"data_vote": {
					"title": "Daten zur letzten Europawahl 2019",
					"description": "Hier findest du die Daten zur letzten Europawahl in 2019. Wir vergleichen hier die Ergebnisse zwischen Deutschland und Italien.",
					"genders": "Frauen / Männer",
					"gender_balance_de": "Geschlechterverhältnis in 🇩🇪 in Prozent",
					"gender_balance_source_de": "https://www.europarl.europa.eu/election-results-2019/de/geschlechterverhaltnis-mdep/2019-2024/",
					"gender_balance_it": "Geschlechterverhältnis in 🇮🇹 in Prozent",
					"gender_balance_source_it": "https://www.europarl.europa.eu/election-results-2019/it/equilibrio-di-genere-eurodeputati/2019-2024/",
					"turnout_de": "Wahlbeteiligung in 🇩🇪 (16/18-24 Jahre)",
					"turnout_source_de": "https://www.europarl.europa.eu/election-results-2019/de/wahlbeteiligung/",
					"turnout_it": "Wahlbeteiligung in 🇮🇹 (16/18-24 Jahre)",
					"turnout_source_it": "https://www.europarl.europa.eu/election-results-2019/it/affluenza/",
				},
				"categories": {
					"title": "Unsere Stimme zu ...",
					"description": "Hier findest du unsere Stimme zu verschiedenen Themen, die uns junge Generation am meisten beschäftigen. Finde heraus was wir zu den Themen sagen und teile deine Meinung mit uns! Wir freuen uns auf den Diskurs mit dir!",
				},
				"home_cta": {
					"title1": "Deine",
					"title2": "zählt!",
					"voice": "Stimme",
					"description": "Nun wollen wir von dir wissen, was du zu den Themen zu sagen hast! Themenvorschläge, Fragen oder Anregungen? Schreib uns!",
					"action1": "Schreib uns",
					"action2": "Folge uns",
				},
				"blog": {
					"description": "Hier findest du alle unsere Beiträge. Wir behandeln Themen, die uns junge Generation am meisten beschäftigen. Finde heraus was wir zu den Themen sagen und teile deine Meinung mit uns! Wir freuen uns auf den Diskurs mit dir!",
					"older_posts": "Ältere Beiträge",
					"recent_posts": "Neueste Beiträge",
				},
				"about": {
					"title": "Über uns ",
					"description": "Das Projekt zielt darauf ab, das Vertrauen junger Menschen in die europäische Zusammenarbeit, die Solidarität und den sozialen Frieden zu stärken.",
				},
				"contact": {
					"title": "Kontakt",
					"description": "Du hast Fragen, Anregungen oder möchtest uns einfach etwas mitteilen? Schreib uns!",
					"form": {
						"name": "Name",
						"email": "Email",
						"message": "Nachricht",
						"submit": "Abschicken",
					},
					"success": "Vielen Dank für deine Nachricht! Wir werden uns so schnell wie möglich bei dir melden.",
					"error": "Ups, da ist etwas schief gelaufen. Bitte versuche es erneut oder schreibe uns eine Email an: youngvoices@villavigoni.eu2",
				},
				"seo": {
					"home": {
						"title": "Home",
						"description": "Eine Initiative von jungen Menschen für junge Menschen. Wir verwenden unsere Stimme, um uns für die Themen einzusetzen, die uns am meisten beschäftigen.",
					},
				}
			},
			en: {
				"not_found": {
					"404": "Nothing found ... 404",
					"desc_1": "The page you're looking for doesn't exist. Return to the blog or check out the latest posts.",
					"desc_2": "While you're at it, follow us on Instagram!",
					"desc_3": "If you found an error, feel free to send us an email.",
				},
				"nav": {
					"home": "Home",
					"content": "Content",
					"about": "About us",
					"your_voice": "Your voice",
					"blog": "Blog",
					"contact": "Contact",
					"participate": "Participate with us",
				},
				"latest_articles": {
					"latest_articles": "Latest articles",
					"description": "Here you can find the latest articles from our blog.",
					"read_more": "Read more",
				},
				"article": {
					"available_in": "Available in",
					"check_out_post": "Check out the post",
					"share": "Share",
					"follow_us": "Follow us",
					"written_by": "Written by Team",
					"authors": "Authors",
					"published_at": "Published at",
					"read_time": "read",
				},
				"footer": {
					"site": "Site",
					"languages": "Languages",
					"resources": "Resources",
					"all_rights_reserved": "All rights reserved",
					"cookie_preferences": "Cookie preferences",
					"impressum": "Imprint",
					"datenschutz": "Privacy policy",
				},
				"data_vote": {
					"title": "Data from the last European elections 2019",
					"description": "Here you can find the data from the last European elections in 2019. We compare the results between Germany and Italy.",
					"genders": "Women / Men",
					"gender_balance_de": "Gender balance in 🇩🇪 in percent",
					"gender_balance_source_de": "https://www.europarl.europa.eu/election-results-2019/de/geschlechterverhaltnis-mdep/2019-2024/",
					"gender_balance_it": "Gender balance in 🇮🇹 in percent",
					"gender_balance_source_it": "https://www.europarl.europa.eu/election-results-2019/it/equilibrio-di-genere-eurodeputati/2019-2024/",
					"turnout_de": "Turnout in 🇩🇪 (16/18-24 years)",
					"turnout_source_de": "https://www.europarl.europa.eu/election-results-2019/de/wahlbeteiligung/",
					"turnout_it": "Turnout in 🇮🇹 (16/18-24 years)",
					"turnout_source_it": "https://www.europarl.europa.eu/election-results-2019/it/affluenza/",
				},
				"categories": {
					"title": "Our voice on ...",
					"description": "Here you can find our voice on different topics that concern us young generation the most. Find out what we say about the topics and share your opinion with us! We are looking forward to the discourse with you!",
				},
				"home_cta": {
					"title1": "Your",
					"title2": "counts!",
					"voice": "voice",
					"description": "Now we want to know what you have to say about the topics! Topic suggestions, questions or suggestions? Write us!",
					"action1": "Write us",
					"action2": "Follow us",
				},
				"blog": {
					"description": "Here you can find all our posts. We address topics that concern us young generation the most. Find out what we say about the topics and share your opinion with us! We are looking forward to the discourse with you!",
					"older_posts": "Older posts",
					"recent_posts": "Recent posts",
				},
				"about": {
					"title": "About us",
					"description": "The project aims to strengthen young people's confidence in European cooperation, solidarity and social peace.",
				},
				"contact": {
					"title": "Contact",
					"description": "You have questions, suggestions or just want to tell us something? Write us!",
					"form": {
						"name": "Name",
						"email": "Email",
						"message": "Message",
						"submit": "Submit",
					},
					"success": "Thank you for your message! We will get back to you as soon as possible.",
					"error": "Oops, something went wrong. Please try again or write us an email to: youngvoices@villavigoni.eu",
				},
				"seo": {
					"home": {
						"title": "Home",
						"description": "An initiative of young people for young people. We use our voice to stand up for the topics that concern us the most.",
					},
				}
			},
			it: {
				"not_found": {
					"404": "Niente trovato ... 404",
					"desc_1": "La pagina che stai cercando non esiste. Torna al blog o dai un'occhiata agli ultimi post.",
					"desc_2": "Mentre ci sei, seguici su Instagram!",
					"desc_3": "Se hai trovato un errore, non esitare a inviarci una email.",
					"email_subject": "Errore 404 - Pagina non trovata",
					"email_body": "Ciao, ho trovato un errore sulla pagina: ",
				},
				"nav": {
					"home": "Home",
					"content": "Contenuti",
					"about": "Su di noi",
					"your_voice": "La tua voce",
					"blog": "Blog",
					"contact": "Contatto",
					"participate": "Partecipa con noi",
				},
				"latest_articles": {
					"latest_articles": "Ultimi articoli",
					"description": "Qui puoi trovare gli ultimi articoli del nostro blog.",
					"read_more": "Leggi di più",
				},
				"article": {
					"available_in": "Disponibile in",
					"check_out_post": "Guarda il post",
					"share": "Condividi",
					"follow_us": "Seguici",
					"written_by": "Scritto dal Team",
					"authors": "Autrici e autori",
					"published_at": "Pubblicato il",
					"read_time": "di lettura",
				},
				"footer": {
					"site": "Sito",
					"languages": "Lingue",
					"resources": "Risorse",
					"all_rights_reserved": "Tutti i diritti riservati",
					"cookie_preferences": "Preferenze sui cookie",
					"impressum": "Note legali",
					"datenschutz": "Privacy policy",
				},
				"data_vote": {
					"title": "Dati delle ultime elezioni europee 2019",
					"description": "Qui puoi trovare i dati delle ultime elezioni europee del 2019. Confrontiamo i risultati tra Germania e Italia.",
					"genders": "Donne / Uomini",
					"gender_balance_de": "Equilibrio di genere in 🇩🇪 in %",
					"gender_balance_source_de": "https://www.europarl.europa.eu/election-results-2019/de/geschlechterverhaltnis-mdep/2019-2024/",
					"gender_balance_it": "Equilibrio di genere in 🇮🇹 in %",
					"gender_balance_source_it": "https://www.europarl.europa.eu/election-results-2019/it/equilibrio-di-genere-eurodeputati/2019-2024/",
					"turnout_de": "Affluenza in 🇩🇪 (16/18-24 anni)",
					"turnout_source_de": "https://www.europarl.europa.eu/election-results-2019/de/wahlbeteiligung/",
					"turnout_it": "Affluenza in 🇮🇹 (16/18-24 anni)",
					"turnout_source_it": "https://www.europarl.europa.eu/election-results-2019/it/affluenza/",
				},
				"categories": {
					"title": "La nostra voce su ...",
					"description": "Qui puoi trovare la nostra voce su diversi argomenti che interessano noi giovani. Scopri cosa diciamo sugli argomenti e condividi la tua opinione con noi! Non vediamo l'ora di confrontarci con te!",
				},
				"home_cta": {
					"title1": "La tua",
					"title2": "conta!",
					"voice": "voce",
					"description": "Ora vogliamo sapere cosa hai da dire sugli argomenti! Suggerimenti di argomenti, domande o suggerimenti? Scrivici!",
					"action1": "Scrivici",
					"action2": "Seguici",
				},
				"blog": {
					"description": "Qui puoi trovare tutti i nostri post. Affrontiamo argomenti che interessano noi giovani. Scopri cosa diciamo sugli argomenti e condividi la tua opinione con noi! Non vediamo l'ora di confrontarci con te!",
					"older_posts": "Post precedenti",
					"recent_posts": "Post recenti",
				},
				"about": {
					"title": "Su di noi",
					"description": "Il progetto mira a rafforzare la fiducia dei giovani nella cooperazione europea, nella solidarietà e nella pace sociale.",
				},
				"contact": {
					"title": "Contatto",
					"description": "Hai domande, suggerimenti o semplicemente vuoi dirci qualcosa? Scrivici!",
					"form": {
						"name": "Nome",
						"email": "Email",
						"message": "Messaggio",
						"submit": "Invia",
					},
					"success": "Grazie per il tuo messaggio! Ti risponderemo al più presto.",
					"error": "Oops, qualcosa è andato storto. Riprova o scrivici una email a: youngvoices@villavigoni.eu",
				},
				"seo": {
					"home": {
						"title": "Home",
						"description": "Un'iniziativa di giovani per giovani. Usiamo la nostra voce per sollecitare gli argomenti che ci interessano di più.",
					},
				}
			},
		},
	}, // { [translation_group1]: { [locale1]: {}, ... } }
	routes: {
		en: {
			"ueber-uns": "about",
			home: "en",
			impressum: "impressum",
			"privacy-policy": "privacy-policy",
			"kontakt": "contact",
		},
		it: {
			"ueber-uns": "su-di-noi",
			home: "it",
			impressum: "impressum",
			"privacy-policy": "privacy-policy",
			"kontakt": "contatto",
		},
	}, // { [secondary_locale1]: { about: "about-translated", ... } }
})