import React from "react";
import classes from "./Button.module.css";

type Props = {
    children?: React.ReactNode;
    onClickFn: (data: any) => void;
};

const Button: React.FC<Props> = (props) => {
    return <button onClick={props.onClickFn} className={classes.button}>{props.children}</button>;
};

export default Button;
