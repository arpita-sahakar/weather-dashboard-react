import React from "react";
import axios from "axios";

function DisplayCitiesName({ cityNames, setWeatherForecast }) {

    const fetchWeatherReport = (cityName) => {
    const APIKey = "2be1f85ce6c480a430250905886eb88e";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`;

    axios.get(URL).then((res) => {
      console.log(res.data);
      setWeatherForecast(res.data);
    });
  };

  return (
    <div className="displayCitiesName">
      {cityNames.map((el, i) => {
        return (
          <div key={i}>
            <button
              onClick={() => {
                fetchWeatherReport(el);
              }}
            >
              {el}
            </button>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default DisplayCitiesName;
