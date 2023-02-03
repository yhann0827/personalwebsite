import React from "react";
import "./Work.scss";

const Work = () => {
  return (
    <div className="work__outerdiv">
      <div className="work__div">
        <div className="work__type">
          Programming Tutor (HTML, CSS, JS, Java)
        </div>
        <div className="work__location__div">
          Heriot Watt University
          <span className="work__time">
            &nbsp;&nbsp;&nbsp;(Jan 2021 - July 2021)
          </span>
        </div>
        <div className="work__desc">
          <li className="workdesc__list">
            Selected by lecturer to serve as a programming tutor, providing
            individualized support to students facing challenges in their
            studies.
          </li>
          <li className="workdesc__list">
            Demonstrated strong communication and interpersonal skills by
            effectively facilitating weekly revision sessions for over 20
            computer science students, resulting in 10 students earning the top
            grade.
          </li>
          <li className="workdesc__list">
            Implemented an effective teaching method to help students overcome
            difficulties, improve their coding abilities, and deepen their
            understanding of programming concepts, including proficiency in
            Python and Java.
          </li>
          <li className="workdesc__list">
            Utilized problem-solving and critical thinking skills to help
            students overcome obstacles and understand complex programming
            concepts.
          </li>
        </div>
      </div>
    </div>
  );
};
export default Work;
