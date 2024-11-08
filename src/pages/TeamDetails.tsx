import React from "react";
import TeamDeatailsHeader from "../components/TeamDetailsHeader";
import classes from "./TeamDetails.module.css";
import PlayerList from "../components/PlayerList";
import PlayerInfoTable from "../components/PlayerInfoTable";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getTeamPlayersAndStatistics } from "../http";
import { useSearchStore } from "../store/store";
useSearchStore;
const TeamDeatails: React.FC = () => {
    const { teamId } = useParams();
    const search = useSearchStore((state) => state.searchData);
    console.log(search);

    useQuery({
        queryKey: ["players-statistics", teamId],
        queryFn: () => getTeamPlayersAndStatistics(teamId as string),
        staleTime: 1000 * 60 * 5,
    });

    return (
        <div className={classes.mainContentContainer}>
            <TeamDeatailsHeader className={classes.header} />
            <PlayerList />
            <PlayerInfoTable />
        </div>
    );
};

export default TeamDeatails;
