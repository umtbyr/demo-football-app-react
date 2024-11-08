import React from "react";

type Props = {
    children?: React.ReactNode;
    photo: string;
};

const PlayerBasketItem: React.FC<Props> = ({ photo }) => {
    return <img src={photo} alt="" />;
};

export default PlayerBasketItem;
