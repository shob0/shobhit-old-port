import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AnimatedApp from "./AnimatedApp";
import Header from "./Header";
import Footer from "./Footer";

const routing = (
  <div className="main">
    <Router>
      <div>
        <Header />
        {/* <Route path="*"> */}
        <AnimatedApp />
        {/* </Route> */}
        <Footer />
      </div>
    </Router>
  </div>
);

ReactDOM.render(routing, document.getElementById("root"));
