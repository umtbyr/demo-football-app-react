import { create } from "zustand";
import { Player } from "../types";
import UserPlayerList from "../components/UserPlayerList";
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
    userPlayerList:
        localStorage.getItem("playerlist") !== undefined
            ? JSON.parse(localStorage.getItem("playerlist") || "[]")
            : [],
    playerIndex: null,
    currentTeamLogo: null,
    currentTeamName: null,
    setTeamName: (data) => set({ currentTeamName: data }),
    setPlayerIndexData: (data) => set({ playerIndex: data }),
    setSearchData: (data) => set({ searchData: data }),
    setTeamLogo: (data) => set({ currentTeamLogo: data }),
    addPlayerToPlayerList: (player) => {
        set((state) => {
            const updatedPlayerList = [player, ...state.userPlayerList];
            localStorage.setItem(
                "playerlist",
                JSON.stringify(updatedPlayerList)
            );
            return { userPlayerList: updatedPlayerList };
        });
    },
    removePlayerFromPlayerList: (id) => {
        set((state) => {
            const updatedPlayerList = state.userPlayerList.filter(
                (player) => player.id !== id
            );
            localStorage.setItem(
                "playerlist",
                JSON.stringify(updatedPlayerList)
            );
            return {
                userPlayerList: updatedPlayerList,
            };
        });
    },
}));
