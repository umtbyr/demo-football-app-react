import classes from "./PlayerListItem.module.css";
import classNames from "classnames";
import { useContext, useState } from "react";
import { formationContext } from "../pages/CreateFormation";
import { Player } from "../types";
type PlayerListItemProps = {
    children?: React.ReactNode;
    playerName: string;
    playerImg: string;
    playerAge: number;
    index: number;
    id: number;
    onClickFn?: (player: Player, index: number) => void;
};

const PlayerListItem: React.FC<PlayerListItemProps> = (props) => {
    const { setSelectedPlayer, selectedPlayersId, setSelectedPlayersId } =
        useContext(formationContext);

    const playerIsSelected = selectedPlayersId === props.id;

    const onClickHanlder = () => {
        setSelectedPlayersId(props.id);
        setSelectedPlayer({
            name: props.playerName,
            age: props.playerAge,
            photo: props.playerImg,
            id: props.id,
        });
        if (props.onClickFn) {
            props.onClickFn(
                {
                    name: props.playerName,
                    age: props.playerAge,
                    photo: props.playerImg,
                    id: props.id,
                } as Player,
                props.index
            );
        }
    };

    return (
        <div
            className={classNames(classes.listItemContainer, {
                [classes.isActive]: playerIsSelected,
            })}
            onClick={onClickHanlder}
        >
            <img src={props.playerImg} alt="player-image" />
            <h4>{props.playerName}</h4>
            <p>{props.playerAge}</p>
        </div>
    );
};

export default PlayerListItem;
