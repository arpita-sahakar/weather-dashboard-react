import React from "react";

function SearchBar({ setTextHandler, getWeatherForecast, textHandler }) {
  return (
    <div className="searcBar">
      <h3>Search for city</h3>
      <input
        onChange={(e) => setTextHandler(e.target.value)}
        value={textHandler}
        type="text"
      />
      <button onClick={getWeatherForecast} type="button">
        search
      </button>
    </div>
  );
}

export default SearchBar;
