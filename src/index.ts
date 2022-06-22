import axios from "axios";
import { config } from "./config";
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

export class Client {
    constructor(private token: string) {
        this.token = token;
    }

    public async text(data: sendMessage): Promise<RootObject> {
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
    public async sticker(data: sendMessage): Promise<RootObject> {
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
    public async image(data: sendMessage): Promise<RootObject> {
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
    public async video(data: sendMessage): Promise<RootObject> {
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
