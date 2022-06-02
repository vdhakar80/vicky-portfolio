import React, { useEffect, useState } from "react";
import "./../styles/SocialMediaLinks.css";
import { linkssDetails } from "../fake-apis/socialMediaLinkes";

function SocialMediaLinks() {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    linkssDetails()
      .then((data) => {
        console.log("links", data);
        setLinks(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <div className="sml">
      {links.map((data, key) => {
        return (
          <div>
            <a href={data.link} target="_blank" rel="noreferrer">
              <img
                src={process.env.PUBLIC_URL + data.icon}
                alt=""
                title={data.title}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default SocialMediaLinks;
