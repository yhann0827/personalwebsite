import React from "react";
import "./Interest.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
const Interest = () => {
  return (
    <React.Fragment>
      <div className="sub__title">
        <FontAwesomeIcon icon={faHeart} />
        &nbsp;&nbsp;Interest
      </div>
      <div className="interest_div">
        <div className="interest">
          <FontAwesomeIcon icon={faRobot} /> &nbsp;Artificial Intelligence
        </div>
        <div className="interest">
          <FontAwesomeIcon icon={faPlane} /> &nbsp;Travelling
        </div>
        <div className="interest">
          <FontAwesomeIcon icon={faBook} /> &nbsp;Reading
        </div>
        <div className="interest">
          <FontAwesomeIcon icon={faBasketball} /> &nbsp;Exercise
        </div>
        <div className="interest">
          <FontAwesomeIcon icon={faComputer} /> &nbsp;Programming
        </div>
      </div>
    </React.Fragment>
  );
};
export default Interest;
