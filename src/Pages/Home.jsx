import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-background">
        <div className="text-container">
          <h1 className="main-heading">The Seneca, Inc.</h1>
          <h3 className="sub-heading ">Est. 1999</h3>
        </div>
      </div>

     
      <div className="button-container">
        <Link to="/ContactUs">
          <Button variant="primary" className="button">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
