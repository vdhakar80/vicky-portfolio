import React from "react";
import "./../styles/projects.css";
import { projectsApi } from "./../fake-apis/projectsApi";
import { useEffect } from "react";
import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

function Projects({ componentStartRef }) {
  const [projectData, setProjectData] = useState([]);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    projectsApi()
      .then((data) => {
        setProjectData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const leftSlide = () => {
    setCurrent(current === 0 ? projectData.length - 1 : current - 1);
  };
  const rightSlide = () => {
    setCurrent(current === projectData.length - 1 ? 0 : current + 1);
  };
  console.log(current);

  return (
    <div ref={componentStartRef} className="projects">
      <div className="projects-heading">{"Projects"}</div>
      <div className="projects-body">
        <BsFillArrowLeftCircleFill
          className="projects-button"
          onClick={leftSlide}
        />
        {projectData.map((data, index) => {
          return (
            <div className={index === current ? "slide slider" : "slide"}>
              {index === current && (
                <div className="project-details">
                  <h2>{data.name}</h2>
                  <p>{data.associated}</p>
                  <button className="view-details-button">
                    View more details
                  </button>
                </div>
              )}
            </div>
          );
        })}
        <BsFillArrowRightCircleFill
          className="projects-button"
          onClick={rightSlide}
        />
      </div>
    </div>
  );
}

export default Projects;
