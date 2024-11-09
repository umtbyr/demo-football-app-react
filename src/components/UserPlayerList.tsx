import React from "react";
import { useSearchStore } from "../store/store";
import UserPlayerItem from "./UserPlayerItem";
import classes from "./UserPlayerList.module.css";
type Props = {
    children?: React.ReactNode;
};

const UserPlayerList: React.FC<Props> = () => {
    const userPlayerList = useSearchStore((state) => state.userPlayerList);

    return (
        <div className={classes.container}>
            <h1>Create Your dream team!</h1>
            <h3>Search all teams around the world and start your journey! </h3>
            <ul className={classes.userPlayerList}>
                {userPlayerList.map((player) => (
                    <li key={player.id}>
                        <UserPlayerItem
                            id={player.id}
                            name={player.name}
                            photo={player.photo}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserPlayerList;
