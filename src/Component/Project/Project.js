import React from "react";
import "./Project.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  return (
    <div className="project__outerdiv">
      <div className="project__div">
        <div className="proImage__div proImage__div--portfolio">
          {/* <a href="https://yhann0827.github.io/Covid19/index.html"></a> */}

          <div className="link__div">
            <a
              className="link"
              href="https://yhann0827.github.io/personalwebsite/"
            >
              <FontAwesomeIcon icon={faLink} className="link_icon" />
              &nbsp;&nbsp;Go to repository
            </a>
          </div>
        </div>
        <div className="project__type">Web Application</div>
        <div className="project__title">Personal Website</div>

        <div className="project__language__div">
          <div className="project__language">React</div>
          <div className="project__language">CSS</div>
          <div className="project__language">SCSS</div>
          <div className="project__language">HTML</div>
          <div className="project__language">JavaScript</div>
        </div>
        <div className="link__div">
          <a
            className="link"
            href="https://yhann0827.github.io/Covid19/index.html"
          >
            <FontAwesomeIcon icon={faLink} className="link_icon" />
            &nbsp;&nbsp;Go to website
          </a>
        </div>
      </div>
      <div className="project__div">
        <div className="proImage__div proImage__div--covid">
          <a href="https://yhann0827.github.io/Covid19/index.html"></a>
        </div>
        <div className="project__type">Web Application</div>
        <div className="project__title">
          Website for Data and Information Related to COVID-19
        </div>

        <div className="project__language__div">
          <div className="project__language">HTML</div>
          <div className="project__language">CSS</div>
          <div className="project__language">JavaScript</div>
          <div className="project__language">SQLite</div>
          <div className="project__language">PHP</div>
        </div>
        <div className="link__div">
          <a
            className="link"
            href="https://yhann0827.github.io/Covid19/index.html"
          >
            <FontAwesomeIcon icon={faLink} className="link_icon" />
            &nbsp;&nbsp;Go to website
          </a>
        </div>
      </div>
      <div className="project__div">
        <div className=" proImage__div proImage__div--fos">
          {/* <a href="https://github.com/yhann0827/food_ordering_system"></a> */}
        </div>
        <div className="project__type">Java Application</div>
        <div className="project__title">Food Ordering System</div>

        <div className="project__language__div">
          <div className="project__language">Java</div>
        </div>
        <div className="link__div">
          <a
            className="link"
            href="https://github.com/yhann0827/food_ordering_system"
          >
            <FontAwesomeIcon icon={faLink} className="link_icon" />
            &nbsp;&nbsp;Go to repository
          </a>
        </div>
      </div>
    </div>
  );
};
export default Project;
