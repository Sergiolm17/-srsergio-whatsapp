export declare module Button {
    interface ReqButton {
        from: string;
        to: string[];
        message: string;
        footer: string;
        buttons: Button[];
    }
    interface Button {
        type: string;
        id: string;
        title?: string;
        payload?: string;
    }
    interface RootObject {
        token: string;
        instanceid: string;
        numbers: string[];
        message: string;
        footer: string;
        buttons: Button[];
    }
}
export declare module ResButton {
    interface Key {
        remoteJid: string;
        fromMe: boolean;
        id: string;
    }
    interface QuickReplyButton {
        displayText: string;
        id: string;
    }
    interface UrlButton {
        displayText: string;
        url: string;
    }
    interface CallButton {
        displayText: string;
        phoneNumber: string;
    }
    interface HydratedButton {
        quickReplyButton: QuickReplyButton;
        urlButton: UrlButton;
        callButton: CallButton;
    }
    interface HydratedTemplate {
        hydratedContentText: string;
        hydratedFooterText: string;
        hydratedButtons: HydratedButton[];
    }
    interface TemplateMessage {
        hydratedTemplate: HydratedTemplate;
    }
    interface Message {
        templateMessage: TemplateMessage;
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
