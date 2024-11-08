import React from "react";
import classes from "./PlayerListItem.module.css";
import { useSearchStore } from "../store/store";
type Props = {
    children?: React.ReactNode;
    name: string;
    photo: string;
    id: number;
};

const UserPlayerItem: React.FC<Props> = ({ name, photo, id }) => {
    const removePlayer = useSearchStore(
        (state) => state.removePlayerFromPlayerList
    );
    const handleOnClickUserPlayer = (id: number) => {
        removePlayer(id);
    };

    return (
        <div
            className={classes.playercontainer}
            onClick={() => handleOnClickUserPlayer(id)}
        >
            <img src={photo} alt="" className={classes.playerimg} />
            <p className={classes.playername}>{name}</p>
        </div>
    );
};

export default UserPlayerItem;
