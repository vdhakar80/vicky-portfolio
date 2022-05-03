import React, { useState, useEffect } from "react";
import { skillsDetails } from "../fake-apis/skillsApi";
import "./../styles/Skills.css";

function Skills(props) {
  const { componentStartRef } = props;
  const [skillsData, setSkillsData] = useState(null);

  console.log(props);

  useEffect(() => {
    skillsDetails().then((data) => {
      setSkillsData(data);
    }, []);
  });

  return (
    <div ref={componentStartRef} className="skills">
      {skillsData && (
        <>
          <div className="skills-header">{skillsData?.title}</div>
          <div className="skills-body">
            <div className="skills-body-summary">{skillsData?.summary}</div>
            <div className="skills-body-skills">
              {Object.keys(skillsData?.skills)?.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className={
                      index % 2 === 0
                        ? "skills-body-skillLeftDiv"
                        : "skills-body-skillRightDiv"
                    }
                  >
                    <div className="skill-heading">
                      <span>{skill} </span>{" "}
                      <span>{skillsData?.skills[skill]}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={skillsData?.skills[skill]}
                      readOnly
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(Skills);
