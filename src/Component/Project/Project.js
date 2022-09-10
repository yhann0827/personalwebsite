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
        <div className="project__title">Personal Website</div>
        <div className="projectdesc__div">
          <div className="project__desc">
            Portfolio website built with React that consists of my personal
            information, resume, experience and projects. UI design principles
            are applied to this website so that it is simple, beautiful and easy
            to navigate.
          </div>
        </div>
        <div className="project__language__div">
          <div className="project__language">React</div>
          <div className="project__language">CSS</div>
          <div className="project__language">SCSS</div>
          <div className="project__language">HTML</div>
          <div className="project__language">JavaScript</div>
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
        <div className="projectdesc__div">
          <div className="project__desc">
            This website provides guidance and information on all topics related
            to COVID-19. For example, introduction to Covid-19, its symptoms,
            preventions, vaccines and statistics of cases in Malaysia. Users can
            view and update the database by inserting the number of cases of
            COVID-19 of that particular day and month.
          </div>
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
        <div className="projectdesc__div">
          <div className="project__desc">
            A Java application that uses Java Swing package to build the GUI
            components. It allows users to view both the food and drink the menu
            and place an order. The system is user-friendly, flexible and
            simple.
          </div>
        </div>
        <div className="project__language__div project__language__div--java">
          <div className="project__language">Java</div>
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
        <div className="projectdesc__div">
          <div className="project__desc">
            A Java console application that allows customers to view and
            purchase any food and drink items. It also allows users to login as
            an admin to sell and update the inventory. User authentication is
            used to verify the identity of a user attempting to gain access as
            an admin.
          </div>
        </div>
        <div className="project__language__div project__language__div--java">
          <div className="project__language">Java</div>
        </div>
      </div>
    </div>
  );
};
export default Project;
