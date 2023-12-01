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
	translations: {}, // { [translation_group1]: { [locale1]: {}, ... } }
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