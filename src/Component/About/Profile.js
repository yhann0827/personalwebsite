import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Profile.scss";
const Profile = () => {
  return (
    <React.Fragment>
      <div className="sub__title">
        <FontAwesomeIcon icon={faUser} />
        &nbsp;&nbsp;Profile
      </div>
      <div className="para">
        A second-year computer science student enthusiastic in programming and
        technology. I am also a detail-oriented individual with strong
        problem-solving and collaborative skills. Currently seeking an
        internship opportunity in the field of computer science to further
        develop, improve and use the gained knowledge through my studies and
        work experience.
      </div>
    </React.Fragment>
  );
};
export default Profile;
