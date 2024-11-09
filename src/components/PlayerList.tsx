import React from "react";
import PlayerListItem from "./PlayerListItem";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getTeamPlayersAndStatistics } from "../http";
import ListRenderer from "./UI/ListRenderer";
import { ResponseData, PlayerListPrpos } from "../types";
import { useSetPlayerToList } from "../hooks";

const PlayerList: React.FC<PlayerListPrpos> = () => {
    const { teamId } = useParams();
    const { data } = useQuery<ResponseData>({
        queryKey: ["players-statistics", teamId],
        queryFn: () => getTeamPlayersAndStatistics(teamId as string),
        staleTime: 1000 * 60 * 5,
    });

    const PlayerList = data?.response || [];

    const addPlayerFn = useSetPlayerToList();

    return (
        <ListRenderer
            keyExtractor={(item) => item.player.id}
            data={PlayerList}
            renderFunction={(player, index) => (
                <PlayerListItem
                    onClickFn={addPlayerFn}
                    id={player.player.id}
                    index={index}
                    playerName={player.player.name}
                    playerAge={player.player.age}
                    playerImg={player.player.photo}
                />
            )}
        />
    );
};

export default PlayerList;
