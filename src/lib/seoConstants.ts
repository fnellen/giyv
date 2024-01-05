import type SEOProps from "../interfaces/seoProps";
import { SITE_URL } from "../config";
import { astroI18n, l } from "astro-i18n";

export default function seoBlogPage(locale: string, locales: string[], url: string): SEOProps {
    return ({
        title: "Blog",
        description: "Blog posts about european union, politics, and more.",
        image:
            "https://storage.googleapis.com/bucket.giyv.eu/German_Italian_Young_Voices_b79e2c9a55/German_Italian_Young_Voices_b79e2c9a55.png",
        nofollow: false,
        noindex: false,
        ogBasic: {
            title: "Blog",
            image:
                "https://storage.googleapis.com/bucket.giyv.eu/German_Italian_Young_Voices_b79e2c9a55/German_Italian_Young_Voices_b79e2c9a55.png",
            url: SITE_URL + "/" + url,
            type: "website",
        },
        ogOptional: {
            description: "Blog posts about european union, politics, and more.",
            locale: locale,
            localeAlternate: locales,
        },
        ogArticle: {},
        twitter: {
            title: "Blog",
            description: "Blog posts about european union, politics, and more.",
            image:
                "https://storage.googleapis.com/bucket.giyv.eu/German_Italian_Young_Voices_b79e2c9a55/German_Italian_Young_Voices_b79e2c9a55.png",
            card: "summary_large_image",
            site: "@giyv_eu",
        },
    }) as SEOProps;
};