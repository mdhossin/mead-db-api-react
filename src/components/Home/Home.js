import React from "react";
import { Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="background p-5">
      <div className="w-25 mx-auto p-5 div-home text-dark">
        <p>The Unique</p>
        <h1>Resturant</h1>
        <p>
          <small>Steack house | Fresh Menu</small>
        </p>
        <Button variant="warning">Book A Table</Button>
      </div>
    </div>
  );
};

export default Home;
