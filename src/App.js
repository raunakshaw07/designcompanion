import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import DisplayWork from "./components/Work/DisplayWork";

function App() {
  const [id, setId] = useState(null);
  const setIdFunc = (id) => {
    setId(id);
  };
  return (
    <div className="App">
      <Router>
        <Route exact path="/" render={(props) => <Home />} />
        <Route exact path="/about" render={(props) => <About />} />
        <Route exact path="/services" render={(props) => <Service />} />
        <Route
          exact
          path="/works"
          render={(props) => <Work setIdFunc={setIdFunc} />}
        />
        <Route
          exact
          path="/workinfo"
          render={(props) => <DisplayWork id={id} />}
        />
        <Route exact path="/contact" render={(props) => <Contact />} />
      </Router>
    </div>
  );
}

export default App;
