import React from "react";



import { ReactComponent as ConvertSvg } from '../../../assets/img/measuring-cup-svgrepo-com.svg';
import { ReactComponent as SubstituteSvg } from '../../../assets/img/arrows-svgrepo-com.svg';
import { ReactComponent as RecipeSvg } from '../../../assets/img/recipes-svgrepo-com.svg';


import './Home.css';

const Home = () => {

    return (
        <div className="home-main-container">the home page

            <div className="app-btn-container">

                <div className="single-btn-containers">
                    <div className="convert-link-btn">

                        <div><ConvertSvg /></div>

                        <div className="convert-link-text">
                            convert
                        </div>
                    </div>
                </div>


                <div className="single-btn-containers">
                    <div className="substitute-link-btn">

                        <div><SubstituteSvg /></div>

                        <div className="substitute-link-text">
                            substitutes
                        </div>
                    </div>
                </div>


                <div className="single-btn-containers">
                    <div className="recipe-link-btn">

                        <div><RecipeSvg /></div>

                        <div className="recipe-link-text">
                            recipes
                        </div>
                    </div>

                </div>



            </div>

        </div>
    );
};

export default Home;