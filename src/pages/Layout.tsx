import React from "react";
import classes from "./Layout.module.css";
import { Outlet } from "react-router";
import { useMainHeaderScroll } from "../hooks";
import SearchBar from "../components/SearchBar";
const Layout: React.FC = () => {
    const { scrollingUp } = useMainHeaderScroll();
    return (
        <>
            <header
                className={`${classes.mainHeader} ${
                    !scrollingUp ? classes.hideHeader : ""
                }`}
            >
                <SearchBar></SearchBar>
            </header>
            <Outlet />
        </>
    );
};

export default Layout;
