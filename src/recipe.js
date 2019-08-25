import React from 'react';

const Recipe = ({title,calories,image, ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
            <img src={image} alt="" />
            <p><strong>Calories:</strong> {calories}</p>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe