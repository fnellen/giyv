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
}