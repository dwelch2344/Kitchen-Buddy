import React from "react";
import { Link } from "react-router-dom";

import HomeBtn from "./HomeBtn";



import { ReactComponent as ConvertSvg } from '../../../assets/img/measuring-cup-svgrepo-com.svg';
import { ReactComponent as SubstituteSvg } from '../../../assets/img/arrows-svgrepo-com.svg';
import { ReactComponent as RecipeSvg } from '../../../assets/img/recipes-svgrepo-com.svg';
import { ReactComponent as TimerSvg } from '../../../assets/img/timer-svgrepo-com.svg';

import './Home.css';

const btnInfo = [
    {
        title: "convert",
        link: "/convert",
        svg: <ConvertSvg />
    },
    {
        title: "substitutes",
        link: "/substitutes",
        svg: <SubstituteSvg />
    },
    {
        title: "recipes",
        link: "/recipes",
        svg: <RecipeSvg />
    },
    {
        title: "timer",
        link: "/timer",
        svg: <TimerSvg />
    }

];



const Home = () => {

    return (
        <div className="home-main-container">

            <div className="app-btn-container">

                {btnInfo.map(p => <HomeBtn {...p} />)}



            </div>

        </div>
    );
};

export default Home;





// <div className="single-btn-containers">

// <div className="link-btn">
//     <Link to="/convert">
//         <div><ConvertSvg /></div>
//     </Link>
//     <div className="link-text">
//         convert
//     </div>

// </div>

// </div>


// <div className="single-btn-containers">
// <div className="link-btn">
//     {/* <Link to="/substitutes"> */}
//     <div><SubstituteSvg /></div>
//     {/* </Link> */}
//     <div className="link-text">
//         substitutes
//     </div>
// </div>
// </div>


// <div className="single-btn-containers">
// <div className="link-btn">
//     <Link to="/recipes">
//         <div><RecipeSvg /></div>
//     </Link>
//     <div className="link-text">
//         recipes
//     </div>
// </div>
// </div>

// <div className="single-btn-containers">
// <div className="link-btn">
//     <Link to="/timer">
//         <div><TimerSvg /></div>
//     </Link>
//     <div className="link-text">
//         timer
//     </div>
// </div>
// </div>