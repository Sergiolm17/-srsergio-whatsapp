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

export interface Step {
    name: string;
    value: number;
}

export interface Measure {
    name: string;
    time: number;
}

export interface Message {
    status: string;
    steps: Step[];
    total: number;
    validPhoneNumbers: number;
    numbersFilter: number;
    invalidPhoneNumbers: any[];
    campaingid: string;
    measure: Measure[];
    percentage: number;
    instanceid: string;
}

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
