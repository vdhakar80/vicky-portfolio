import React, { useRef, useState, useCallback } from "react";
import Menu from "./Menu";
import Details from "./Details";
import "./../styles/HomePage.css";

function HomePage() {
  const componentStartRef = useRef(null);
  const [currentComponent, setCurrentComponent] = useState(null);

  const scrollToComponent = useCallback(async (data) => {
    await setCurrentComponent(data);
    componentStartRef?.current?.scrollIntoView({
      behavior: "auto",
      block: "start",
      inline: "nearest",
    });
  }, []);

  return (
    <div className="homepage-container">
      <Menu scrollToComponent={scrollToComponent} />{" "}
      <Details
        componentStartRef={componentStartRef}
        currentComponent={currentComponent}
      />
    </div>
  );
}

export default HomePage;
