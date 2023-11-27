import type Category from "./category";
import type Image from "./image";
/**
 * http://localhost:1337/api/articles?populate[featuredImage][fields][0]=name&populate[featuredImage][fields][1]=width&populate[featuredImage][fields][2]=height&populate[featuredImage][fields][3]=url&populate[featuredImage][fields][4]=alternativeText&populate[instagramPost][populate][images][fields][0]=url&populate[instagramPost][populate][images][fields][1]=name&populate[instagramPost][populate][images][fields][2]=width&populate[instagramPost][populate][images][fields][3]=height&populate[instagramPost][populate][images][fields][4]=alternativeText&populate[category]=*&populate[group][populate][authors][populate][bioImage][fields][0]=url&populate[group][populate][authors][populate][bioImage][fields][1]=name&populate[group][populate][authors][populate][bioImage][fields][2]=width&populate[group][populate][authors][populate][bioImage][fields][3]=height&populate[group][populate][authors][populate][bioImage][fields][4]=alternativeText
 */

export default interface Article {
    id: number;
    attributes: {
        title: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        content: [
            {
                type: string;
                level: number;
                children: [
                    {
                        text: string;
                    }
                ];
            }
        ];
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
