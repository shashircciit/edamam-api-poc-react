import React from "react";
import style from "../styles/recipe.module.css";

const RecipeCard = ({ title, image, calories, ingredients }) => {
  return (
    <div className={style.recipe}>
      <div className={style.title_box}>
        <h2>{title}</h2>
        <p>Calories : {Math.round(calories)}</p>
      </div>
      <div className={style.list_image}>
        <ol className={style.list}>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ol>
        <img className={style.image} src={image} alt=""></img>
      </div>

    </div>
  );
};

export default RecipeCard;
