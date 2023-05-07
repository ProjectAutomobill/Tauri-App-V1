import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { Navigate, Link, useNavigate } from "react-router-dom";
// import {FiSearch} from 'react-icons/fi';
// import {AiOutlinePlus} from 'react-icons/ai';
import { BsBank } from "react-icons/bs";
// import { Link } from 'react-router-dom';
import { invoke } from "@tauri-apps/api";

import "./loanAccounts.css";
export const LoanAccounts = (props) => {
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();
  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }
  function update_b_name_loanAccounts() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: props.userCompany,
      bNameVal: b_name.toString(),
    });
    // `invoke` returns a Promise
    // .then((response) => setBalance(parseInt(response)));
  }
  return (
    <div className="main-loanAccounts">
      <div className="upperDiv-loanAccounts">
        <div className="upperDivPart1-loanAccounts">
          <div className="input-business-loanAccounts">
            {/* <input
              type="text"
              placeholder="•Enter Business Name"
              id="business-entry-loanAccounts"
            ></input> */}
            <input
              type="text"
              placeholder="• Enter Business Name"
              id="business-entry-loanAccounts"
              onChange={(e) => setNewBName(e.target.value)}
            ></input>
            <button
              id="business-name-save-btn-loanAccounts"
              onClick={update_b_name_loanAccounts}
            >
              Save
            </button>
          </div>

          <div className="marginDiv-loanAccounts">
            <div className="saleBtnDiv-loanAccounts">
              <BsFillPlusCircleFill className="plusSale-loanAccounts" />
              <button
                className="addBtnSale-loanAccounts"
                onClick={navigateToSale}
              >
                Add Sale
              </button>
            </div>
            <div className="purchaseBtnDiv-loanAccounts">
              <BsFillPlusCircleFill className="plusSale-purchase-loanAccounts" />
              <button
                className="addBtnPurchase-loanAccounts"
                onClick={navigateToPurchase}
              >
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
        <div className="heading-loanAccounts">LOAN ACCOUNTS</div>
        <div
          className="horizontal-line-loanAccounts"
          id="blue-line-loanAccounts"
        ></div>
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
