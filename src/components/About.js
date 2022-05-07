import React from "react";
import "./../styles/About.css";

function About(props) {
  const { componentStartRef } = props;
  return (
    <div ref={componentStartRef} className="about">
      <div className="about-heading">Who am i?</div>

      <p className="about-para">
        {`Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind T`}
      </p>
      <p>
        {
          "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
        }
      </p>
      <div className="about-cards">
        {["Graphic Design", "Web Design", "Software", "Application"].map(
          (data) => {
            return <div className="about-card">{data}</div>;
          }
        )}
      </div>
    </div>
  );
}

export default React.memo(About);
