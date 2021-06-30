import React from "react";
import { Link } from "react-router-dom";
// import Auth from "../../utils/auth";

import './navbar.css';

const NavBar = () => {

    // function navConditional() {

    //     if (Auth.loggedIn()) {
    //         return (
    //             <ul>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to={"/login"}>LOGOUT</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to={"/"}>HOME</Link>
    //                 </li>
    //             </ul>
    //         );
    //     } else {
    //         return (
    //             <ul>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to={"/sign-up"}>SIGNUP</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to={"/sign-in"}>LOGIN</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to={"/"}>HOME</Link>
    //                 </li>
    //             </ul>
    //         );

    //     }

    // }



    return (
<<<<<<< HEAD
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
=======

        // <nav>
        //     {navConditional()}
        // </nav>

        <nav>
            <ul>

                <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>SIGNUP</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/login"}>LOGIN</Link>
>>>>>>> c0076276c956d5cd2fc5ce1ab6c0e621f3d1c49a
                </li>

                <li className="nav-item">
<<<<<<< HEAD
                    <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
=======
                    <Link className="nav-link" to={"/"}>HOME</Link>
>>>>>>> c0076276c956d5cd2fc5ce1ab6c0e621f3d1c49a
                </li>

            </ul>
        </nav>
    );
};

export default NavBar;


