import React from "react";
import Menu from "./Menu";
import Details from "./Details";
import "./../styles/HomePage.css";

function HomePage() {
  return (
    <div className="homepage-container">
      <Menu /> <Details />
    </div>
  );
}

export default HomePage;
