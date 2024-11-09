import React from "react";
import classes from "./Layout.module.css";
import { Outlet } from "react-router";
import { useMainHeaderScroll } from "../hooks";
import SearchBar from "../components/SearchBar";
import Button from "../components/UI/Button";
import { useNavigate } from "react-router";
const Layout: React.FC = () => {
    const { scrollingUp } = useMainHeaderScroll();
    const navigate = useNavigate();
    const handleCreateFormationBtn = () => {
        navigate("/create-formation");
    };
    return (
        <>
            <header
                className={`${classes.mainHeader} ${
                    !scrollingUp ? classes.hideHeader : ""
                }`}
            >
                <SearchBar></SearchBar>
                <Button onClickFn={handleCreateFormationBtn}>
                    Create formation
                </Button>
            </header>
            <Outlet />
        </>
    );
};

export default Layout;
