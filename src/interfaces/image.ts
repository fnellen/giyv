export default interface Image {
    id: number;
    attributes: {
        "name": string;
        "width": number;
        "height": number;
        "url": string;
        "alternativeText": string;
    }
}