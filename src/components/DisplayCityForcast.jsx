import React from "react";
// import moment from 'moment';

function DisplayCityForcast({ weatherForecast }) {
  //     const displayDate = (dateFromRes) => {
  //         let now = new Date(dateFromRes);
  //         let dateString = moment(now).format('YYYY-MM-DD');
  //         return dateString
  //     }
  return (
    <div className="abc">
      <h2>
        {weatherForecast.name} ({weatherForecast.dt})
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
}

export default DisplayCityForcast;
