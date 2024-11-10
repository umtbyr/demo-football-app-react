import React from "react";
import classes from "./Formations.module.css";
import { useContext } from "react";
import { formationContext } from "../pages/CreateFormation";
import { formationType } from "../types";
const Formations: React.FC = () => {
    const { setFormationType } = useContext(formationContext);

    const formationList = [
        "4-2-3-1",
        "3-4-3",
        "4-3-3",
        "3-4-1-2",
        "4-4-2",
        "3-5-2",
    ];

    const onClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
        setFormationType(
            (event.currentTarget.textContent || "4-4-2") as formationType
        );
    };

    return (
        <>
            <h2>Chose a formation</h2>
            <ul className={classes.formationsList}>
                {formationList.map((formation) => (
                    <li onClick={onClickHandler}>{formation}</li>
                ))}
            </ul>
        </>
    );
};

export default Formations;
