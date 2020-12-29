/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import RecipeCard from "./components/RecipeCard";
import "./App.css";
import Search from "./components/Search";
import {APP_ID_CONS, APP_KEY_CONS, DefaultSearchValue,API_BASE_URL} from './constant';

function App() {
  const APP_ID = process.env.REACT_APP_API_ID || APP_ID_CONS;
  const APP_KEY = process.env.REACT_APP_API_KEY || APP_KEY_CONS;
  const [recipes, setRecipes] = useState([]);


  useEffect(()=>{
    getRecipes(DefaultSearchValue);
  },[])

  const getRecipes = async (search) => {
    const response = await fetch(
      `${API_BASE_URL}?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    getRecipes(e.target.value);
  };


  return (
    <div className="App">
      <Search updateSearch={updateSearch} defaultValue={DefaultSearchValue}/>
      <div className="recipes">
        {recipes.map(recipe => (
          <RecipeCard
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
