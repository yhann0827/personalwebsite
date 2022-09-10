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
                Attended multiple training workshops hosted by the training
                partners, such as algorithm workshop, to gain more knowledge and
                enhance my programming skills.
              </li>
              <li className="progComp__list">
                Improved my problem-solving skills and thinking ability since
                the algorithm puzzles need to be solved within the time limit.
                This has increase my productivity and effeciency in my daily
                life.
              </li>
              <li className="progComp__list">
                Leant about the importance of communication and teamwork.
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
                Took part with 2 computer science students to sharpen my coding
                skills.
              </li>
              <li className="progComp__list">
                Gained a lot of new knowledge and learnt different fundamental
                concepts of programming.
              </li>
              <li className="progComp__list">
                Strengthen my logical and analytical thinking skills.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProgrammingComp;
