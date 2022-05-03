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
  });

  return (
    <div className="menu">
      <center>
        <div className="menu-container">
          <img
            className="profile-picture"
            src="https://upload.wikimedia.org/wikipedia/en/e/e1/Doraemon_2015.jpg"
            alt="profile"
          />
          <h3>{menuData?.name}</h3>
          <h4>{menuData?.role}</h4>
          {menuData?.navList.map((data, index) => {
            return (
              <h5
                key={index}
                onClick={() => {
                  props.scrollToComponent(data);
                }}
              >
                {data}
              </h5>
            );
          })}
          <p dangerouslySetInnerHTML={{ __html: copyright }}></p>
        </div>
      </center>
    </div>
  );
}

export default Menu;
