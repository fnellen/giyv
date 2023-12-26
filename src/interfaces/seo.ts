interface ImageFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null | string;
    size: number;
    width: number;
    height: number;
}

interface ImageAttributes {
    name: string;
    alternativeText: string;
    caption: null | string;
    width: number;
    height: number;
    formats: {
        large: ImageFormat;
        small: ImageFormat;
        medium: ImageFormat;
        thumbnail: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: null | string;
    createdAt: string;
    updatedAt: string;
}

interface MetaImage {
    data: {
        id: number;
        attributes: ImageAttributes;
    };
}

interface MetaSocialItem {
    id: number;
    socialNetwork: string;
    title: string;
    description: string;
}

export default interface Seo {
    id: number;
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    metaRobots: string;
    structuredData: string;
    canonicalUrl: string;
    metaViewport: string;
    metaImage: MetaImage;
    metaSocial: MetaSocialItem[];
}