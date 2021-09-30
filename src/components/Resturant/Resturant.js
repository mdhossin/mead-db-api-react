import React from "react";
import { Button, Card, CardGroup, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Resturant.css";

const Resturant = (props) => {
  const { strMealThumb, strMeal, idMeal } = props?.obj;
  return (
    <CardGroup>
      <Col>
        <Card className="h-100 shadow card">
          <Card.Img className="img" variant="top" src={strMealThumb} />
          <Card.Body>
            <Card.Title className="text-center">{strMeal}</Card.Title>
          </Card.Body>

          <NavLink className="pb-3 mx-auto" to={`/meals/${idMeal}`}>
            <Button variant="warning" className="text-dark mx-auto">
              Add to Cart
            </Button>
          </NavLink>
        </Card>
      </Col>
    </CardGroup>
  );
};

export default Resturant;
