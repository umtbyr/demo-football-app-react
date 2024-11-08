import React from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import classes from "./PlayerInfoTable.module.css";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getTeamPlayersAndStatistics } from "../http";
import { useSearchStore } from "../store/store";
type PlayerInfoTable = {
    children?: React.ReactNode;
};

type Games = {
    position: string;
    rating: string | null;
};

type Player = {
    id: number;
    firstname: string;
    lastname: string;
    age: number;
    height: string;
    nationality: string;
    weight: string;
};

type Statistics = {
    games: Games;
};

type tableItem = {
    firstName: string;
    lastName: string;
    age: number;
    weight: string;
    height: string;
    nationality: string;
    id: number;
    position: string;
    rating: string;
};

type ResponseItem = {
    player: Player;
    statistics: Statistics[];
};

type ResponseData = {
    response: ResponseItem[];
};

const PlayerInfoTable: React.FC<PlayerInfoTable> = () => {
    const playerIndex = useSearchStore((state) => state.playerIndex);

    const { teamId } = useParams();

    const { data, isLoading, isError } = useQuery<ResponseData>({
        queryKey: ["players-statistics", teamId],
        queryFn: () => getTeamPlayersAndStatistics(teamId as string),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Something went wrong!</div>;
    }

    const selectedPlayer = data?.response[playerIndex ?? 0];

    const templateTableData = [
        {
            firstName: selectedPlayer?.player.firstname,
            lastName: selectedPlayer?.player.lastname,
            age: selectedPlayer?.player.age,
            weight: selectedPlayer?.player.weight,
            height: selectedPlayer?.player.height,
            nationality: selectedPlayer?.player.nationality,
            id: selectedPlayer?.player.id,
            position: selectedPlayer?.statistics[0].games.position,
            rating: selectedPlayer?.statistics[0].games.rating,
        },
    ];

    const theme = useTheme(getTheme());
    const tableData = { nodes: templateTableData };

    const COLUMNS = [
        {
            label: "First Name",
            renderCell: (item: tableItem) => item.firstName,
        },
        { label: "Last Name", renderCell: (item: tableItem) => item.lastName },
        {
            label: "Nationality",
            renderCell: (item: tableItem) => item.nationality,
        },
        { label: "Weight", renderCell: (item: tableItem) => item.weight },
        { label: "Height", renderCell: (item: tableItem) => item.height },
        { label: "Age", renderCell: (item: tableItem) => item.age },
        { label: "Position", renderCell: (item: tableItem) => item.position },
        { label: "Rating", renderCell: (item: tableItem) => item.rating },
    ];

    return (
        <div className={classes.tableContainer}>
            <CompactTable columns={COLUMNS} data={tableData} theme={theme} />
        </div>
    );
};

export default PlayerInfoTable;
