import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormControl, Row } from "react-bootstrap";
import Resturant from "../Resturant/Resturant";

const Meals = () => {
  // set data here
  const [meals, setMeals] = useState([]);
  const [foods, setFoods] = useState([]);

  // here main data looding
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals);
        setFoods(data.meals);
      });
  }, []);

  const handelOnChange = (event) => {
    const searchItem = event.target.value.toLowerCase();
    const matchedFound = meals.filter((food) =>
      food.strMeal.toLowerCase().includes(searchItem)
    );
    setFoods(matchedFound);
  };

  return (
    <Container className="my-4">
      <Form className="d-flex mb-4 w-md-50  w-75 mx-auto">
        <FormControl
          onChange={handelOnChange}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Row xs={1} md={4} className="g-4">
        {foods.map((meal) => (
          <Resturant key={meal.idMeal} obj={meal} />
        ))}
      </Row>
      ;
    </Container>
  );
};

export default Meals;
