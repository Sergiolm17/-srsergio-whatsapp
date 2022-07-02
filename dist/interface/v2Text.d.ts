export declare module Text {
    interface ReqButton {
        from: string;
        to: string[];
        message: string;
    }
    interface RootObject {
        token: string;
        instanceid: string;
        message: string;
        numbers: string[];
    }
}
export declare module ResText {
    interface Key {
        remoteJid: string;
        fromMe: boolean;
        id: string;
    }
    interface ExtendedTextMessage {
        text: string;
    }
    interface Message {
        extendedTextMessage: ExtendedTextMessage;
    }
    interface Response {
        key: Key;
        message: Message;
        messageTimestamp: string;
        status: string;
    }
    interface RootObject {
        response: Response[];
        status: string;
    }
}
