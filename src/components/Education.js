import React, { useState, useEffect } from "react";
import { educationDetails } from "../fake-apis/educationApi";
import "./../styles/Education.css";

function Education(props) {
  const [educationData, setEducationData] = useState([]);

  const { componentStartRef } = props;

  useEffect(() => {
    educationDetails().then((data) => {
      setEducationData(data);
    }, []);
  });
  return (
    <div ref={componentStartRef} className="education">
      <div className="education-heading">Education</div>
      <div className="education-body">
        {educationData?.map((e, i) => {
          return (
            <div className="card" key={i}>
              <div className="card-title">{e.title}</div>
              <div className="card-body">{e.body}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(Education);
