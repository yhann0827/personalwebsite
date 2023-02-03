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
        As a second-year computer science student with a strong passion for
        programming and technology, I am known for my detail-oriented approach,
        exceptional problem-solving skills, and ability to effectively
        collaborate with others. I am actively seeking an internship opportunity
        in the field of computer science to further enhance my skills, apply the
        knowledge gained through my studies and work experience, and make
        valuable contributions to the organization.
      </div>
    </React.Fragment>
  );
};
export default Profile;
