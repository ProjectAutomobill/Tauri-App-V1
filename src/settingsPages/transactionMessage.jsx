import React from "react";
import "./transactionMessage.css";
import { AiFillInfoCircle } from "react-icons/ai";

export const TransactionMessage = () => {
  return (
    <div className="mainBody-TM">
      <div className="part-TM">
        <div className="heading-TM-setting">
          <div className="heading-text-div-setting">Transaction Message</div>
        </div>
        <div className="flex-data-TM">
          <div className="checkbox-data-TM">
            <input type="checkbox" name="" className="checkbox-input-TM" />
            <div className="checkbox-data-text-TM">Send SMS to Party</div>
            <AiFillInfoCircle className="information-icon-TM" />
          </div>
          <div className="checkbox-data-TM">
            <input type="checkbox" name="" className="checkbox-input-TM" />
            <div className="checkbox-data-text-TM">Send SMS Copy to Self</div>
            <AiFillInfoCircle className="information-icon-TM" />
          </div>
          <div className="checkbox-data-TM">
            <input type="checkbox" name="" className="checkbox-input-TM" />
            <div className="checkbox-data-text-TM">
              Send Transaction Update SMS
            </div>
            <AiFillInfoCircle className="information-icon-TM" />
          </div>
        </div>
        <div className="small-text-TM">
          <div className="small-text-TM-inner">SMS Settings :</div>
          <AiFillInfoCircle className="small-info-icon-TM" />
        </div>
        <div className="checkbox-data-TM-With-less-Padding">
          <input type="checkbox" name="" className="checkbox-input-TM" />
          <div className="checkbox-data-text-TM">
            Party Current Balance in SMS
          </div>
          <AiFillInfoCircle className="information-icon-TM" />
        </div>
        <div className="checkbox-data-TM-With-less-Padding">
          <input type="checkbox" name="" className="checkbox-input-TM" />
          <div className="checkbox-data-text-TM">Web invoice link in SMS</div>
          <AiFillInfoCircle className="information-icon-TM" />
        </div>
        <div className="small-text-TM">
          <div className="small-text-TM-inner">Automatic SMS For :</div>
          <AiFillInfoCircle className="small-info-icon-TM" />
        </div>
        <div className="checkbox-data-TM-With-less-Padding">
          <input type="checkbox" name="" className="checkbox-input-TM" />
          <div className="checkbox-data-text-TM">Sales</div>
          <AiFillInfoCircle className="information-icon-TM" />
        </div>
        <div className="checkbox-data-TM-With-less-Padding">
          <input type="checkbox" name="" className="checkbox-input-TM" />
          <div className="checkbox-data-text-TM">Purchase</div>
          <AiFillInfoCircle className="information-icon-TM" />
        </div>
        <div className="checkbox-data-TM-With-less-Padding">
          <input type="checkbox" name="" className="checkbox-input-TM" />
          <div className="checkbox-data-text-TM">Sale Return</div>
          <AiFillInfoCircle className="information-icon-TM" />
        </div>
        <div className="checkbox-data-TM-With-less-Padding">
          <input type="checkbox" name="" className="checkbox-input-TM" />
          <div className="checkbox-data-text-TM">Purchase Return</div>
          <AiFillInfoCircle className="information-icon-TM" />
        </div>
        <div className="checkbox-data-TM-With-less-Padding">
          <input type="checkbox" name="" className="checkbox-input-TM" />
          <div className="checkbox-data-text-TM">Payment In</div>
          <AiFillInfoCircle className="information-icon-TM" />
        </div>
        <div className="checkbox-data-TM-With-less-Padding">
          <input type="checkbox" name="" className="checkbox-input-TM" />
          <div className="checkbox-data-text-TM">Payment Out</div>
          <AiFillInfoCircle className="information-icon-TM" />
        </div>
        <div className="checkbox-data-TM-With-less-Padding">
          <input type="checkbox" name="" className="checkbox-input-TM" />
          <div className="checkbox-data-text-TM">Sale Order</div>
          <AiFillInfoCircle className="information-icon-TM" />
        </div>
        <div className="checkbox-data-TM-With-less-Padding">
          <input type="checkbox" name="" className="checkbox-input-TM" />
          <div className="checkbox-data-text-TM">Purchase Order</div>
          <AiFillInfoCircle className="information-icon-TM" />
        </div>
        <div className="checkbox-data-TM-With-less-Padding">
          <input type="checkbox" name="" className="checkbox-input-TM" />
          <div className="checkbox-data-text-TM">Estimate</div>
          <AiFillInfoCircle className="information-icon-TM" />
        </div>
        <div className="checkbox-data-TM-With-less-Padding">
          <input type="checkbox" name="" className="checkbox-input-TM" />
          <div className="checkbox-data-text-TM">Delivery Challan</div>
          <AiFillInfoCircle className="information-icon-TM" />
        </div>
      </div>
    </div>
  );
};
