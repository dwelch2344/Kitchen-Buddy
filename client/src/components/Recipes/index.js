import React, { useState, useEffect } from 'react';
import Recipe from './recipe';
import './Recipes.css'

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
        getRecipes();
    },[query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=e2f68dc2&app_key=7b48db1896534b041d46a13fee1d2b99`);
        const data =  await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    };

    return (
        <div className="App container">
            <form onSubmit={getSearch} className='search-form'>
                <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search recipes"/>
                <button className="search-button" type='submit'>
                    Search
                </button>
            </form>
            <div className='recipes'>
                {recipes.map(recipe => (
                    <Recipe 
                    key={recipe.recipe.label}
                    title={recipe.recipe.label} 
                    calories={recipe.recipe.calories} 
                    url={recipe.recipe.url} 
                    image={recipe.recipe.image} 
                    ingredients={recipe.recipe.ingredients} />
                ))}
            </div>
        </div>
    );
};

export default Recipes;