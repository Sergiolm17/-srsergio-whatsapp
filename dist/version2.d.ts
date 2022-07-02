import { Button, ResButton } from "./interface/v2Button";
import { ResText, Text } from "./interface/v2Text";
export declare class ClientV2 {
    private token;
    constructor(token: string);
    button(data: Button.ReqButton): Promise<ResButton.RootObject>;
    text(data: Text.RootObject): Promise<ResText.RootObject>;
}
