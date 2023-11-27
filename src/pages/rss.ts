import rss from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";
//import MarkdownIt from "markdown-it";
import { l } from "astro-i18n";
import type { APIRoute } from "astro";
//const parser = new MarkdownIt();

export const GET: APIRoute = async ({ request }) => {
  const articles = [];
  return rss({
    title: "Federico Nellen's Blog",
    description: "Personal blog with articles about web development and more.",
    site: "https://www.federico-nellen.de",
    items: articles.map((post) => ({
      title: post.attributes.Title,
      pubDate: post.attributes.publishedAt
        ? new Date(post.attributes.publishedAt)
        : new Date(),
      description: post.attributes.Description,
      //content: sanitizeHtml(parser.render(post.attributes.Content)),
      link: l(`/blog/${post.attributes.slug}/`, undefined, {
        targetLocale: post.attributes.locale,
      }),
      customData: `<language>${post.attributes.locale}</language>`,
    })),
  });
}
