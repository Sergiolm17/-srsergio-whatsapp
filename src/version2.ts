import axios from "axios";
import { config } from "./config";
import { Button, ResButton } from "./interface/v2Button";
import { ResText, Text } from "./interface/v2Text";

export class ClientV2 {
    constructor(private token: string) {
        this.token = token;
    }
    public async button(data: Button.ReqButton): Promise<ResButton.RootObject> {
        const body = Object.assign(
            {
                message: data.message,
                footer: data.footer,
                buttons: data.buttons.map((item) => formatButton(item)),
            },
            createObject(data, this.token)
        );
        const { data: resData } = await axios.post(
            config.api.url + "/message/sendButton",
            body
        );
        return resData;
    }
    public async text(data: Text.ReqButton): Promise<ResText.RootObject> {
        const body = Object.assign(
            {
                message: data.message,
            },
            createObject(data, this.token)
        );
        const response = await axios.post(
            config.api.url + "/message/sendText",
            body
        );
        return response.data;
    }
}
function createObject(data: any, token: string) {
    return {
        token: token,
        instanceid: data.from,
        numbers: data.to,
    };
}

const formatButton = (data: Button.Button) => {
    switch (data.type) {
        case "replyButton":
            return {
                type: "replyButton",
                id: data.title,
                title: data.payload,
            };
        case "urlButton":
            return {
                type: "urlButton",
                title: data.title,
                payload: data.payload,
            };
        case "callButton":
            return {
                type: "callButton",
                title: data.title,
                payload: data.payload,
            };
        default:
            return {
                type: "replyButton",
                id: data.id,
                title: data.title,
                payload: data.payload,
            };
    }
};
