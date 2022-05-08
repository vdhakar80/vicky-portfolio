import React from "react";
import "./../styles/Details.css";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Home from "./Home";
import Experience from "./Experience";
import Certifications from "./Certifications";

function Details(props) {
  const { componentStartRef, currentComponent } = props;

  return (
    <div className="details">
      <Home
        componentStartRef={
          currentComponent === "Home" ? componentStartRef : null
        }
      />
      <About
        componentStartRef={
          currentComponent === "About" ? componentStartRef : null
        }
      />
      <Skills
        componentStartRef={
          currentComponent === "Skills" ? componentStartRef : null
        }
      />
      <Education
        componentStartRef={
          currentComponent === "Education" ? componentStartRef : null
        }
      />
      <Experience
        componentStartRef={
          currentComponent === "Experience" ? componentStartRef : null
        }
      />
      <Certifications
        componentStartRef={
          currentComponent === "Certifications" ? componentStartRef : null
        }
      />
    </div>
  );
}

export default Details;
