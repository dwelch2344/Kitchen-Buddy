import React from 'react';
import './Recipes.css'

const Recipe = ({ title, calories, url, image, ingredients, labels }) => {
    return (
        <div className='recipe'>
            <h1 className='title'>{title}</h1>
            <ol>
                {/* <h2 className='label'>Health Label</h2>

                if wanting a health label */}
                {/* {labels.map(label => (
                    <li>{[label]}</li>
                ))} */}
            </ol>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories} Calories</p>
            <a href={url}>{url}</a>
            <img className='image' src={image} alt=""/>
        </div>
    );
};

export default Recipe;