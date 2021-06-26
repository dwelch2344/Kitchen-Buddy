import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>Lazer Beanz</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to={"/timer"}>Timer</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/recipes"}>Recipes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    );
};

export default NavBar;