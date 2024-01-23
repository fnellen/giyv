import * as pagefind from "pagefind";
import fetchApi from "./strapi";
import type Article from "../interfaces/article";
import qs from "qs";
import { remark } from "remark";
import strip from "strip-markdown";

export default async function index() {
    // Create a Pagefind search index to work with
    const { index } = await pagefind.createIndex({
        rootSelector: "html",
        excludeSelectors: [],
        keepIndexUrl: false,
        verbose: false,
    });

    // Index all HTML files in a directory
    //@ts-ignore
    await index.addDirectory({
        path: "dist",
    });

    // Add extra content
    const query = qs.stringify({
        populate: {
            featuredImage: {
                fields: ["name", "width", "height", "url", "alternativeText"],
            },
            categories: {
                populate: "*",
            },
        },
    });

    const articles = await fetchApi<Article[]>({
        endpoint: "articles?locale=all&",
        wrappedByKey: "data",
        query: query,
    });

    async function processedRecords(): Promise<pagefind.CustomRecord[]> {
        const processedArticles = await Promise.all(
            articles.map(async (article) => {
                const content = await remark()
                    .use(strip)
                    .process(
                        article.attributes.title + " " +
                        article.attributes.excerpt + " " +
                        article.attributes.content,
                    );
                const processedContent = content.toString();

                return {
                    url: `${article.attributes.locale === "de" ? "" : article.attributes.locale
                        }/blog/${article.attributes.slug}/`,
                    content: processedContent,
                    language: article.attributes.locale,
                    meta: {
                        title: article.attributes.title,
                        image: article.attributes.featuredImage?.data.attributes.url
                            ? article.attributes.featuredImage?.data.attributes.url
                            : "https://storage.googleapis.com/bucket.giyv.eu/German_Italian_Young_Voices_b79e2c9a55/German_Italian_Young_Voices_b79e2c9a55.png",
                        image_alt:
                            article.attributes.featuredImage?.data.attributes
                                .alternativeText || "No alt text",
                    },
                    filters: {
                        tags: article.attributes.tags
                            ? article.attributes.tags.split(",")
                            : [],
                    },
                };
            }),
        );

        return processedArticles;
    }

    const data = await processedRecords();
    data.forEach((record) => {
        //@ts-ignore
        index.addCustomRecord(record);
    });

    // Or, write the index to disk
    //@ts-ignore
    await index.writeFiles({
        outputPath: "dist/client/pagefind",
    });

    await pagefind.close();
}
