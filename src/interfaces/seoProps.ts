import type { TwitterCardType } from "astro-seo";

export default interface SEOProps {
    title: string;
    description: string;
    image: string;
    localizations?: Array<{ href: string; hrefLang: string }>;
    noindex: boolean;
    nofollow: boolean;
    ogBasic: {
        title: string;
        image: string;
        type: string;
        url: string;
    };
    ogOptional: {
        audio?: string;
        description?: string;
        determiner?: string;
        locale?: string;
        localeAlternate?: string[];
        siteName?: string;
        video?: string;
    };
    ogArticle: {
        publishedTime?: string;
        modifiedTime?: string;
        expirationTime?: string;
        author?: string[];
        section?: string;
        tags?: string[];
    };
    twitter: {
        card?: TwitterCardType,
        site?: string;
        creator?: string;
        title?: string;
        image?: string;
        imageAlt?: string;
        description?: string;
    };
    extend?: {
        link?: Array<{ prefetch: boolean } & HTMLLinkElement>;
        meta?: Array<{ name: string, content: string }>;
    };
}
