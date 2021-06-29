import React from "react";
import { Link } from "react-router-dom";



import { ReactComponent as ConvertSvg } from '../../../assets/img/measuring-cup-svgrepo-com.svg';
import { ReactComponent as SubstituteSvg } from '../../../assets/img/arrows-svgrepo-com.svg';
import { ReactComponent as RecipeSvg } from '../../../assets/img/recipes-svgrepo-com.svg';
import { ReactComponent as TimerSvg } from '../../../assets/img/timer-svgrepo-com.svg';

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