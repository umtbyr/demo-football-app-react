import React from "react";
import PlayerListItem from "./PlayerListItem";
import classes from "./PlayerList.module.css";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getTeamPlayersAndStatistics } from "../http";
type PlayerListPrpos = {
    children?: React.ReactNode;
};

type Player = {
    name: string;
    age: number;
    photo: string;
    id: number;
};

type ResponseItem = {
    player: Player;
};

type ResponseData = {
    response: ResponseItem[];
};
const PlayerList: React.FC<PlayerListPrpos> = () => {
    const { teamId } = useParams();

    const { data } = useQuery<ResponseData>({
        queryKey: ["players-statistics", teamId],
        queryFn: () => getTeamPlayersAndStatistics(teamId as string),
        staleTime: 1000 * 60 * 5,
    });

    const PlayerList = data?.response || [];

    return (
        <ul className={classes.list}>
            {PlayerList.map((item, index) => (
                <li key={item.player.id}>
                    <PlayerListItem
                        id={item.player.id}
                        index={index}
                        playerName={item.player.name}
                        playerAge={item.player.age}
                        playerImg={item.player.photo}
                    />
                </li>
            ))}
        </ul>
    );
};

export default PlayerList;
