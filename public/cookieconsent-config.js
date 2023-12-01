import "https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0-rc.17/dist/cookieconsent.umd.js";

// Enable dark mode
document.documentElement.classList.add("cc--darkmode");

CookieConsent.run({
  guiOptions: {
    consentModal: {
      layout: "box",
      position: "bottom right",
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: "box",
      position: "right",
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    social: {},
    analytics: {},
  },
  language: {
    default: "en",
    autoDetect: "browser",
    translations: {
      en: {
        consentModal: {
          title: "Hello traveller, it's cookie time!",
          description:
            "This website uses cookies to ensure you get the best experience on our platform. By continuing to use the site, you agree to our use of cookies.",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          showPreferencesBtn: "Manage preferences",
          footer:
            '<a href="/en/privacy-policy">Privacy Policy</a>\n<a href="/impressum">Impressum</a>',
        },
        preferencesModal: {
          title: "Consent Preferences Center",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Save preferences",
          closeIconLabel: "Close modal",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title: "Cookie Usage",
              description:
                "We use cookies to enhance your browsing experience and provide personalized content. ",
            },
            {
              title:
                'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                "These cookies are essential for the operation of our website. By using our site, you agree that we can place these types of cookies on your device.",
              linkedCategory: "necessary",
            },
            {
              title: "Analytics Cookies",
              description:
                "We use analytics cookies to gather information that helps us understand how our website is being used. By accepting these cookies, you assist us in improving and optimizing our site.",
              linkedCategory: "analytics",
            },
            {
              title: "Social Media Cookies",
              description:
                "We use social media cookies to enable you to share content with your friends and networks. By accepting these cookies, you are enabling us to provide you with the best experience and service.",
              linkedCategory: "social",
            },
            {
              title: "More information",
              description:
                'For any query in relation to my policy on cookies and your choices, please <a class="cc__link" href="mailto:youngvoices@villavigoni.eu">contact us</a>.',
            },
          ],
        },
      },
      it: {
        consentModal: {
          title: "Ciao viaggiatore, è tempo di biscotti!",
          description:
            "Questo sito web utilizza i cookie per garantire la migliore esperienza possibile sulla nostra piattaforma. Continuando a utilizzare il sito, acconsenti all'uso dei cookie.",
          acceptAllBtn: "Accetta tutto",
          acceptNecessaryBtn: "Rifiuta tutto",
          showPreferencesBtn: "Gestisci preferenze",
          footer:
            '<a href="/it/privacy-policy">Informativa sulla privacy</a>\n<a href="/it/impressum">Impressum</a>',
        },
        preferencesModal: {
          title: "Centro preferenze per il consenso",
          acceptAllBtn: "Accetta tutto",
          acceptNecessaryBtn: "Rifiuta tutto",
          savePreferencesBtn: "Salva le preferenze",
          closeIconLabel: "Chiudi la finestra",
          serviceCounterLabel: "Servizi",
          sections: [
            {
              title: "Utilizzo dei Cookie",
              description:
                "Utilizzando questo sito web, acconsenti all'uso dei cookie. Utilizziamo i cookie per migliorare la tua esperienza di navigazione e fornire contenuti personalizzati.",
            },
            {
              title:
                'Cookie Strettamente Necessari <span class="pm__badge">Sempre Attivati</span>',
              description:
                "Questi cookie sono essenziali per il funzionamento del nostro sito web. Utilizzando il nostro sito, accetti che possiamo collocare questi tipi di cookie sul tuo dispositivo.",
              linkedCategory: "necessary",
            },
            {
              title: "Cookie Analitici",
              description:
                "Utilizziamo cookie di analisi per raccogliere informazioni che ci aiutano a capire come viene utilizzato il nostro sito web. Accettando questi cookie, ci aiuti a migliorare e ottimizzare il nostro sito.",
              linkedCategory: "analytics",
            },
            {
              title: "Cookie Social Media",
              description:
                "Utilizziamo i cookie dei social media per consentirti di condividere contenuti con i tuoi amici e le tue reti. Accettando questi cookie, ci permetti di offrirti la migliore esperienza e il miglior servizio.",
              linkedCategory: "social",
            },
            {
              title: "Ulteriori informazioni",
              description:
                'Per eventuali domande in relazione alla nostra politica sui cookie e alle tue scelte, per favore <a class="cc__link" href="mailto:youngvoices@villavigoni.eu">contattaci</a>.',
            },
          ],
        },
      },
      de: {
        consentModal: {
          title: "Hallo Reisende, es ist Kekszeit!",
          description:
            " Diese Website verwendet Cookies, um sicherzustellen, dass Sie die bestmögliche Erfahrung auf unserer Plattform haben. Durch die weitere Nutzung der Website stimmen Sie der Verwendung von Cookies zu.",
          acceptAllBtn: "Alle akzeptieren",
          acceptNecessaryBtn: "Alle ablehnen",
          showPreferencesBtn: "Einstellungen verwalten",
          footer:
            '<a href="/privacy-policy">Datenschutz</a>\n<a href="/impressum">Impressum</a>',
        },
        preferencesModal: {
          title: "Präferenzen für die Zustimmung",
          acceptAllBtn: "Alle akzeptieren",
          acceptNecessaryBtn: "Alle ablehnen",
          savePreferencesBtn: "Einstellungen speichern",
          closeIconLabel: "Modal schließen",
          serviceCounterLabel: "Dienstleistungen",
          sections: [
            {
              title: "Verwendung von Cookies",
              description:
                "Durch die Nutzung dieser Website erklären Sie sich mit der Verwendung von Cookies einverstanden. Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern und personalisierte Inhalte bereitzustellen.",
            },
            {
              title:
                'Streng Notwendige Cookies <span class="pm__badge">Immer Aktiviert</span>',
              description:
                "Diese Cookies sind für den Betrieb unserer Website unerlässlich. Durch die Nutzung unserer Website stimmen Sie zu, dass wir diese Art von Cookies auf Ihrem Gerät platzieren können.",
              linkedCategory: "necessary",
            },
            {
              title: "Analytische Cookies",
              description:
                "Wir verwenden Analyse-Cookies, um Informationen zu sammeln, die uns helfen zu verstehen, wie unsere Website genutzt wird. Durch die Annahme dieser Cookies unterstützen Sie uns bei der Verbesserung und Optimierung unserer Website.",
              linkedCategory: "analytics",
            },
            {
              title: "Social Media Cookies",
              description:
                "Wir verwenden Social Media Cookies, um Ihnen das Teilen von Inhalten mit Ihren Freunden und Netzwerken zu ermöglichen. Durch die Annahme dieser Cookies ermöglichen Sie uns, Ihnen das bestmögliche Erlebnis und den bestmöglichen Service zu bieten.",
              linkedCategory: "social",
            },
            {
              title: "Weitere Informationen",
              description:
                'Für Anfragen im Zusammenhang mit meiner Cookie-Richtlinie und Ihren Auswahlmöglichkeiten <a class="cc__link" href="mailto:youngvoices@villavigoni.eu">kontaktieren Sie uns </a> bitte.',
            },
          ],
        },
      },
    },
  },
});
