import React from "react";
import { Link } from 'react-router-dom'

const AppNavbarTab = ({ value }) => {
    //treba nam return dole jer cemo prop da uvezemo
    return (
        <Link className="navbar-tab" to={value === "Home" ? "/" : value}>
            <h2>{value}</h2>
        </Link>
    );
};

export default AppNavbarTab;