import React from "react";
import classes from "./FormationItem.module.css";
import { useState } from "react";
import classNames from "classnames";
import { Player } from "../types";
import { useContext } from "react";
import { formationContext } from "../pages/CreateFormation";
type Props = {
    index: number;
    position: string;
};

const FormationItem: React.FC<Props> = ({ index, position }) => {
    const [isSelectiable, setIsSelectiable] = useState(true);
    const [selectedPlayerOfItem, setSelectedPlayerOfItem] = useState<
        Player | undefined
    >();
    const { selectedPlayer, setSelectedPlayer } = useContext(formationContext);
    console.log(selectedPlayer);

    const onClickHandler = () => {
        if (selectedPlayer === undefined && !isSelectiable) {
            setIsSelectiable(true);
        }

        if (selectedPlayer === undefined && isSelectiable) {
            alert("Please chose a baller !");
            return;
        }

        if (isSelectiable) {
            setIsSelectiable(false);
            setSelectedPlayerOfItem(selectedPlayer);
            setSelectedPlayer(undefined);
        } else {
            setIsSelectiable(true);
            setSelectedPlayerOfItem(undefined);
        }
    };

    return (
        <div
            onClick={onClickHandler}
            key={index}
            className={classNames(classes.player, {
                [classes.playerSelectiable]: isSelectiable,
            })}
        >
            {!isSelectiable && <img src={selectedPlayerOfItem?.photo} alt="" />}
            {position}
        </div>
    );
};

export default FormationItem;
