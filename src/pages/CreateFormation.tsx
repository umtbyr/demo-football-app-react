import React from "react";
import classes from "./CreateFormation.module.css";
import ListRenderer from "../components/UI/ListRenderer";
import { useSearchStore } from "../store/store";
import PlayerListItem from "../components/PlayerListItem";
import Formations from "../components/Formations";
import FormationsRenderer from "../components/FormationsRenderer";
import { Player } from "../types";
import { useState } from "react";
type Props = {
    children?: React.ReactNode;
};

const CreateFormation: React.FC<Props> = (props) => {
    const playerList = useSearchStore((state) => state.userPlayerList);
    const [selectedPlayer, setSelectedPlayer] = useState<Player>();
    const onPlayerListItemClickHandler = (player: Player, index: number) => {
        setSelectedPlayer(player);
    };
    return (
        <main className={classes.container}>
            <section className={classes.headerSection}>
                <header>
                    <Formations />
                </header>
            </section>
            <aside className={classes.playerListSection}>
                <h3>Your Players</h3>
                <ListRenderer
                    keyExtractor={(item) => item.id}
                    data={playerList}
                    renderFunction={(player, index) => (
                        <PlayerListItem
                            onClickFn={onPlayerListItemClickHandler}
                            playerName={player.name}
                            playerAge={player.age}
                            playerImg={player.photo}
                            id={player.id}
                            index={index}
                        />
                    )}
                />
            </aside>
            <section className={classes.formationSection}>
                <div>
                    <FormationsRenderer selectedPlayer={selectedPlayer} />
                </div>
            </section>
        </main>
    );
};

export default CreateFormation;
