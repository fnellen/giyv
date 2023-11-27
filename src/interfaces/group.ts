import type Author from "./author";

export default interface Group {
    id: number;
    attributes: {
        Name: string;
        Description: number;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        slug: string;
        authors: Author[];
    }
}