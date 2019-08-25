import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image, ingredients, url}) => {
    return(
        <div className={style.recipe}>
            <a href={url} className="recipe__url"><h1>{title}</h1></a>
            <img src={image} alt="" className="recipe__image"/>
        </div>
    )
}

export default Recipe