import React from "react";
import classes from "./FormationsRenderer.module.css";
import FormationItem from "./FormationItem";
import { Player } from "../types";
type Props = {
    chlidren?: React.ReactNode;
    //formation: string;
    selectedPlayer: Player |undefined;
};

const FormationsRenderer: React.FC<Props> = ({ selectedPlayer }) => {
    const formations = {
        "4-4-2": [
            ["GK"],
            ["LB", "CB", "CB", "RB"],
            ["LM", "CM", "CM", "RM"],
            ["ST", "ST"],
        ],
        "3-5-2": [
            ["GK"],
            ["CB", "CB", "CB"],
            ["LM", "CM", "CAM", "CM", "RM"],
            ["ST", "ST"],
        ],
        // Add more formations as needed
    };
    return (
        <div>
            <div className={classes.formationContainer}>
                {formations["4-4-2"].map((row, rowIndex) => (
                    <div key={rowIndex} className={classes.row}>
                        {row.map((position, index) => (
                            <FormationItem
                                key={index}
                                position={position}
                                index={index}
                                selectedPlayer={selectedPlayer}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FormationsRenderer;
