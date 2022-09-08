import React from "react";
import "./Hackathon.scss";

const Hackathon = () => {
  return (
    <div className="outerdiv">
      <div className="comp__type-outerdiv">
        <span className="comp__type">Hackathon</span>
      </div>
      <div className="competition__outerdiv">
        <div className="hackComp">
          <div className="comp__title">AIA Hackathon 2022</div>
          <div className="prize__div">
            <div className="prize prize--gold">Best Pitch Prize</div>
            <div className="prize prize--bronze">Semi-finalist</div>
          </div>
          <div className="description__div">
            <div className="description">
              <li className="hack__list"></li>
            </div>
          </div>
          <div className="prototype__div">
            <button className="prototype">
              <a href="https://www.figma.com/proto/AUFOlpAJRjsafGqjMaI2yl/AIA-Hackathon?node-id=14%3A3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=14%3A3">
                View Prototype
              </a>
            </button>
          </div>
        </div>
        <div className="hackComp">
          <div className="comp__title">Varsity Hackathon 2022</div>
          <div className="description__div">
            <div className="description">
              <li className="hack__list"></li>
            </div>
          </div>
          <div className="prototype__div">
            <button className="prototype">
              <a href="https://www.figma.com/proto/JfNRTGF286BibfDNcAIxZc/WeCare?node-id=65%3A2766&starting-point-node-id=65%3A2766">
                View Prototype
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hackathon;
