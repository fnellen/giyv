import qs from "qs";
import type Article from "../interfaces/article";
import fetchApi from "../lib/strapi";

export function isPreferredArticle(
  article: Article,
  locale: string,
  uniqueContentIds: Set<string>
): boolean {
  let localizations: string[] = []
  localizations.push(article.attributes.locale)
  if (article.attributes.localizations) {
    article.attributes.localizations.data.map((l) => localizations.push(l.attributes.locale));
  }
  if (localizations.length > 0 && localizations.includes(locale)) {
    return !uniqueContentIds.has(article.attributes.contentId) && article.attributes.locale === locale;
  } else {
    if (!uniqueContentIds.has(article.attributes.contentId)) {
      if (
        localizations.length > 0 && localizations.includes("en")
      ) {
        return !uniqueContentIds.has(article.attributes.contentId) && article.attributes.locale === "en";
      } else {
        return !uniqueContentIds.has(article.attributes.contentId);
      }
    }
  }
  return false;
}


export async function getI18nBlogArticles(locale?: string): Promise<Article[]> {
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
    },
  });

  let data_all = await fetchApi<Article[]>({
    endpoint: 'articles?locale=all&',
    wrappedByKey: 'data',
    query: query,
  });

  const uniqueSlugs = new Set<string>();
  if (locale) {
    data_all = data_all.filter((article) => isPreferredArticle(article, locale, uniqueSlugs));
  }
  const newArticles = data_all
    .sort((a, b) => {
      return new Date(b.attributes.publishedAt).getTime() - new Date(a.attributes.publishedAt).getTime();
    });
  return newArticles;
}
