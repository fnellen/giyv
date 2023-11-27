export default interface Category {
    id: number;
    attributes: {
        Name: string;
        description: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        localizations: {
            data: Category[];
        }
    };
}