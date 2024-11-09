import classes from "./PlayerListItem.module.css";
import { Player } from "../types";
type PlayerListItemProps = {
    children?: React.ReactNode;
    playerName: string;
    playerImg: string;
    playerAge: number;
    index: number;
    id: number;
    onClickFn: (player: Player, index: number) => void;
};

const PlayerListItem: React.FC<PlayerListItemProps> = (props) => {
    return (
        <div
            className={classes.listItemContainer}
            onClick={() =>
                props.onClickFn(
                    {
                        name: props.playerName,
                        age: props.playerAge,
                        photo: props.playerImg,
                        id: props.id,
                    },
                    props.index
                )
            }
        >
            <img src={props.playerImg} alt="player-image" />
            <h4>{props.playerName}</h4>
            <p>{props.playerAge}</p>
        </div>
    );
};

export default PlayerListItem;
