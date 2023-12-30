import * as pagefind from "pagefind";
import fetchApi from "./strapi";
import type Article from "../interfaces/article";
import qs from "qs";

export default async function index() {
    // Create a Pagefind search index to work with
    const { index } = await pagefind.createIndex({
        rootSelector: "html",
        excludeSelectors: [],
        keepIndexUrl: false,
        verbose: false,
        logfile: "debug.log"
    });

    // Index all HTML files in a directory
    await index.addDirectory({
        path: "dist"
    });

    // Add extra content
    const query = qs.stringify({
        populate: {
            featuredImage: {
                fields: ["url", "alternativeText"],
            },
            categories: {
                populate: "*",
            },
        },
    });

    const articles = await fetchApi<Article[]>({
        endpoint: "articles",
        wrappedByKey: "data",
        query: query,
    });

    const data: pagefind.CustomRecord[] = articles.flatMap((article) => ({
        url: `${article.attributes.locale == "de" ? "" : article.attributes.locale}/blog/${article.attributes.slug}/`,
        content: article.attributes.title + article.attributes.excerpt + article.attributes.content,
        language: article.attributes.locale,
        meta: {
            title: article.attributes.title,
            image: article.attributes.featuredImage.data.attributes.url,
            image_alt: article.attributes.featuredImage.data.attributes.alternativeText || "No alt text",
        },
        filters: {
            tags: article.attributes.tags ? article.attributes.tags.split(",") : [],
        }
    }));

    await data.forEach((record) => {
        index.addCustomRecord(record);
    });

    // Or, write the index to disk
    await index.writeFiles({
        outputPath: "dist/client/pagefind"
    });

    await pagefind.close();
}