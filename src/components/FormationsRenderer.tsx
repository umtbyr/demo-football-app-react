import React from "react";
import classes from "./FormationsRenderer.module.css";
import FormationItem from "./FormationItem";
import { formations } from "../formations";
import { useContext } from "react";
import { formationContext } from "../pages/CreateFormation";
type Props = {
    chlidren?: React.ReactNode;
    //formation: string;
};

const FormationsRenderer: React.FC<Props> = () => {
    const { formationType } = useContext(formationContext);

    return (
        <div>
            <div className={classes.formationContainer}>
                {formations[formationType].map((row, rowIndex) => (
                    <div key={rowIndex} className={classes.row}>
                        {row.map((position, index) => (
                            <FormationItem
                                key={index}
                                position={position}
                                index={index}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FormationsRenderer;
