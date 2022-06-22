interface sendMessage {
    from: string;
    to: string[];
    body?: string;
    url?: string;
    data?: any;
    gifPlayback?: boolean;
}
export interface Commet {
    name: string;
    time: number;
}
export interface RootObject {
    status: string;
    total: number;
    validPhoneNumbers: number;
    numbersFilter: number;
    invalidPhoneNumbers: string[];
    campaingid: string;
    commets: Commet[];
    instanceid: string;
}
export declare class Client {
    private token;
    constructor(token: string);
    text(data: sendMessage): Promise<RootObject>;
    sticker(data: sendMessage): Promise<RootObject>;
    image(data: sendMessage): Promise<RootObject>;
    video(data: sendMessage): Promise<RootObject>;
}
export {};
