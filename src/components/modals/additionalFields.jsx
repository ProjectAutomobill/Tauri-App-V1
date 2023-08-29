import React from "react";
import "./additionalFields.css";
import { BsInfoCircle } from "react-icons/bs";
export const AdditionalFields = (props) => {
  return (
    <div className="partiesModal-additionalFields-content">
      <div className="leftSide-partiesModal-creditAndBalance">
        <div className="checkbox-data-partiesModal-additionalFields">
          <input
            type="checkbox"
            name=""
            className="checkbox-input-partiesModal-additionalFields"
          />
          {/* <div className="checkbox-data-text"></div> */}
          <input
            type="text"
            name=""
            className="checkbox-input-data-partiesModal-additionalFields"
            placeholder="Additional Field 1 name"
          />
        </div>
        <div className="checkbox-data-partiesModal-additionalFields">
          <input
            type="checkbox"
            name=""
            className="checkbox-input-partiesModal-additionalFields"
          />
          {/* <div className="checkbox-data-text"></div> */}
          <input
            type="text"
            name=""
            className="checkbox-input-data-partiesModal-additionalFields"
            placeholder="Additional Field 2 name"
          />
        </div>
        <div className="checkbox-data-partiesModal-additionalFields">
          <input
            type="checkbox"
            name=""
            className="checkbox-input-partiesModal-additionalFields"
          />
          {/* <div className="checkbox-data-text"></div> */}
          <input
            type="text"
            name=""
            className="checkbox-input-data-partiesModal-additionalFields"
            placeholder="Additional Field 3 name"
          />
        </div>
        <div className="checkbox-data-partiesModal-additionalFields">
          <input
            type="checkbox"
            name=""
            className="checkbox-input-partiesModal-additionalFields"
          />
          {/* <div className="checkbox-data-text"></div> */}
          <input
            type="text"
            name=""
            className="checkbox-input-data-partiesModal-additionalFields"
            placeholder="Additional Field 4 name"
          />
        </div>
      </div>
    </div>
  );
};
