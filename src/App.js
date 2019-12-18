import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("apple");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault(); //prevents refreshing of page
    setQuery(search);
    setSearch(""); //reseting form
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          placeholder="Enter any edible item(strawberry/honey...)"
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        ></input>
        <button className="search-button">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
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
