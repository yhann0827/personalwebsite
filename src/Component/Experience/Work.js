import React from "react";
import "./Work.scss";

const Work = () => {
  return (
    <div className="work__outerdiv">
      <div className="work__div">
        <div className="work__type">Programming Tutor</div>
        <div className="work__location__div">
          Heriot Watt University
          <span className="work__time">
            &nbsp;&nbsp;&nbsp;(Jan 2021 - July 2021)
          </span>
        </div>
        <div className="work__desc">
          <li className="workdesc__list">
            Recommended by lecturer to become a programming tutor who provides
            gidance and supports to students who are struggling with their
            studies.
          </li>
          <li className="workdesc__list">
            Conducted revision sessions for more than 20 computer science
            students every Tuesday and Thursday night, resulting in 10 of them
            achieved the highest possible grade.
          </li>
          <li className="workdesc__list">
            Applied my own teaching method to solve student's difficulties in
            classes, enhance their coding skills and gain better understanding
            in programming.
          </li>
          <li className="workdesc__list">
            Aided frustrated and confused foreign students by solving their
            difficulties in multiple languagues such as Mandarin and Malay.
          </li>
        </div>
      </div>
    </div>
  );
};
export default Work;
