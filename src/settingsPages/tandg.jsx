import React from "react";
import "./tandg.css";
import { AiFillInfoCircle } from "react-icons/ai";

export const TandG = () => {
  return (
    <div className="mainBody-tandg">
      <div className="partA-tandg">
        <div className="heading-general-setting">
          <div className="heading-text-div-setting">GST Settings</div>
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Enable GST</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Enable HSN/SAC Code</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Additional Cess On Item</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Reverse Charge</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Enable Place of Supply</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Composite Scheme</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Enable TCS</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
      </div>
    </div>
  );
};
