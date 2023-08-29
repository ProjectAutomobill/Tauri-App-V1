import React from "react";
import "./creditAndBalance.css";
import { BsInfoCircle } from "react-icons/bs";
export const CreditAndBalance = (props) => {
  return (
    <div className="partiesModal-creditAndBalance-content">
      <div className="leftSide-partiesModal-creditAndBalance">
        <input
          type="email"
          name=""
          id=""
          placeholder="Opening Balance"
          className="partiesModal-creditAndBalance-dropdown"
        />
        <div className="feature-part-creditAndBalance">
          <div className="content-feature-tick-creditAndBalance">
            Credit Limit
          </div>
          <div className="info-feature-tick-creditAndBalance">
            <BsInfoCircle className="info-sign-creditAndBalance" />
          </div>
        </div>
        <div className="third-div-part-creditAndBalance">
          <div className="content-feature-tick-creditAndBalance">No Limit</div>
          <div className="info-feature-tick-creditAndBalance">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>{" "}
          </div>
          <div className="content-feature-tick-creditAndBalance">
            Custom Limit
          </div>
        </div>
      </div>
      {/* <div className="vertical-line-modal"></div> */}
      <div className="right-side-partiesModal-creditAndBalance">
        <input
          type="date"
          name=""
          id=""
          placeholder="As of date"
          className="partiesModal-date-creditAndBalance"
        />
      </div>
    </div>
  );
};
