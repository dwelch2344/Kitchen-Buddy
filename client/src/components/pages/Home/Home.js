import React from "react";
import { Link } from "react-router-dom";



import { ReactComponent as ConvertSvg } from '../../../assets/img/measuring-cup-svgrepo-com.svg';
import { ReactComponent as SubstituteSvg } from '../../../assets/img/arrows-svgrepo-com.svg';
import { ReactComponent as RecipeSvg } from '../../../assets/img/recipes-svgrepo-com.svg';
import { ReactComponent as TimerSvg } from '../../../assets/img/timer-svgrepo-com.svg';

import './Home.css';

const Home = () => {

    return (
        <div className="home-main-container">

            <div className="app-btn-container">

                <div className="single-btn-containers">

                    <div className="convert-link-btn">
                        <Link to="/convert">
                            <div><ConvertSvg /></div>
                        </Link>
                        <div className="convert-link-text">
                            convert
                        </div>

                    </div>

                </div>


                <div className="single-btn-containers">
                    <div className="substitute-link-btn">
                        {/* <Link to="/substitutes"> */}
                        <div><SubstituteSvg /></div>
                        {/* </Link> */}
                        <div className="substitute-link-text">
                            substitutes
                        </div>
                    </div>
                </div>


                <div className="single-btn-containers">
                    <div className="recipe-link-btn">
                        <Link to="/recipes">
                            <div><RecipeSvg /></div>
                        </Link>
                        <div className="recipe-link-text">
                            recipes
                        </div>
                    </div>
                </div>

                <div className="single-btn-containers">
                    <div className="timer-link-btn">
                        <Link to="/timer">
                            <div><TimerSvg /></div>
                        </Link>
                        <div className="timer-link-text">
                            timer
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Home;