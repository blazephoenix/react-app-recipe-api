import React from 'react';

const Recipe = ({title,calories,image, ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
            <img src={image} alt="" />
            <p><strong>Calories:</strong> {calories}</p>
            <div>
                {ingredients.map(ingredient =>(
                    <p>{ingredient.text}</p>
                ))}
            </div>
        </div>
    )
}

export default Recipe