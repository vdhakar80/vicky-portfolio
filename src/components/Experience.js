import React, { useState, useEffect } from "react";
import "./../styles/Experience.css";
import { experienceDetails } from "./../fake-apis/experienceApi";

function Experience(props) {
  const { componentStartRef } = props;
  const [experienceData, setExperienceData] = useState(null);

  useEffect(() => {
    experienceDetails().then((experienceData) => {
      setExperienceData(experienceData);
    });
  }, []);

  return (
    <div className="experience" ref={componentStartRef}>
      <div className="experience-heading">{experienceData?.title}</div>
      <div className="experience-body">
        <div className="experience-border">
          {experienceData?.experiences?.map((experience, index) => {
            return (
              <div className="experience-section">
                <div className="experience-icon">
                  <img src={process.env.PUBLIC_URL + "pencil1.png"} alt="" />
                </div>
                <div className="experience-summary-arrow"></div>
                <div className="experience-summary">
                  <div className="experience-summary-heading">
                    <h3>{experience?.companyName} </h3>
                    <h5> ({experience?.duration}) </h5>{" "}
                  </div>
                  <div className="experience-summary-body">
                    {experience?.summary}{" "}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="experience-border-circle"></div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
