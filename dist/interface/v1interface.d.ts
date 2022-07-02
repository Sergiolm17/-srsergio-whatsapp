export interface sendMessage {
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
    campaingid: string;
    measure: Measure[];
    percentage: number;
    instanceid: string;
}
