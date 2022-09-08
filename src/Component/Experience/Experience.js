import React from "react";
import "./Experience.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";
import Hackathon from "./Hackathon";
import ProgrammingComp from "./ProgrammingComp";

const Experience = () => {
  return (
    <div className="exp__outerdiv">
      <div className="competition__div">
        <FontAwesomeIcon icon={faTrophy} />
        &nbsp;&nbsp;Competition Experience
      </div>
      <Hackathon />
      <ProgrammingComp />

      <div className="work__divider" />
      <div className="exp__div">
        <FontAwesomeIcon icon={faBriefcase} />
        &nbsp;&nbsp;Work Experience
      </div>

      <div className="work__divider" />
      <div className="exp__div">
        <FontAwesomeIcon icon={faHandshakeAngle} />
        &nbsp;&nbsp;Volunteer Experience
      </div>
    </div>
  );
};
export default Experience;
