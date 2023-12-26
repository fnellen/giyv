import type Image from "./image";

export default interface Author {
    id: number;
    attributes: {
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        name: string;
        bio: string;
        locale: string;
        bioImage: {
            data: Image;
        }
    };
}