import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import { NavbarMain } from "./components/NavbarMain";
import { Outlet } from "react-router-dom";

const App = () =>{
    return (
        <div>
            <NavbarMain/>
            <Outlet/>
        </div>
    );
}

export default App;