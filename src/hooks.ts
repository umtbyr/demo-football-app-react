import { useEffect, useState } from "react";
import { useSearchStore } from "./store/store";
import { Player } from "./types";
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
    const playerItemOnClickHandler = (newPlayer: Player, index: number) => {
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
    };

    return playerItemOnClickHandler;
};
