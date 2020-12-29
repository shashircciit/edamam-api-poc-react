import React from "react";

const Search =({ defaultValue, updateSearch}) => {
    return(
            <input
              placeholder="Search........"
              type="text"
              className="search-bar"
              defaultValue={defaultValue}
              onChange={updateSearch}
            ></input>
    )
}

export default Search;