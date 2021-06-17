import "./App.css";
import { useState, useEffect } from "react";
import Display5DaysForecast from "../components/Display5DaysForecast";
import DisplayCitiesName from "../components/DisplayCitiesName";
import DisplayCityForcast from "../components/DisplayCityForcast";
import SearchBar from "../components/SearchBar";
import axios from "axios";

function App() {
  const [textHandler, setTextHandler] = useState("atlanta");
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [cityNames, setCityNames] = useState([]);

  const getWeatherForecast = () => {
    const APIKey = "2be1f85ce6c480a430250905886eb88e";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${textHandler}&appid=${APIKey}`;

    axios.get(URL).then((res) => {
      setWeatherForecast(res.data);
      console.log(res.data);
      setTextHandler("");
      if (!cityNames.includes(textHandler)) {
        setCityNames([...cityNames, textHandler]);
      }
    });
  };

  useEffect(() => {
    console.log("hey");
    getWeatherForecast();
  }, []);

  return (
    <div className="App">
      <h1 className="header">Weather Dashboard</h1>
      <section className="xyz">
        <SearchBar
          setTextHandler={setTextHandler}
          getWeatherForecast={getWeatherForecast}
          textHandler={textHandler}
        />
        <DisplayCitiesName cityNames={cityNames} />
      </section>
      <DisplayCityForcast weatherForecast={weatherForecast} /> 
      <Display5DaysForecast weatherForecast={weatherForecast}/>
    </div>
  );
}

export default App;
