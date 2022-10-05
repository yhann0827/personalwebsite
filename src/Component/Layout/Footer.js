import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Photos/logo.PNG";

const Footer = () => {
  return (
    <div className="footer__outerdiv">
      <img src={logo} alt="My Logo" className="footer__logo" />
      <div className="footer__component">
        <div className="footer">
          Design and built with <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="footer">Powered by React JS</div>
        <div className="footer">2022 @Choo Yong Hann</div>
      </div>
    </div>
  );
};

export default Footer;
