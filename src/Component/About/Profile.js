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
        A computer science student enthusiastic in programming and technology.
      </div>
    </React.Fragment>
  );
};
export default Profile;
