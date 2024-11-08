import { create } from "zustand";
import { Player } from "../types";
type SearchStore = {
    searchData: string;
    currentTeamLogo: string | null;
    currentTeamName: string | null;
    playerIndex: number | null;
    setTeamLogo: (data: string) => void;
    setTeamName: (data: string) => void;
    setSearchData: (data: string) => void;
    setPlayerIndexData: (data: number) => void;
    addPlayerToPlayerList: (player: Player) => void;
    removePlayerFromPlayerList: (id: number) => void;
    userPlayerList: Player[];
};

export const useSearchStore = create<SearchStore>((set) => ({
    searchData: "",
    userPlayerList: [],
    playerIndex: null,
    currentTeamLogo: null,
    currentTeamName: null,
    setTeamName: (data) => set({ currentTeamName: data }),
    setPlayerIndexData: (data) => set({ playerIndex: data }),
    setSearchData: (data) => set({ searchData: data }),
    setTeamLogo: (data) => set({ currentTeamLogo: data }),
    addPlayerToPlayerList: (player) =>
        set((state) => ({ userPlayerList: [player, ...state.userPlayerList] })),
    removePlayerFromPlayerList: (id) =>
        set((state) => ({
            userPlayerList: state.userPlayerList.filter(
                (player) => player.id !== id
            ),
        })),
}));
