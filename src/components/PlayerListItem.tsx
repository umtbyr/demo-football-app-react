import classes from "./PlayerListItem.module.css";
import { useSearchStore } from "../store/store";
type PlayerListItemProps = {
    children?: React.ReactNode;
    playerName: string;
    playerImg: string;
    playerAge: number;
    index: number;
    id: number;
};

const PlayerListItem: React.FC<PlayerListItemProps> = (props) => {
    const setPlayerIndex = useSearchStore((state) => state.setPlayerIndexData);
    const setUserPlayerList = useSearchStore(
        (state) => state.addPlayerToPlayerList
    );
    const playerList = useSearchStore((state) => state.userPlayerList);
    const playerItemOnClickHandler = () => {
        setPlayerIndex(props.index);

        if (playerList.length + 1 === 11) {
            alert("You have already 11 players in your team.");
            return;
        }

        const isPlayerPicked = playerList.find(
            (player) => player.id === props.id
        );

        if (isPlayerPicked) {
            alert("You have already chosen this player!");
            return;
        }

        setUserPlayerList({
            name: props.playerName,
            age: props.playerAge,
            photo: props.playerImg,
            id: props.id,
        });
    };

    return (
        <div
            className={classes.listItemContainer}
            onClick={playerItemOnClickHandler}
        >
            <img src={props.playerImg} alt="player-image" />
            <h4>{props.playerName}</h4>
            <p>{props.playerAge}</p>
        </div>
    );
};

export default PlayerListItem;
