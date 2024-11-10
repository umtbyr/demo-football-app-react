import classes from "./CreateFormation.module.css";
import ListRenderer from "../components/UI/ListRenderer";
import { useSearchStore } from "../store/store";
import PlayerListItem from "../components/PlayerListItem";
import Formations from "../components/Formations";
import FormationsRenderer from "../components/FormationsRenderer";
import { Player } from "../types";
import { useState } from "react";
import { createContext } from "react";
import { formationType } from "../types";
type Props = {
    children?: React.ReactNode;
};

interface FormationContextType {
    selectedPlayer: Player | undefined;
    setSelectedPlayer: (player: Player | undefined) => void;
    formationType: formationType;
    setFormationType: (formation: formationType) => void;
    selectedPlayersId: number | null;
    setSelectedPlayersId: (id: number) => void;
}

export const formationContext = createContext<FormationContextType>({
    selectedPlayer: undefined,
    setSelectedPlayer: (player: Player | undefined) => {},
    formationType: "4-4-2",
    setFormationType: (type: formationType) => {},
    selectedPlayersId: null,
    setSelectedPlayersId: (id: number) => {},
});

const CreateFormation: React.FC<Props> = (props) => {
    const playerList = useSearchStore((state) => state.userPlayerList);
    const [selectedPlayer, setSelectedPlayer] = useState<Player | undefined>(
        undefined
    );
    const [formationType, setFormationType] = useState<formationType>("4-4-2");
    const [selectedPlayersId, setSelectedPlayersId] = useState(-1);

    const formationCtxValue = {
        selectedPlayer: selectedPlayer,
        setSelectedPlayer: setSelectedPlayer,
        formationType: formationType,
        setFormationType: setFormationType,
        selectedPlayersId: selectedPlayersId,
        setSelectedPlayersId: setSelectedPlayersId,
    };

    return (
        <formationContext.Provider value={formationCtxValue}>
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
                        <FormationsRenderer />
                    </div>
                </section>
            </main>
        </formationContext.Provider>
    );
};

export default CreateFormation;
