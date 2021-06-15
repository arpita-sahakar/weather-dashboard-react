import React from "react";
import { Button, Card } from "react-bootstrap";

function Display5DaysForcast() {
  return (
    <div className="displayForcasts">
      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
      <div>
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
      </div> 
    </div>
  );
}

export default Display5DaysForcast;
