import React from "react";
import { render } from "react-dom"
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import { Customers } from "./views/Customers";

render(
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="clients" element={<Customers />} />
            </Route>
        </Routes>
    </Router>
    , document.getElementById("root"));