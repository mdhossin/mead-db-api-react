import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import "./SingleFood.css";

const SingleFood = () => {
  let { id } = useParams();
  let history = useHistory();
  const [meals, setMeals] = useState([]);
  console.log(meals);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  const backToMeal = () => {
    history.push("/meals");
  };

  //   const { strArea, strMealThumb, strInstructions } = meals[0];
  return (
    <div>
      <Container className="shadow my-5 singleFood">
        <Row>
          <Col md={4}>
            <Card>
              <img src={meals[0]?.strMealThumb} alt="" />
            </Card>
          </Col>
          <Col md={5}>
            <Card className="card-size">
              <h2>{meals[0]?.strArea}</h2>
              <p>{meals[0]?.strInstructions}</p>
              <Button onClick={backToMeal} variant="warning">
                Go back To Meals
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleFood;
