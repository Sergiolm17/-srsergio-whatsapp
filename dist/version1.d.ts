import { Message, sendMessage } from "./interface/v1interface";
export declare class Client {
    private token;
    constructor(token: string);
    text(data: sendMessage): Promise<Message>;
    sticker(data: sendMessage): Promise<Message>;
    image(data: sendMessage): Promise<Message>;
    video(data: sendMessage): Promise<Message>;
}
