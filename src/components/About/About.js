import React from "react";
import "./about.css";
import Navbar from "../Navbar/Navbar";

import image1 from "../../images/about-temp1.jfif";
import image2 from "../../images/about-temp2.png";
import image3 from "../../images/about-temp3.jpeg";
import model1 from "../../images/model1.jpg";
import model2 from "../../images/model2.jpg";
import model3 from "../../images/model3.jpg";
import model4 from "../../images/model4.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="header">
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
        <div className="sub-header">
          <h1>
            <span style={{ color: "#EFB960" }}>A</span>bout{" "}
            <span style={{ color: "#EFB960" }}>U</span>s
          </h1>
          <p>
            For more than twenty years we've been working in the home renovation
            space.
          </p>
          <p>It's not just what we do — it's who we are</p>
        </div>
      </div>

      <div className="body">
        <div className="stats">
          <ul>
            <li>
              <h1>2021</h1>
              <p>Year Founded</p>
            </li>
            <li>
              <h1>20+</h1>
              <p>Projects Completed</p>
            </li>
            <li>
              <h1>90%</h1>
              <p>Customer Satisfaction</p>
            </li>
          </ul>
        </div>

        <section className="section1">
          <i className="far fa-circle fa-10x"></i>
          <div className="text">
            <h1 style={{ color: "#EFB960" }}>Our Promise</h1>
            <p>
              We believe in people over profit and strive to operate our
              business with integrity and trust. From clients to staff, our
              strongest assets and greatest resources are the relationships we
              build.
            </p>
            <p>
              When you choose to work with us, you're not just choosing a
              general contractor. You're choosing residential design + build
              experts who care.
            </p>
          </div>
        </section>

        <section className="section2">
          <h1 style={{ color: "#EFB960" }}>Core Values</h1>
          <div className="cards">
            <div className="card card1">
              <img src={image1} alt="image1" />
              <h2 style={{ color: "#EFB960" }}>We do it right</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                laoreet odio nunc, quis tristique mi dapibus vel. Vivamus
                commodo cursus mauris, ultricies vestibulum Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Donec laoreet odio nunc,
                quis tristique mi dapibus vel. Vivamus commodo cursus
              </p>
            </div>

            <div className="card card2">
              <img src={image2} alt="image2" />
              <h2 style={{ color: "#EFB960" }}>We do it together</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                laoreet odio nunc, quis tristique mi dapibus vel. Vivamus
                commodo cursus mauris, ultricies vestibulum Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Donec laoreet odio nunc,
                quis tristique mi dapibus vel. Vivamus commodo cursus
              </p>
            </div>

            <div className="card card3">
              <img src={image3} alt="image3" />
              <h2 style={{ color: "#EFB960" }}>We do it with purpose</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                laoreet odio nunc, quis tristique mi dapibus vel. Vivamus
                commodo cursus mauris, ultricies vestibulum Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Donec laoreet odio nunc,
                quis tristique mi dapibus vel. Vivamus commodo cursus
              </p>
            </div>
          </div>
        </section>

        <section className="section3">
          <h1 style={{ color: "#EFB960" }}>Our Team</h1>
          <div className="cards">
            <div className="card card1">
              <img src={model1} alt="image1" />
              <h2 style={{ color: "#EFB960" }}>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                laoreet odio nunc, quis tristique mi dapibus vel. Vivamus
              </p>
            </div>

            <div className="card card2">
              <img src={model2} alt="image2" />
              <h2 style={{ color: "#EFB960" }}>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                laoreet odio nunc, quis tristique mi dapibus vel.
              </p>
            </div>

            <div className="card card3">
              <img src={model3} alt="image3" />
              <h2 style={{ color: "#EFB960" }}>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                laoreet odio nunc, quis tristique mi dapibus vel. Vivamus
              </p>
            </div>

            <div className="card card4">
              <img src={model4} alt="image3" />
              <h2 style={{ color: "#EFB960" }}>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                laoreet odio nunc, quis tristique mi dapibus vel. Vivamus
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
