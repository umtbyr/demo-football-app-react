import { useCallback, useEffect, useState } from "react";
import { useSearchStore } from "./store/store";
import { Player } from "./types";
import { useQuery } from "@tanstack/react-query";
import { getTeams } from "./http";
export const useMainHeaderScroll = () => {
    const [scrollingUp, setScrollingUp] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setScrollingUp(false);
            } else {
                setScrollingUp(true);
            }

            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return { scrollingUp };
};

export const useSetPlayerToList = () => {
    const setPlayerIndex = useSearchStore((state) => state.setPlayerIndexData);
    const setUserPlayerList = useSearchStore(
        (state) => state.addPlayerToPlayerList
    );
    const playerList = useSearchStore((state) => state.userPlayerList);

    const playerItemOnClickHandler = useCallback(
        (newPlayer: Player, index: number) => {
            setPlayerIndex(index);

            if (playerList.length + 1 === 11) {
                alert("You have already 11 players in your team.");
                return;
            }

            const isPlayerPicked = playerList.find(
                (player) => player.id === newPlayer.id
            );

            if (isPlayerPicked) {
                alert("You have already chosen this player!");
                return;
            }

            setUserPlayerList({
                name: newPlayer.name,
                age: newPlayer.age,
                photo: newPlayer.photo,
                id: newPlayer.id,
            });
        },
        [playerList, setPlayerIndex, setUserPlayerList]
    );

    return playerItemOnClickHandler;
};

export const useDebounceSearchAndSetToStore = <T extends ArrayLike<unknown>>(
    value: T,
    initialValue: T
) => {
    const [debouncedSearch, setDebouncedSearch] = useState<T>(initialValue);
    const setSearchData = useSearchStore((state) => state.setSearchData);

    const { isLoading } = useQuery({
        queryKey: ["teams", debouncedSearch],
        queryFn: () => getTeams(debouncedSearch),
        enabled: debouncedSearch.length > 2,
        staleTime: 1000 * 60 * 5,
    });
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedSearch(value);
            setSearchData(value);
            console.log(value);
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, [value]);

    return [isLoading, ]
};
