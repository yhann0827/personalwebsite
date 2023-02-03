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
            Participated in the management of a large-scale event that involved
            over 40 universities and 100 students.
          </li>
          <li className="voldesc__list">
            Attended a two-day technical workshop to refine my skills and deepen
            my understanding of the computer science field.
          </li>
          <li className="voldesc__list">
            Provided exceptional customer service by answering questions and
            addressing concerns from university representatives and event
            attendees.
          </li>
          <li className="voldesc__list">
            Collaborated with a team of over 30 volunteers and staff to ensure
            the smooth and successful execution of the event.
          </li>
        </div>
      </div>
      <div className="transparent__div" />
    </div>
  );
};

export default Volunteer;
