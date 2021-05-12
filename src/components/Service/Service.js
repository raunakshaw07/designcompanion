import React from "react";
import "./service.css";
import Navbar from "../Navbar/Navbar";
import out from "../../images/service-out1.jpg";

const Service = () => {
  return (
    <div className="service">
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
      <div className="left"></div>
      <div className="right"></div>
      <div className="body">
        <h1>
          <span style={{ color: "#EFB960" }}>O</span>ur{" "}
          <span style={{ color: "#EFB960" }}>S</span>ervices
        </h1>
        <div className="inner">
          <div className="inner-left">
            <div className="cards">
              <div className="card card1">
                <i className="fas fa-pencil-ruler"></i>
                <h2>
                  <span style={{ color: "#EFB960" }}>C</span>ustom{" "}
                  <span style={{ color: "#EFB960" }}>D</span>esign +{" "}
                  <span style={{ color: "#EFB960" }}>B</span>uild
                </h2>
                <p>
                  From the beginning, we listen, brainstorm, and discuss ideas
                  to bring out the full potential of spaces and areas that are
                  important to you. This step informs and educates you on what
                  project ideas are possible and what budget you will need to
                  complete them.
                </p>
              </div>
              <div className="card card2">
                <i className="fas fa-drafting-compass"></i>
                <h2>
                  <span style={{ color: "#EFB960" }}>A</span>rchitecture +{" "}
                  <span style={{ color: "#EFB960" }}>E</span>ngineering
                </h2>
                <p>
                  From ideas to drawn plans, we present the project in printed
                  form with the help of our architect. Once the final draft is
                  representative of your goals, we move on to engineering. And
                  if building permit applications are required, we'll take care
                  of them for you.
                </p>
              </div>
              <div className="card card3">
                <i className="fas fa-swatchbook"></i>
                <h2>
                  <span style={{ color: "#EFB960" }}>I</span>nterior +
                  <span style={{ color: "#EFB960" }}> E</span>xterior{" "}
                  <span style={{ color: "#EFB960" }}>D</span>esign
                </h2>
                <p>
                  This final stage is all about attention to detail. Our
                  designer will walk you through finishing selections, color
                  coordination, window design, flooring, trim, and much much
                  more. It's easy to feel overwhelmed, but we're here to help
                  make it stress free and fun.
                </p>
              </div>
              <div className="card card4">
                <i className="fas fa-concierge-bell"></i>
                <h2>
                  <span style={{ color: "#EFB960" }}>P</span>roject
                  <span style={{ color: "#EFB960" }}> M</span>anagement
                </h2>
                <p>
                  Once you give the green light on all the planning and design
                  decisions, we're ready to start building. We supply and
                  operate all trades, materials and supplies, as well as site
                  operations. Our goal is always to keep the project on time and
                  on budget.
                </p>
              </div>
            </div>
          </div>
          <div className="inner-right">
            <img src={out} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
