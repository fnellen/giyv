import type Image from "./image";
import type Seo from "./seo";

export default interface AboutUs {
    id: number;
    attributes: {
        "createdAt": string;
        "updatedAt": string;
        "publishedAt": string;
        "title": string;
        "excerpt": string;
        "content": string;
        "locale": string;
        seo: Seo;
        "featuredImage": {
            "data": Image;
        }
    };
}