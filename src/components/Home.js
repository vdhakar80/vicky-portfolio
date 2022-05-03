import React from "react";
import "./../styles/Home.css";

function Home(props) {
  const { componentStartRef } = props;
  return (
    <div ref={componentStartRef} className="home">
      <div className="home-body">
        <div className="home-body-hi">Hi!</div>
        <div className="home-body-name">I'm Vicky</div>
        <div className="home-body-resumelink">
          {" "}
          <a href="/Resume_Muskan Bandil.pdf" download>
            Download My CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Home);
