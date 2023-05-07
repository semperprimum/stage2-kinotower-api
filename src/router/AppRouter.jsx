import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./index";

const AppRouter = ({className}) => {
    return (
        <BrowserRouter className={className}>
            <Routes>
                {routes.map((route) =>
                    <Route key={route.id} path={route.path} element={route.element} />
                )}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;