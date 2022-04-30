import React from "react";
import Details from "./Details";
import Menu from "./Menu";

import "./../css/homepage.css";

function HomePage() {
  return (
    <div className="homepage">
      <div>
        <Menu />
      </div>
      <div>
        <Details />
      </div>
    </div>
  );
}

export default HomePage;
