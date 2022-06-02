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
          <div>
            <a
              className="home-body-resumelink-a"
              href="/Resume_Muskan Bandil.pdf"
              download
            >
              Download CV
            </a>
            <img
              className="home-body-resumelink-img"
              src={process.env.PUBLIC_URL + "download11.png"}
              alt="download"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Home);
