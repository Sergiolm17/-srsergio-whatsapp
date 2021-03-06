import axios from "axios";
import { config } from "./config";
import { Message, sendMessage } from "./interface/v1interface";

export class Client {
    constructor(private token: string) {
        this.token = token;
    }

    public async text(data: sendMessage): Promise<Message> {
        const body = Object.assign(
            {
                data: {
                    type: "text",
                    text: data.body,
                },
            },
            createObject(data, this.token)
        );
        const response = await axios.post(
            config.api.url + "/instance/send",
            body
        );
        return response.data;
    }
    public async sticker(data: sendMessage): Promise<Message> {
        const body = Object.assign(
            {
                data: {
                    type: "sticker",
                    url: data.url,
                },
            },
            createObject(data, this.token)
        );
        const response = await axios.post(
            config.api.url + "/instance/send",
            body
        );
        return response.data;
    }
    public async image(data: sendMessage): Promise<Message> {
        const body = Object.assign(
            {
                data: {
                    type: "image",
                    url: data.url,
                },
            },
            createObject(data, this.token)
        );
        const response = await axios.post(
            config.api.url + "/instance/send",
            body
        );
        return response.data;
    }
    public async video(data: sendMessage): Promise<Message> {
        const body = Object.assign(
            {
                data: {
                    gifPlayback: data.gifPlayback || true,
                    type: "video",
                    url: data.url,
                },
            },
            createObject(data, this.token)
        );
        const response = await axios.post(
            config.api.url + "/instance/send",
            body
        );
        return response.data;
    }
}
function createObject(data: sendMessage, token: string) {
    return {
        token: token,
        instanceid: data.from,
        numbers: data.to,
    };
}
