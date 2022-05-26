import React, { useState, useEffect } from "react";
import { copyright } from "../constants";
import { menuApi } from "../fake-apis/menuApi";
import "./../styles/menu.css";

function Menu(props) {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    menuApi().then((data) => {
      setMenuData(data);
    });
  }, []);

  return (
    <div className="menu">
      <center>
        <div className="menu-container">
          <img
            className="profile-picture"
            src={process.env.PUBLIC_URL + "vicky.jpeg"}
            alt="profile"
          />
          <h2 className="menu-name">{menuData?.name}</h2>
          <h3 className="menu-role">{menuData?.role}</h3>
          {menuData?.navList.map((data, index) => {
            return (
              <h4
                className="menu-heading"
                key={index}
                onClick={() => {
                  props.scrollToComponent(data);
                }}
              >
                {data}
              </h4>
            );
          })}
          <p
            className="menu-copyright"
            dangerouslySetInnerHTML={{ __html: copyright }}
          ></p>
        </div>
      </center>
    </div>
  );
}

export default Menu;
