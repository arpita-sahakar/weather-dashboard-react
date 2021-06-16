import "./App.css";
import { useState } from "react";
import Display5DaysForecast from "../components/Display5DaysForecast";
import DisplayCitiesName from "../components/DisplayCitiesName";
import DisplayCityForcast from "../components/DisplayCityForcast";
import SearchBar from "../components/SearchBar";


function App() {
  const [textHandler, setTextHandler] = useState("");
  const [weatherForecast, setWeatherForecast] = useState({});

  return (
    <div className="App">
      <h1 className="header">Weather Dashboard</h1>
      <section className="xyz">
        <SearchBar
          setTextHandler={setTextHandler}
          setWeatherForecast={setWeatherForecast}
          textHandler={textHandler}
        />
        <DisplayCitiesName />
      </section>
      <DisplayCityForcast />
      <Display5DaysForecast />
    </div>
  );
}

export default App;
