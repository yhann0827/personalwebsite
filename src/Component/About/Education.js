import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Education.scss";
const Education = () => {
  return (
    <React.Fragment>
      <div className="sub__title">
        <FontAwesomeIcon icon={faBook} />
        &nbsp;&nbsp;Education
      </div>
      <div className="edu">
        Bachelor of Computer Science with Artificial Intelligence (Honours)
      </div>
      <div className="para para--school">
        University of Leeds &nbsp;&nbsp;
        <span className="date">(2021 - Present)</span>
      </div>

      <div className="para para--result">First Year GPA: 4.0/4.0</div>
      <div className="edu">Foundation in Science</div>
      <div className="para para--school">
        Heriot-Watt University &nbsp;&nbsp;
        <span className="date">(2020 - 2021)</span>
      </div>

      <div className="para para--result">GPA: 4.0/4.0</div>

      <div className="edu">Malaysian Certificate of Education</div>
      <div className="para para--school">
        Chung Hwa National School, Malaysia &nbsp;&nbsp;
        <span className="date">(2015 - 2019)</span>
      </div>

      <div className="para para--spm">Result: 9A* 1A</div>
    </React.Fragment>
  );
};
export default Education;
