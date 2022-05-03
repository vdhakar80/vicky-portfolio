import React from "react";
import "./../styles/About.css";

function About(props) {
  const { componentStartRef } = props;
  return (
    <div ref={componentStartRef} className="about">
      About
    </div>
  );
}

export default React.memo(About);
