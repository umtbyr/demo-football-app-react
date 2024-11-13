import React from "react";
import classes from "./TeamDetailsHeader.module.css";
import { useSearchStore } from "../store/store";
import PlayerBasketItem from "./PlayerBasketItem";
import { useNavigate } from "react-router";
import Button from "./UI/Button";
type Props = {
    children?: React.ReactNode;
    className: string;
};

const TeamDeatailsHeader: React.FC<Props> = ({ className }) => {
    const logo = useSearchStore((state) => state.currentTeamLogo);
    const teamName = useSearchStore((State) => State.currentTeamName);
    const userPlayerList = useSearchStore((state) => state.userPlayerList);
    const navigate = useNavigate();

    const handleHomeButton = () => {
        navigate("/");
    };

    return (
        <header className={`${classes.detailsHeader} ${className}`}>
            <div className={classes.playerCounterContainer}>
                <ul>
                    {userPlayerList.map((player) => (
                        <li key={player.id}>
                            <PlayerBasketItem photo={player.photo} />
                        </li>
                    ))}
                </ul>
            </div>

            <div className={classes.headerContainer}>
                <h2>{teamName}</h2>
            </div>

            <div className={classes.imageContainer}>
                <img
                    className={classes.teamImage}
                    src={logo || undefined}
                    alt="team-logo"
                />
            </div>
            <div className={classes.mainheaderBtn}>
                <Button onClickFn={handleHomeButton}>Home</Button>
            </div>
        </header>
    );
};

export default TeamDeatailsHeader;
