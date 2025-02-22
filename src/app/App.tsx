import React from "react";
import "./style/index.scss";
import { useThemeResult } from "./providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames/classNames";
import { AppRouter } from "./providers/routing";
import { Navbar } from "../widgets/nav-bar";
import { Sidebar } from "../widgets/side-bar";
import { Suspense } from "react";

export const App = () => {
    const { theme } = useThemeResult();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
