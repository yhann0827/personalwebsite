import "./About.scss";
import React from "react";
import profile from "../../Photos/photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { fagithub } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <React.Fragment>
      <img className="profilepic" src={profile} alt="profile pic" />
      <div className="name">Choo Yong Hann</div>
      <div className="contact__div">
        <div className="contact">
          <FontAwesomeIcon icon={faEnvelope} />{" "}
          &nbsp;&nbsp;yonghannchoo@gmail.com
        </div>
        <div className="contact">
          <FontAwesomeIcon icon={faPhone} /> &nbsp;&nbsp;+6019-9494626
        </div>
        <div className="contact">
          <FontAwesomeIcon icon={faLocation} /> &nbsp;&nbsp; Leeds, United
          Kingdom
        </div>
        <div className="contact">
          <FaLinkedin />
          &nbsp;&nbsp;{" "}
          <a
            href="https://www.linkedin.com/in/yonghann-choo/"
            className="github"
          >
            linkedin.com/in/yonghann-choo/
          </a>
        </div>
        <div className="contact">
          <FaGithub /> &nbsp;&nbsp;{" "}
          <a href="https://github.com/yhann0827" className="github">
            https://github.com/yhann0827
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};
export default About;
