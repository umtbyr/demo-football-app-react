import React from "react";
import classes from "./Team.module.css";
import { useSearchStore } from "../store/store";
import { useNavigate } from "react-router";
type TeamProps = {
    children?: React.ReactNode;
    name: string;
    logo: string;
    founded: number;
    id: number;
};

const Team: React.FC<TeamProps> = ({ name, logo, founded, id }) => {
    const navigate = useNavigate();

    const setTeamLogo = useSearchStore((state) => state.setTeamLogo);
    const setTeamName = useSearchStore((state) => state.setTeamName);

    const teamOnClickHandler = (id: number) => {
        setTeamLogo(logo);
        setTeamName(name);
        navigate(`team/${id}`);
    };

    return (
        <div
            className={classes.teamcontainer}
            onClick={() => teamOnClickHandler(id)}
        >
            <img src={logo} alt="team-image" className={classes.teamimg} />
            <p className={classes.teamname}>{name}</p>
            <p className={classes.teaminfo}>{founded}</p>
        </div>
    );
};

export default Team;
