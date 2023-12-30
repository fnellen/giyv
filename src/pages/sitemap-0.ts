import type { APIRoute } from "astro";
import { SITE_URL } from "../config";
import fetchApi from "../lib/strapi";
import type Article from "../interfaces/article";

export const GET: APIRoute = async () => {
    try {
        const articles = await fetchApi<Article[]>({
            endpoint: "articles",
            wrappedByKey: "data",
        });

        // Initialize sitemap XML content
        let sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

        // Iterate through each article and generate sitemap entries
        articles.forEach((article) => {
            let xhtml = '';
            if (article.attributes.localizations && article.attributes.localizations.data) {
                article.attributes.localizations.data.forEach((localization) => {
                    xhtml += `<xhtml:link rel="alternate" hreflang="${localization.attributes.locale}" href="${SITE_URL}/${localization.attributes.slug.replace(/\/$/, '')}"/>`;
                });
            }

            sitemap += `<url><loc>${SITE_URL}/${article.attributes.slug.replace(/\/$/, '')}</loc>${xhtml}</url>`;
        });

        // Close the sitemap XML content
        sitemap += '</urlset>';
        // Return sitemap XML content with appropriate headers
        return new Response(sitemap, {
            status: 200,
            headers: {
                'Content-Type': 'application/xml',
            },
        });
    } catch (error) {
        console.error("Error generating sitemap:", error);

        // Return an error response if there is an issue
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
};
