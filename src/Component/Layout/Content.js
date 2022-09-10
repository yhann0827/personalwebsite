import React, { useRef } from "react";
import Header from "./Header";
import "./Content.scss";
import MainPage from "./MainPage";
import Experience from "../Experience/Experience";
import Project from "../Project/Project";
import About from "../About/About";
import Education from "../About/Education";
import Profile from "../About/Profile";
import Skills from "../About/Skills";
import Interest from "../About/Interest";

const Content = () => {
  const ref = useRef(null);
  const expRef = useRef(null);
  const proRef = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleExpClick = () => {
    expRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleProClick = () => {
    proRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <Header
        handleClick={handleClick}
        handleExpClick={handleExpClick}
        handleProClick={handleProClick}
      />
      <MainPage handleClick={handleClick} />
      <div className="aboutMe__outerdiv">
        <div ref={ref} className="aboutMe">
          About Me
        </div>
        <div className="content__body__about">
          <section className="intro">
            <About />
          </section>
          <section className="about">
            <Profile />
            <Education />
            <Skills />
            <Interest />
          </section>
        </div>
      </div>
      {/* <div className="divider" /> */}
      <div className="content__body__exp">
        <div ref={expRef} className="exp">
          Experience
        </div>
        <Experience />
      </div>
      <div ref={proRef} className="content__body__project">
        <div className="project">Project</div>
        <Project />
      </div>
    </React.Fragment>
  );
};

export default Content;
