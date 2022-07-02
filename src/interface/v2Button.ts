export declare module Button {
    export interface ReqButton {
        from: string;
        to: string[];
        message: string;
        footer: string;
        buttons: Button[];
    }
    export interface Button {
        type: "replyButton" | "urlButton" | "callButton";
        id?: string;
        title?: string;
        payload?: string;
    }

    export interface RootObject {
        token: string;
        instanceid: string;
        numbers: string[];
        message: string;
        footer: string;
        buttons: Button[];
    }
}

export declare module ResButton {
    export interface Key {
        remoteJid: string;
        fromMe: boolean;
        id: string;
    }

    export interface QuickReplyButton {
        displayText: string;
        id: string;
    }

    export interface UrlButton {
        displayText: string;
        url: string;
    }

    export interface CallButton {
        displayText: string;
        phoneNumber: string;
    }

    export interface HydratedButton {
        quickReplyButton: QuickReplyButton;
        urlButton: UrlButton;
        callButton: CallButton;
    }

    export interface HydratedTemplate {
        hydratedContentText: string;
        hydratedFooterText: string;
        hydratedButtons: HydratedButton[];
    }

    export interface TemplateMessage {
        hydratedTemplate: HydratedTemplate;
    }

    export interface Message {
        templateMessage: TemplateMessage;
    }

    export interface Response {
        key: Key;
        message: Message;
        messageTimestamp: string;
        status: string;
    }

    export interface RootObject {
        response: Response[];
        status: string;
    }
}
