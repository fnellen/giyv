import type Author from "./author";
import type Image from "./image";

export default interface Group {
    id: number;
    attributes: {
        Name: string;
        Description: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        slug: string;
        featuredImage: {
            data: Image;
        },
        authors: {
            data: Author[];
        };
    }
}