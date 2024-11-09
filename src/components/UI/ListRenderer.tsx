import React from "react";
import classes from "./ListRenderer.module.css";

type ListProps<T> = {
    data: T[];
    renderFunction: (item: T, index: number) => React.ReactNode;
    keyExtractor: (item: T) => string | number;
    ulClassName?: string;
    liClassName?: string;
};

const ListRenderer = <T extends {}>({
    data,
    renderFunction,
    ulClassName,
    liClassName,
    keyExtractor,
}: ListProps<T>) => {
    return (
        <ul className={ulClassName ? ulClassName : classes.defaultUl}>
            {data.map((item, index) => (
                <li
                    className={liClassName ? liClassName : classes.defaultLi}
                    key={keyExtractor(item) || index}
                >
                    {renderFunction(item, index)}
                </li>
            ))}
        </ul>
    );
};

export default ListRenderer;
