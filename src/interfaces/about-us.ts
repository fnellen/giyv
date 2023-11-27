import type Image from "./image";

export default interface AboutUs {
    id: number;
    attributes: {
        "createdAt": string;
        "updatedAt": string;
        "publishedAt": string;
        "title": string;
        "description": string;
        "locale": string;
        "image": {
            "data": Image;
        }
    };
}