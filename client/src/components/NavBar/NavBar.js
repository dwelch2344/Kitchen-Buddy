import React from "react";
import { Link } from "react-router-dom";


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
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={"/"}>HOME</Link>
                </li>

            </ul>
        </nav>
    );
};

export default NavBar;


