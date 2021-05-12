import React, { useState } from "react";
import "./contact.css";
import Navbar from "../Navbar/Navbar";
import FlashMessage from "react-flash-message";

const Contact = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [budget, setBudget] = useState(null);
  const [us, setUs] = useState(null);
  const [msg, setMsg] = useState(null);
  const [flash, setFlash] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !budget || !us || !msg) {
      setFlash("Please fill all the fields");
    } else {
      setFlash("Successfully Sent!");
    }
    setShowMessage(true);
    console.log({ name, email, phone, budget, us, msg });
  };
  return (
    <div className="contact">
      <section className="section1">
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
        <h1>
          <span style={{ color: "#EFB960" }}>C</span>ontact{" "}
          <span style={{ color: "#EFB960" }}>U</span>s
        </h1>
        <div className="form">
          {showMessage && (
            <div>
              <FlashMessage duration={5000}>
                <strong>{flash}</strong>
              </FlashMessage>
            </div>
          )}
          <form method="post" onSubmit={handleSubmit}>
            <div className="grid-box">
              <div className="grid" style={{ width: "100%" }}>
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  style={{ width: "100%" }}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label htmlFor="email">Email Address</label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  style={{ width: "100%" }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid" style={{ width: "100%" }}>
                <label htmlFor="phone">Phone Number</label>
                <br />
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  style={{ width: "100%" }}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <br />
                <label htmlFor="budget">Your Budget</label>
                <br />
                <input
                  type="text"
                  name="budget"
                  id="budget"
                  style={{ width: "100%" }}
                  onChange={(e) => setBudget(e.target.value)}
                />
                <br />
              </div>
            </div>
            <label htmlFor="us">How Did You Hear About Us</label>
            <br />
            <select
              name="us"
              id="us"
              style={{ width: "100%" }}
              onChange={(e) => setUs(e.target.value)}
            >
              <option value="select" disabled>
                Select One
              </option>
              <option value="advertisement">Advertisement</option>
              <option value="social">Social Media</option>
              <option value="recomedation">Recomended by someone</option>
            </select>
            <br />
            <label htmlFor="message">How Can We Help You?</label>
            <br />
            <textarea
              name="msg"
              id="msg"
              onChange={(e) => setMsg(e.target.value)}
            />
            <div
              className="button"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </section>
      <section className="section2">
        <div className="info">
          <div className="info1">
            <h4 style={{ color: "#EFB960" }}>Our Address</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="info2">
            <h4 style={{ color: "#EFB960" }}>Contact</h4>
            <p>loremipsum@gmail.com</p>
            <p>+1234567890</p>
          </div>
        </div>
        <div className="social">
          Follow us on :
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p style={{ color: "#EFB960" }}>
          For Joining Our Team, Email Us On The Above Specified Email Address
        </p>
      </section>
    </div>
  );
};

export default Contact;
