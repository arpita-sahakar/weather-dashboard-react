import React from "react";
import { Button, Card } from "react-bootstrap";

function Display5DaysForcast() {
  return (
    <div className="displayForcasts">
      <div className="card">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/originals/aa/ec/d8/aaecd82ad0b63ee0d2fa7e1b53e3f198.jpg"
            height="50px"
            weight="50px"
          />
          <Card.Body>
            <Card.Title>Atlanta (6/15/2021)</Card.Title>
            <Card.Title></Card.Title>
            <Card.Title>Temparature :</Card.Title>
            <Card.Title>Humidity :</Card.Title>
            <Card.Title>UV Index :</Card.Title>
          </Card.Body>
        </Card>
    <hr/>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/originals/aa/ec/d8/aaecd82ad0b63ee0d2fa7e1b53e3f198.jpg"
            height="50px"
            weight="50px"
          />
          <Card.Body>
            <Card.Title>Atlanta (6/15/2021)</Card.Title>
            <Card.Title></Card.Title>
            <Card.Title>Temparature :</Card.Title>
            <Card.Title>Humidity :</Card.Title>
            <Card.Title>UV Index :</Card.Title>
          </Card.Body>
        </Card>
        <hr/>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/aa/ec/d8/aaecd82ad0b63ee0d2fa7e1b53e3f198.jpg" height="50px" weight="50px" />
          <Card.Body>
            <Card.Title>Atlanta (6/15/2021)</Card.Title>
            <Card.Title></Card.Title>
            <Card.Title>Temparature :</Card.Title>
            <Card.Title>Humidity :</Card.Title>
            <Card.Title>UV Index :</Card.Title>
          </Card.Body>
        </Card>
      </div>

      {/* <div>
      <h6>(Displaying the upcoming 5 days forecast)</h6>
        <h2>Atlanta (6/15/2021)</h2>
        <h4>Temparature : </h4>
        <h4>Humidity : </h4>
        <h4>Wind Speed : </h4>
        <h4>UV Index : </h4>
      </div> 

      <div>
        <h2>Atlanta (6/15/2021)</h2>
        <h4>Temparature : </h4>
        <h4>Humidity : </h4>
        <h4>Wind Speed : </h4>
        <h4>UV Index : </h4>
      </div>  */}
    </div>
  );
}

export default Display5DaysForcast;
