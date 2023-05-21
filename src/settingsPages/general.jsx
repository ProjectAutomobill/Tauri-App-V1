import React from "react";
import "./general.css";
import { AiFillInfoCircle } from "react-icons/ai";
export const General = () => {
  return (
    <div className="mainBody-general">
      <div className="partA-general">
        <div className="heading-general-setting">
          <div className="heading-text-div-setting">Application</div>
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Enable Passcode</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <div className="checkbox-data-text">Business Currency</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <div className="checkbox-data-text">Amount</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">GSTIN Number</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="heading-general-setting">
          <div className="heading-text-div-setting">More Transactions</div>
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Estimate/Quotation</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Sale/Purchase Order</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Other Income</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Fixed Assets (FA)</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Delivery Challan</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <div className="margin-div-general"></div>
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">
            Goods return on <b>Delivery Challan</b>
          </div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
        <div className="checkbox-data">
          <div className="margin-div-general"></div>
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">
            Print amount in <b>Delivery Challan</b>
          </div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
      </div>
      <div className="partA-general">
        <div className="heading-general-setting">
          <div className="heading-text-div-setting">Multi Firm</div>
        </div>
        <div className="checkbox-data-multifirm">
          <input type="radio" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Company</div>
          <div className="default-multifirm">Default</div>
          {/* <AiFillInfoCircle className="information-icon-general" /> */}
        </div>
      </div>
      <div className="partA-general">
        <div className="heading-general-setting">
          <div className="heading-text-div-setting">Backup</div>
        </div>
        <div className="checkbox-data">
          <input type="checkbox" name="" className="checkbox-input" />
          <div className="checkbox-data-text">Auto Backup</div>
          <AiFillInfoCircle className="information-icon-general" />
        </div>
      </div>
    </div>
  );
};
