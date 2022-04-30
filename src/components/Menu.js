import React from "react";
import "./../styles/menu.css";

function Menu() {
  return (
    <div className="menu">
      <div>
        <center>
          <img
            className="profile-picture"
            src="https://upload.wikimedia.org/wikipedia/en/e/e1/Doraemon_2015.jpg"
            alt="profile"
          />
          <h3>Vicky Dhakar</h3>
          <h4>Full Stack Developer</h4>
          <h5>Home</h5>
          <h5>About</h5>
          <h5>Services</h5>
          <h5>Skills</h5>
          <h5>Education</h5>
          <p>
            © Copyright ©2022 All rights reserved | This template is made with
            by Muskan Bandil and Vicky Dhakar
          </p>
        </center>
      </div>
    </div>
  );
}

export default Menu;
