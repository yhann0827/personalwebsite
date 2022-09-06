import React from "react";
import "./Header.scss";

const Header = ({ handleClick }) => {
  return (
    <React.Fragment>
      <div className="header__div">
        <header className="header">
          <h1 className="font">YH's Space</h1>
        </header>
        <div className="button__div">
          <button className="headerButton">My Resume</button>
          <button onClick={() => handleClick()} className="headerButton">
            About Me
          </button>
          <button className="headerButton">Experience</button>
          <button className="headerButton">Project</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
