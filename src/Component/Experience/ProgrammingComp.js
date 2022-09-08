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
          <div className="comp__title">Shopee Code League 2022</div>
          <div className="prize__div">
            <div className="prize prize--silver">
              Top 10% of 1000+ Competitors
            </div>
          </div>
          <div className="description__div">
            <div className="description">
              <li className="progComp__list"></li>
            </div>
          </div>
        </div>
        <div className="hackComp">
          <div className="comp__title">Porgramming League National 2022</div>
          <div className="description__div">
            <div className="description">
              <li className="progComp__list"></li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProgrammingComp;
