interface sendMessage {
    from: string;
    to: string[];
    body?: string;
    url?: string;
    data?: any;
    gifPlayback?: boolean;
}
export declare class Client {
    private token;
    constructor(token: string);
    text(data: sendMessage): Promise<any>;
    sticker(data: sendMessage): Promise<any>;
    image(data: sendMessage): Promise<any>;
    video(data: sendMessage): Promise<any>;
}
export {};
