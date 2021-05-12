import React from "react";
import "./work.css";
import Navbar from "../Navbar/Navbar";
import { worklist } from "./worklist";
import DisplayWork from "./DisplayWork";
import { Link } from "react-router-dom";

const Work = ({ setIdFunc }) => {
  // let elHeight = document.querySelector(".work").clientHeight;
  // console.log(document.getElementById("work").clientHeight);
  return (
    <div className="work" id="work">
      <div className="bg">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <div className="header">
        <div className="logo">
          <a href="/">
            <h3>
              <i className="far fa-circle"></i>
              Design<span style={{ color: "#EFB960" }}>Companion</span>
            </h3>
          </a>
          <Navbar />
        </div>
      </div>
      <div className="body">
        <h1 style={{ fontFamily: "Arial" }}>
          <span style={{ color: "#EFB960" }}>O</span>ur{" "}
          <span style={{ color: "#EFB960" }}>W</span>orks
        </h1>
        <div className="cards">
          {worklist.map((item) => {
            return (
              <div className="card" key={item.id}>
                <img src={item.image} alt="image" />
                <div className="text">
                  <h3>{item.name}</h3>
                  <Link to="/workinfo" onClick={() => setIdFunc(item.id)}>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
