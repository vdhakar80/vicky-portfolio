import React from "react";
import "./../styles/Details.css";
import About from "./About";
import Education from "./Education";
import Home from "./Home";

function Details() {
  return (
    <div className="details">
      <Home />
      <About />
      <Education />
    </div>
  );
}

export default Details;
