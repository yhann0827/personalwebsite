import React, { useRef } from "react";
import Header from "./Header";
import "./Content.scss";
import MainPage from "./MainPage";

import About from "../About/About";
import Education from "../About/Education";
import Profile from "../About/Profile";
import Skills from "../About/Skills";
import Interest from "../About/Interest";

const Content = () => {
  const ref = useRef(null);
  const expRef = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleExpClick = () => {
    expRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <Header handleClick={handleClick} />
      <MainPage handleClick={handleClick} />
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
      <hr />
    </React.Fragment>
  );
};

export default Content;
