import { QueryClient } from "@tanstack/react-query";
const apiKey = import.meta.env.VITE_API_KEY;
export const queryClient = new QueryClient();

export const getTeams = async <T extends ArrayLike<unknown>>(teams: T) => {
    if (teams.length < 2) {
        return null;
    }
    const url = `https://api-football-v1.p.rapidapi.com/v3/teams?search=${teams}`;
    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const getTeamPlayersAndStatistics = async (teamId: string) => {
    const url = `https://api-football-v1.p.rapidapi.com/v3/players?team=${teamId}&season=2024`;

    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
};
