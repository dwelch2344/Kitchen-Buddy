import React, { useState, useEffect } from 'react';
import Recipe from './recipe';
import './Recipes.css'

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    },[]);

    const getRecipes = async () => {
        const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=e2f68dc2&app_key=7b48db1896534b041d46a13fee1d2b99');
        const data = response.json();
        console.log(data);
        // setRecipes(data.hits);
    }

    return (
        <div className="App container">
            <form className='search-form'>
                <input className="search-bar" type="text" placeholder="Search recipes"/>
                <button className="search-button" type='submit'>
                    Search
                </button>
            </form>
            {/* {recipes.map(recipe => (
                <Recipe />
            ))} */}
        </div>
    );
};

export default Recipes;