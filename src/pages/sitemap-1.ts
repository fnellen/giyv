import qs from "qs";
import type { APIRoute } from "astro";
import { SITE_URL } from "../config";
import fetchApi from "../lib/strapi";
import type Article from "../interfaces/article";
import { l } from "astro-i18n";

export const GET: APIRoute = async () => {
    try {
        const query = qs.stringify({
            populate: {
                featuredImage: {
                    fields: ["name", "width", "height", "url", "alternativeText"],
                },
                instagramPost: {
                    populate: {
                        images: {
                            fields: ["url", "name", "width", "height", "alternativeText"],
                        },
                    },
                },
                category: {
                    populate: {
                        fields: ["Name"],
                    },
                },
                seo: {
                    populate: "*",
                },
                localizations: {
                    populate: "*",
                },
                group: {
                    populate: {
                        authors: {
                            populate: {
                                bioImage: {
                                    fields: ["url", "name", "width", "height", "alternativeText"],
                                },
                            },
                        },
                    },
                },
            }
        });
        const articles = await fetchApi<Article[]>({
            endpoint: "articles?locale=all&",
            wrappedByKey: "data",
            query: query,
        });

        // Initialize sitemap XML content
        let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
                xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
                xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

        // Iterate through each article and generate sitemap entries
        articles.forEach((article) => {
            let xhtml = '';
            if (article.attributes.localizations.data) {
                article.attributes.localizations.data.forEach((localization) => {
                    xhtml += `<xhtml:link rel="alternate" hreflang="${localization.attributes.locale}" href="${SITE_URL}${l(`/blog/${localization.attributes.slug}`, undefined, {
                        targetLocale: localization.attributes.locale,
                    })}"/>`;
                });
            }
            // Add the lastmod
            xhtml += `<lastmod>${new Date(article.attributes.updatedAt).toISOString()}</lastmod>`;

            // Add the Images
            xhtml += `<image:image>
                <image:loc>${article.attributes.featuredImage.data.attributes.url}</image:loc>
                <image:caption>${article.attributes.featuredImage.data.attributes.alternativeText}</image:caption>
                `;
            xhtml += `</image:image>`;
            // Add the news
            xhtml += `<news:news>
                <news:publication>
                    <news:name>German-Italian Young Voices</news:name>
                    <news:language>${article.attributes.locale}</news:language>
                </news:publication>
                <news:publication_date>${new Date(article.attributes.publishedAt).toISOString()}</news:publication_date>
                <news:title>${article.attributes.title}</news:title>
                <news:keywords>${article.attributes.seo.keywords}</news:keywords>
                <news:genres>Blog</news:genres>
                <news:stock_tickers>Blog</news:stock_tickers>
                `;
            xhtml += `</news:news>`;

            sitemap += `<url><loc>${SITE_URL}${l(`/blog/${article.attributes.slug}`, undefined, {
                targetLocale: article.attributes.locale,
            })}</loc>${xhtml}</url>`;
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
