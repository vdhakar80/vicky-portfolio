import React, { useEffect, useState } from "react";
import "./../styles/About.css";
import { aboutApi } from "./../fake-apis/aboutApi";

function About(props) {
  const { componentStartRef } = props;
  const [aboutDetails, setaboutDetails] = useState(null);
  useEffect(() => {
    aboutApi().then((data) => {
      setaboutDetails(data);
    });
  });

  return (
    <div ref={componentStartRef} className="about">
      <div className="about-heading">{aboutDetails?.title}</div>
      {aboutDetails?.paras.map((data) => {
        return <p>{data}</p>;
      })}
      <div className="about-cards">
        {aboutDetails?.roles.map((data) => {
          return (
            <div
              className="about-card"
              style={{ borderBottom: `5px solid ${data.borderColor}` }}
            >
              <img
                className="about-role-logo"
                alt={data.role}
                src={process.env.PUBLIC_URL + data.logo}
              />
              <div className="about-role"> {data.role}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(About);
