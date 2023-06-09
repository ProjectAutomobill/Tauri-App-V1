import React, { useState } from "react";
import "./cheques.css";
import { AiOutlinePlus } from "react-icons/ai";
import { ChequesTable } from "../tables/chequesTable";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting, AiFillPrinter } from "react-icons/ai";
import { invoke } from "@tauri-apps/api";

export const Cheques = (props) => {
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();
  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }
  function update_b_name_cheques() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: props.userCompany,
      bNameVal: b_name.toString(),
    });
    // `invoke` returns a Promise
    // .then((response) => setBalance(parseInt(response)));
  }
  return (
    <div className="main-cheques">
      <div className="upperDiv-cheques">
        <div className="upperDivPart1-cheques">
          <div className="input-business-cheques">
            {/* <input
              type="text"
              placeholder="•Enter Business Name"
              id="business-entry-cheques"
            ></input> */}
            <input
              type="text"
              placeholder="• Enter Business Name"
              id="business-entry-cheques"
              onChange={(e) => setNewBName(e.target.value)}
            ></input>
            <button
              id="business-name-save-btn-cheques"
              onClick={update_b_name_cheques}
            >
              Save
            </button>
          </div>

          <div className="marginDiv-cheques">
            <div className="saleBtnDiv-cheques">
              <BsFillPlusCircleFill className="plusSale-cheques" />
              {/* <button className="addBtnSale-cheques" onClick={navigateToSale}>
                Add Sale
              </button> */}
              <div className="addBtnSale-loanAccounts">Add Sale</div>
            </div>
            <div className="purchaseBtnDiv-cheques">
              <BsFillPlusCircleFill className="plusPurchase-cheques" />
              {/* <button
                className="addBtnPurchase-cheques"
                onClick={navigateToPurchase}
              >
                Add Purchase
              </button> */}
              <div
                className="addBtnPurchase-loanAccounts"
                // onClick={navigateToPurchase}
              >
                Add Purchase
              </div>
            </div>
            <div className="moreBtnDiv-cheques">
              <BsFillPlusCircleFill className="plusSaleMore-cheques" />
              <button className="addBtnMore-cheques">Add More</button>
            </div>
            <div className="vertical-line-upperPart-cheques"></div>

            <div className="settingBtnDiv-upperPart-loanAccounts">
              <AiFillSetting className="setting-upperPart-loanAccounts" />
            </div>
            <div className="printBtnDiv-upperPart-loanAccounts">
              <AiFillPrinter className="print-upperPart-loanAccounts" />
            </div>
          </div>
        </div>
      </div>

      <div className="middleDiv-cheques">
        <h6 className="text-cheques">CHEQUE DETAILS</h6>
      </div>
      <div className="lowerDivSale-cheques">
        <div className="top-part-A-cheques">
          <div className="transaction-cashInHand">TRANSACTIONS</div>

          <input
            type="search"
            name=""
            id=""
            className="search-input-cheques"
            placeholder="Search"
          />
        </div>
        <ChequesTable />
      </div>
    </div>
  );
};
