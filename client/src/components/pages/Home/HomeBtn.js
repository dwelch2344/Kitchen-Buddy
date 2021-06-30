import React from "react";
import { Link } from "react-router-dom";




const HomeBtn = (props) => {


    return (

        <div className="single-btn-containers">

            <div className="link-btn">
                <Link to={props.link}>
                    <div>{props.svg}</div>
                </Link>
                <p className="link-text">
                    {props.title}
                </p>
            </div>
        </div>
    );
};

export default HomeBtn;