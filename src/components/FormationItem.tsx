import React from "react";
import classes from "./FormationItem.module.css";
import { useState } from "react";
import classNames from "classnames";
import { Player } from "../types";
type Props = {
    index: number;
    position: string;
    selectedPlayer: Player | undefined;
};

const FormationItem: React.FC<Props> = ({
    index,
    position,
    selectedPlayer,
}) => {
    const [isSelectiable, setIsSelectiable] = useState(true);

    const onClickHandler = (player?: Player) => {
        setIsSelectiable(false);
        console.log(selectedPlayer);
    };

    return (
        <div
            onClick={() => onClickHandler(selectedPlayer)}
            key={index}
            className={classNames(classes.player, {
                [classes.playerSelectiable]: isSelectiable,
            })}
        >
            {!isSelectiable && <img src={selectedPlayer?.photo} alt="" />}
            {position}
        </div>
    );
};

export default FormationItem;
