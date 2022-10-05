import React from "react";
import "./Header.scss";
import logo from "../../Photos/logo.PNG";
import pdf from "../../pdf/Choo Yong Hann Resume.pdf";
const Header = ({ handleClick, handleExpClick, handleProClick }) => {
  return (
    <React.Fragment>
      <div className="header__div">
        <header className="header">
          <img className="logo__img" src={logo} alt="logo" />
        </header>
        <div className="button__div">
          <button className="headerButton">
            <a a href={pdf} download="Choo Yong Hann Resume.pdf">
              My Resume
            </a>
          </button>
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
