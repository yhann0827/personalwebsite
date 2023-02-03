import React from "react";
import "./ProgrammingComp.scss";

const ProgrammingComp = () => {
  return (
    <div className="outerdiv">
      <div className="comp__type-outerdiv ">
        <span className="comp__type">Competitive Programming</span>
      </div>
      <div className="competition__outerdiv">
        <div className="hackComp">
          <a
            className="comp__title"
            href="https://careers.shopee.sg/codeleague/#:~:text=Shopee%20Code%20League%20is%20a,by%20our%20Shopee%20Engineering%20team."
          >
            Shopee League Code 2022
          </a>
          {/* <div className="prize__div">
            <div className="prize prize--silver">
              Top 10% of 1000+ Competitors
            </div>
          </div> */}
          <div className="description__div">
            <div className="description">
              <li className="progComp__list">
                Attended several training workshops hosted by various partners
                to expand my knowledge and sharpen my programming skills,
                including an algorithm workshop.
              </li>
              <li className="progComp__list">
                Enhanced my problem-solving abilities and critical thinking
                through the completion of algorithm puzzles within specified
                time constraints, resulting in increased productivity and
                efficiency in daily tasks.
              </li>
              <li className="progComp__list">
                Acquired an understanding of the significance of effective
                communication and the value of teamwork through workshops and
                training sessions.
              </li>
            </div>
          </div>
        </div>
        <div className="hackComp hackComp--pln">
          <a className="comp__title" href="https://www.programming-league.com/">
            Programming League National 2022
          </a>

          <div className="description__div">
            <div className="description">
              <li className="progComp__list">
                Collaborated with 2 computer science students to enhance my
                coding abilities.
              </li>
              <li className="progComp__list">
                Acquired a significant amount of new knowledge and familiarized
                myself with fundamental programming concepts.
              </li>
              <li className="progComp__list">
                Sharpened my logical and analytical thinking abilities.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProgrammingComp;
