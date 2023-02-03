import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import "./Skills.scss";
const Skills = () => {
  return (
    <React.Fragment>
      <div className="skills_outerdiv">
        <div className="hardskill__outerdiv">
          <div className="sub__title sub__title--skills">
            <FontAwesomeIcon icon={faComputer} />
            &nbsp;&nbsp;Technical (IT) Skills
          </div>
          <div className="title">Languages</div>
          <div className="para--result">
            Java, HTML, CSS, SCSS, JavaScript, C++, C, Python, PHP, React,
            jQuery
          </div>
          <div className="title">Database Management</div>
          <div className="para--result">SQLite, MYSQL, MS Access</div>
          <div className="title">Tools</div>
          <div className="para--result2">
            Visual Studio Code, Atom, NetBeans, GitHub
          </div>
        </div>
        <div className="softskills__outerdiv">
          <div className="sub__title ">
            <FontAwesomeIcon icon={faFaceSmile} />
            &nbsp;&nbsp;Soft Skills
          </div>
          <div className="softskills_div">
            <div className="softskills">Communication</div>
            <div className="softskills">Teamwork</div>
            <div className="softskills">Flexibility</div>
            <div className="softskills">Confidence</div>
            <div className="softskills">Problem-Solving</div>
            <div className="softskills">Self-Management</div>
            <div className="softskills">Responsibility</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Skills;
