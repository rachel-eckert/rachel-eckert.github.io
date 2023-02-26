import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./About";
import Portfolio from "./Portfolio";
/*
    This is you entry point for your routes
*/

const Main = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <About />
          <Portfolio className="child" />
        </div>
      </div>
    </Router>
  );
};

export default Main;
