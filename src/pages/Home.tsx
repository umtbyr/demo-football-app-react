import Team from "../components/Team";
import classes from "./Home.module.css";
import { getTeams } from "../http";
import { useSearchStore } from "../store/store";
import { useQuery } from "@tanstack/react-query";
import UserPlayerList from "../components/UserPlayerList";
type Team = {
    team: {
        name: string;
        id: number;
        logo: string;
        founded: number;
    };
};

const Home: React.FC = () => {
    const searchData = useSearchStore((state) => state.searchData);

    const { data } = useQuery({
        queryKey: ["teams", searchData],
        queryFn: () => getTeams(searchData),
    });

    const teamData: Team[] = data?.response ?? [];

    return (
        <main>
            <section>
                <UserPlayerList />
            </section>
            <section className={classes.container}>
                <ul className={classes.teamList}>
                    {teamData.map((teamItem) => (
                        <li key={teamItem.team.id}>
                            <Team {...teamItem.team} />
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default Home;
