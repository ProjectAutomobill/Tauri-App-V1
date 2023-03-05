import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
// import {FiSearch} from 'react-icons/fi';
// import {AiOutlinePlus} from 'react-icons/ai';
import { BsBank } from "react-icons/bs";
// import { Link } from 'react-router-dom';
import "./loanAccounts.css";
export const LoanAccounts = () => {
  return (
    <div className="main-loanAccounts">
      <div className="upperDiv-loanAccounts">
        <div className="upperDivPart1-loanAccounts">
          <div className="input-business-loanAccounts">
            <input
              type="text"
              placeholder="•Enter Business Name"
              id="business-entry-loanAccounts"
            ></input>
          </div>

          <div className="marginDiv-loanAccounts">
            <div className="saleBtnDiv-loanAccounts">
              <BsFillPlusCircleFill className="plusSale-loanAccounts" />
              <button className="addBtnSale-loanAccounts">Add Sale</button>
            </div>
            <div className="purchaseBtnDiv-loanAccounts">
              <BsFillPlusCircleFill className="plusSale-purchase-loanAccounts" />
              <button className="addBtnPurchase-loanAccounts">
                Add Purchase
              </button>
            </div>
            <div className="moreBtnDiv-loanAccounts">
              <BsFillPlusCircleFill className="plusSaleMore-loanAccounts" />
              <button className="addBtnMore-loanAccounts">Add More</button>
            </div>
            <div className="settingBtnDiv-loanAccounts">
              <AiFillSetting className="setting-loanAccounts" />
            </div>
          </div>
        </div>
        <div className="horizontal-line-loanAccounts"></div>
        <h3 className="heading-loanAccounts">LOAN ACCOUNTS</h3>
      </div>

      <div className="lowerBody-loanAccounts">
        <div className="lowerBody-part1-loanAccounts">
          <BsBank className="image-loanAccounts" />
          <p className="paragraph-loanAccounts">
            Add your loan accounts & track loan transactions all at one place.
          </p>
          <button className="add-your-first-estimate-loanAccounts">
            Add Your First Loan A/C
          </button>
        </div>
      </div>
    </div>
  );
};
