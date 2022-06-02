import React, { useRef, useState } from "react";
import "./../styles/Contact.css";
import emailjs from "@emailjs/browser";
import SocialMediaLinks from "./SocialMediaLinks";

function Contact({ componentStartRef }) {
  const formRef = useRef(false);
  const [done, setDone] = useState(false);
  const [user, setUser] = useState({
    user_name: "",
    user_subject: "",
    user_email: "",
    message: "",
  });
  const [userError, setUserError] = useState({
    user_name: "",
    user_subject: "",
    user_email: "",
    message: "",
  });
  const handleClick = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ [name]: value });
    handleValidation(name, value);
  };
  const handleValidation = (name, value) => {
    switch (name) {
      case "user_email":
        if (value.length < 1) {
          setUserError({ user_email: "Required" });
        } else {
          const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (!reg.test(value)) {
            setUserError({ user_email: "Invalid Email" });
          } else {
            setUserError({ user_email: "" });
          }
        }
        break;
      case "user_name":
        if (value.length < 1) {
          setUserError({ user_name: "Required" });
        } else {
          const reg = /^[a-z ,.'-]+$/i;
          if (!reg.test(value)) {
            setUserError({ user_name: "Invalid Name" });
          } else {
            setUserError({ user_name: "" });
          }
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_barcq51",
        "template_r3p0n7f",
        formRef.current,
        "14m5oJLhc6H4xYC7D"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setUser({
      user_name: "",
      user_subject: "",
      user_email: "",
      message: "",
    });
    setDone(true);
  };
  return (
    <div ref={componentStartRef} className="contact">
      <div className="experience-heading">{"Contact"}</div>
      <div className="contact-sec">
        <div className="contact-info">
          <div className="contact-info-box">
            <img
              className="contact-info-icon"
              src={process.env.PUBLIC_URL + "email.png"}
              alt="Email"
            />
            <div className="contact-info-text">vdhakar80@gmail.com</div>
          </div>
          <div className="contact-info-box">
            <img
              className="contact-info-icon"
              src={process.env.PUBLIC_URL + "address.png"}
              alt="Email"
            />
            <div className="contact-info-text">Gwalior, MP, India</div>
          </div>
          <div className="contact-info-box">
            <img
              className="contact-info-icon"
              src={process.env.PUBLIC_URL + "phone.png"}
              alt="Email"
            />
            <div className="contact-info-text">+91-9999999999</div>
          </div>
        </div>
        <div className="contact-form">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="contact-form-wrap">
              <input
                className="contact-form-input"
                type="text"
                placeholder="Name"
                name="user_name"
                value={user?.user_name}
                onChange={handleClick}
                required
              />
              <span style={{ color: "red" }}>{userError?.user_name}</span>
              <input
                className="contact-form-input"
                type="email"
                placeholder="Email"
                name="user_email"
                value={user?.user_email}
                onChange={handleClick}
                required
              />
              <span style={{ color: "red" }}>{userError?.user_email}</span>
              <input
                className="contact-form-input"
                type="text"
                placeholder="Subject"
                name="user_subject"
                value={user?.user_subject}
                onChange={handleClick}
                required
              />
              <textarea
                className="contact-form-input"
                placeholder="Message"
                name="message"
                value={user?.message}
                onChange={handleClick}
                required
              ></textarea>
              <button className="contact-form-button" type="submit">
                Submit
              </button>
              {done && (
                <span style={{ color: "green" }}>
                  Message Sent Successfully
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
      <SocialMediaLinks />
    </div>
  );
}

export default Contact;
