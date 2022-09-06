import "./About.scss";
import React from "react";
import profile from "../../Photos/profile.png";

const About = () => {
  return (
    <React.Fragment>
      <img className="profilepic" src={profile} alt="profile pic" />
      <div className="name">Choo Yong Hann</div>
    </React.Fragment>
  );
};
export default About;
