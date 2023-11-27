import type Image from "./image";

export default interface HeroSection {
    id: number;
    attributes: {
        "createdAt": string;
        "updatedAt": string;
        "publishedAt": string;
        "heroTitle": string;
        "heroDescription": string;
        "locale": string;
        "heroImage": {
            "data": Image;
        }
    }
};
