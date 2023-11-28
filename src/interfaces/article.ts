import type Category from "./category";
import type Image from "./image";
import type Node from "@strapi/blocks-react-renderer";

export default interface Article {
    id: number;
    attributes: {
        title: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        content: string;
        excerpt: string;
        slug: string;
        contentId: string;
        featuredImage: {
            data: Image;
        },
        localizations: {
            data: Article[];
        };
        category: {
            data: Category;
        };
        group: {

        };
    };
};
