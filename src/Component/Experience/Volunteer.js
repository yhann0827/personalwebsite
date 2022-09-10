import React from "react";
import "./Volunteer.scss";
const Volunteer = () => {
  return (
    <div className="vol__outerdiv">
      <div className="vol__div">
        <div className="vol__type">
          Student Manager of University Placement Fair
        </div>
        <div className="vol__location__div">
          Taylor's University
          <span className="vol__time">&nbsp;&nbsp;&nbsp;(August 2022)</span>
        </div>
        <div className="vol__desc">
          <li className="voldesc__list">
            Helped to manage the event which was participated by more than 40
            universities and 100 students.
          </li>
          <li className="voldesc__list">
            Attend a two-day training workshop to strengthen my skills and
            knowledge of the job as well as boost my confidence in my abilities
            before volunteering.
          </li>
          <li className="voldesc__list">
            Assist the guests and university representatives by answering a
            variety of questions about the event.
          </li>
          <li className="voldesc__list">
            Collaborated with more than 30 volunteers and staffs to make the
            event successful.
          </li>
        </div>
      </div>
      <div className="transparent__div" />
    </div>
  );
};

export default Volunteer;
