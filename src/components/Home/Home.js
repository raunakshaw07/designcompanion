import React from "react";
import "./home.css";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <div className="overlay"></div>
      <div className="logo">
        <a href="/">
          <h3>
            <i className="far fa-circle"></i>
            Design<span style={{ color: "#EFB960" }}>Companion</span>
          </h3>
        </a>
        <Navbar />
      </div>
      <div className="inner">
        <h1>Explore Your</h1>
        <h1>
          <span style={{ color: "#EFB960" }}>INTERIOR</span> DESIGN
        </h1>

        <h3>Get Inspired By Our Curated Design</h3>
        <p>Colonial or Modern, Contemporary or Eclectic - We Have One For</p>
        <p>Every Style. Go Ahead And Discover Your Perfect Home.......</p>
      </div>
    </div>
  );
};

export default Home;
