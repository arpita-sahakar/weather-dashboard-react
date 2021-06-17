import React from "react";
import { Button, Card } from "react-bootstrap";
import displayDate from "../util.js";

function Display5DaysForcast({ weatherForecast }) {
  if (weatherForecast != null) {
    return (
      <div className="displayForcasts">
        <div className="card">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                {weatherForecast.name} ({displayDate(weatherForecast.dt)})
              </Card.Title>
              <Card.Title></Card.Title>
              <Card.Title>Temparature : {weatherForecast.main.temp}</Card.Title>
              <Card.Title>
                Humidity : {weatherForecast.main.humidity}
              </Card.Title>
              <Card.Title>
                {" "}
                Weather description :
                {weatherForecast.weather.map((el, i) => {
                  return el.description;
                })}
              </Card.Title>
            </Card.Body>
          </Card>
          <hr />
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                {weatherForecast.name} ({displayDate(weatherForecast.dt)})
              </Card.Title>
              <Card.Title></Card.Title>
              <Card.Title>Temparature : {weatherForecast.main.temp}</Card.Title>
              <Card.Title>
                Humidity : {weatherForecast.main.humidity}
              </Card.Title>
              <Card.Title>
                {" "}
                Weather description :
                {weatherForecast.weather.map((el, i) => {
                  return el.description;
                })}
              </Card.Title>
            </Card.Body>
          </Card>
          <hr />
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                {weatherForecast.name} ({displayDate(weatherForecast.dt)})
              </Card.Title>
              <Card.Title></Card.Title>
              <Card.Title>Temparature : {weatherForecast.main.temp}</Card.Title>
              <Card.Title>
                Humidity : {weatherForecast.main.humidity}
              </Card.Title>
              <Card.Title>
                Weather description :
                {weatherForecast.weather.map((el, i) => {
                  return el.description;
                })}
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  } else {
    return <h6>Loading....</h6>;
  }
}

export default Display5DaysForcast;
