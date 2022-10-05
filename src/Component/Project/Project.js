import React from "react";
import "./Project.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  return (
    <div className="project__outerdiv">
      <div className="project__div project__div--portfolio">
        <div className="proImage__div proImage__div--portfolio">
          <div className="link__div">
            <a
              className="link"
              href="https://yhann0827.github.io/personalwebsite/"
            >
              <FontAwesomeIcon icon={faLink} className="link_icon" />
              &nbsp;&nbsp;Go to website
            </a>
          </div>
        </div>
        <div className="project__type">Web Application</div>
        <div className="project__title">
          Build a Personal Website using React JS
        </div>
        <div className="project__language__div">
          <div className="project__language">
            React / CSS / SCSS / HTML / JavaScript
          </div>
        </div>
        <div className="projectdesc__div">
          <div className="project__desc">
            <li>
              Utilised React as main framework to build a detailed portfolio.
            </li>
            <li>
              Utilized SCSS concepts such as flexbox and grid for modern UI
              design.
            </li>
          </div>
        </div>
      </div>
      <div className="project__div project__div--weathernow">
        <div className="proImage__div proImage__div--weathernow">
          <div className="link__div">
            <a className="link" href="https://yhann0827.github.io/weathernow/">
              <FontAwesomeIcon icon={faLink} className="link_icon" />
              &nbsp;&nbsp;Go to website
            </a>
          </div>
        </div>
        <div className="project__type">Web Application</div>
        <div className="project__title">
          Built a Responsive Weather Website using ReactJS
        </div>
        <div className="project__language__div">
          <div className="project__language">
            HTML / CSS / JavaScript / React / OpenWeatherAPI
          </div>
        </div>
        <div className="projectdesc__div">
          <div className="project__desc">
            <li>
              Built a responsive design for both PC and mobile version using
              CSS.
            </li>
            <li>
              Implemented OpenWeatherAPI to fetch the relevant weather data.
            </li>
            <li>
              Utilized React Hook to build modern and reusable components.
            </li>
          </div>
        </div>
      </div>
      <div className="project__div project__div--covid">
        <div className="proImage__div proImage__div--covid">
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
        <div className="project__type">Web Application</div>
        <div className="project__title">
          Website for Data and Information Related to COVID-19
        </div>
        <div className="project__language__div">
          <div className="project__language">
            HTML / CSS / JavaScript / SQLite / PHP
          </div>
        </div>
        <div className="projectdesc__div">
          <div className="project__desc">
            <li>
              A website built using HTML used to provide guidance and
              information on all topics related to COVID-19.
            </li>
            <li>
              Utilised various CSS concepts to make sure the UI design of the
              website is simple yet modern.
            </li>
            <li>
              SQLite and PHP are used to manage the databse of the system.
            </li>
          </div>
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
      <div className="project__div project__div--fos">
        <div className=" proImage__div proImage__div--fos">
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
        <div className="project__type">Java GUI Application</div>
        <div className="project__title">Food Ordering System</div>
        <div className="project__language__div">
          <div className="project__language">Java</div>
        </div>
        <div className="projectdesc__div">
          <div className="project__desc">
            <li>
              Utilised Java Swing packages to build GUI components for the
              system.
            </li>
            <li>
              Implement various concepts and classes like JFrame to build the
              app.
            </li>
          </div>
        </div>
      </div>
      <div className="project__div project__div--ogs">
        <div className=" proImage__div proImage__div--ogs">
          <div className="link__div">
            <a
              className="link"
              href="https://github.com/yhann0827/online_grocery_shop"
            >
              <FontAwesomeIcon icon={faLink} className="link_icon" />
              &nbsp;&nbsp;Go to repository
            </a>
          </div>
        </div>
        <div className="project__type">Java Console Application</div>
        <div className="project__title">Online Grocery Shop</div>
        <div className="project__language__div">
          <div className="project__language">Java</div>
        </div>
        <div className="projectdesc__div">
          <div className="project__desc">
            <li>
              Implemented various programming process to ensure the system works
              for both customers and sellers.
            </li>
            <li>
              User authentication is implemented to verify the identity of a
              user attempting to gain access as an admin.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
