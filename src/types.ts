import { formations } from "./formations";
export type Player = {
    name: string;
    age: number;
    photo: string;
    id: number;
};

export type PlayerListPrpos = {
    children?: React.ReactNode;
};

export type formationType = keyof typeof formations;

export type ResponseItem = {
    player: Player;
};

export type ResponseData = {
    response: ResponseItem[];
};
