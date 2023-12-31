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
				},
			},
			en: {
				"not_found": {
					"404": "Nothing found ... 404",
					"desc_1": "The page you're looking for doesn't exist. Return to the blog or check out the latest posts.",
					"desc_2": "While you're at it, follow us on Instagram!",
					"desc_3": "If you found an error, feel free to send us an email.",
				},
			},
			it: {
				"not_found": {
					"404": "Niente trovato ... 404",
					"desc_1": "La pagina che stai cercando non esiste. Torna al blog o dai un'occhiata agli ultimi post.",
					"desc_2": "Mentre ci sei, seguici su Instagram!",
					"desc_3": "Se hai trovato un errore, non esitare a inviarci una email.",
				},
			},
		},
	}, // { [translation_group1]: { [locale1]: {}, ... } }
	routes: {
		en: {
			about: "about",
			home: "en",
			impressum: "impressum",
			"privacy-policy": "privacy-policy",
		},
		it: {
			about: "su-di-noi",
			home: "it",
			impressum: "impressum",
			"privacy-policy": "privacy-policy",
		},
	}, // { [secondary_locale1]: { about: "about-translated", ... } }
})