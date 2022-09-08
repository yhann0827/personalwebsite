import React from "react";
import "./Header.scss";

const Header = ({ handleClick, handleExpClick, handleProClick }) => {
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
          <button onClick={() => handleExpClick()} className="headerButton">
            Experience
          </button>
          <button onClick={() => handleProClick()} className="headerButton">
            Project
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
