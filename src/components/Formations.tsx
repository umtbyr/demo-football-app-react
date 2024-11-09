import React from "react";
import classes from "./Formations.module.css";

const Formations: React.FC = () => {
    return (
        <>
            <h2>Chose a formation</h2>
            <ul className={classes.formationsList}>
                <li>4-2-3-1</li>
                <li>3-4-3</li>
                <li>4-3-3</li>
                <li>3-4-1-2</li>
                <li>4-4-2</li>
            </ul>
        </>
    );
};

export default Formations;
