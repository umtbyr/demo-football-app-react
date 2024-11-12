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


export interface FormationContextType {
    selectedPlayer: Player | undefined;
    setSelectedPlayer: (player: Player | undefined) => void;
    formationType: formationType;
    setFormationType: (formation: formationType) => void;
    selectedPlayersId: number | null;
    setSelectedPlayersId: (id: number) => void;
}