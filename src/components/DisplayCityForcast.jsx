import React from "react";

import displayDate from "../util.js";

function DisplayCityForcast({ weatherForecast }) {

  if (weatherForecast != null) {
    return (
      <div className="abc">
        <h2>
          {weatherForecast.name} ({displayDate(weatherForecast.dt)})
        </h2>
        <h4>Temparature : {weatherForecast.main.temp}</h4>
        <h4>Humidity : {weatherForecast.main.humidity}</h4>
        <h4>Wind Speed : {weatherForecast.wind.speed}</h4>
        <h4>
          Weather description :
          {weatherForecast.weather.map((el, i) => {
            return el.description;
          })}
        </h4>
      </div>
    );
  } else {
    return (
      <div className="abc">
        <h6>Loading....</h6>
      </div>
    );
  }
}

export default DisplayCityForcast;
