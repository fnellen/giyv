import type Image from './image';
export default interface Author {
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