import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import React from "react";

export const Layout = () => {
    return(
        <React.Fragment>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </React.Fragment>
    )
}