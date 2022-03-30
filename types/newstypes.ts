export interface News {
    api_rate_limit?: number;
    title?: string;
    platform?: string;
    score?: number;
    genre?: string;
    editors_choice?: EditorsChoice;
}

export enum EditorsChoice {
    N = "N",
    Y = "Y",
}