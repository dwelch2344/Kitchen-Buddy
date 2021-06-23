import React, { useState, useEffect } from 'react';
import './Recipes.css'

const recipes = () => {
    const appID = 'e2f68dc2';
    const appKey = '7b48db1896534b041d46a13fee1d2b99';

    // useEffect(() => {
    //     console.log('effect has been run');
    // },[]);

    const getRecipes = async () => {
        const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=e2f68dc2&app_key=7b48db1896534b041d46a13fee1d2b99');
        const data = response.json();
        console.log(data);
    }

    return (
        <div className="App">
            <form className='search-form'>
                <input className="search-bar" type="text" placeholder="Search recipes"/>
                <button className="search-button" type='submit'>
                    Search
                </button>
            </form>
        </div>
    );
};

export default recipes;