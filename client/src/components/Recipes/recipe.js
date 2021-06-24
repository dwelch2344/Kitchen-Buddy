import React from 'react';
import './Recipes.css'

const Recipe = ({ title, calories, url, image, ingredients }) => {
    return (
        <div className='recipe'>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories} Calories</p>
            <p>{url}</p>
            <img className='image' src={image} alt=""/>
        </div>
    );
};

export default Recipe;