import rss from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import { l } from "astro-i18n";
import type { APIRoute } from "astro";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from "../config";
import fetchApi from "../lib/strapi";
import type Article from "../interfaces/article";
const parser = new MarkdownIt();

export const GET: APIRoute = async () => {
  const articles = await fetchApi<Article[]>({
    endpoint: "articles?locale=all&",
    wrappedByKey: "data",
  });
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: SITE_URL,
    items: articles.map((post) => ({
      title: post.attributes.title,
      pubDate: post.attributes.publishedAt
        ? new Date(post.attributes.publishedAt)
        : new Date(),
      description: post.attributes.excerpt,
      content: sanitizeHtml(parser.render(post.attributes.content)),
      link: l(`/blog/${post.attributes.slug}/`, undefined, {
        targetLocale: post.attributes.locale,
      }),
      customData: `<language>${post.attributes.locale}</language>`,
    })),
  });
}
