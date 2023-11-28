import type Image from './image';
export default interface InstagramPost {
    id: number;
    url: string;
    caption: [
        {
            type: string;
            children: [
                {
                    type: string;
                    text: string;
                }
            ];
        }
    ];
    images: {
        data: Image[];
    };
}