export declare module Text {
    export interface RootObject {
        token: string;
        instanceid: string;
        message: string;
        numbers: string[];
    }
}

export declare module ResText {
    export interface Key {
        remoteJid: string;
        fromMe: boolean;
        id: string;
    }

    export interface ExtendedTextMessage {
        text: string;
    }

    export interface Message {
        extendedTextMessage: ExtendedTextMessage;
    }

    export interface Response {
        key: Key;
        message: Message;
        messageTimestamp: string;
        status: string;
    }

    export interface RootObject {
        response: Response[];
    }
}
