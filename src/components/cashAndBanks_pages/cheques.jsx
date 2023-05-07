import React, { useState } from "react";
import "./cheques.css";
import { AiOutlinePlus } from "react-icons/ai";
import { ChequesTable } from "../tables/chequesTable";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
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
              <button className="addBtnSale-cheques" onClick={navigateToSale}>
                Add Sale
              </button>
            </div>
            <div className="purchaseBtnDiv-cheques">
              <BsFillPlusCircleFill className="plusSale-purchase-cheques" />
              <button
                className="addBtnPurchase-cheques"
                onClick={navigateToPurchase}
              >
                Add Purchase
              </button>
            </div>
            <div className="moreBtnDiv-cheques">
              <BsFillPlusCircleFill className="plusSaleMore-cheques" />
              <button className="addBtnMore-cheques">Add More</button>
            </div>
            <div className="settingBtnDiv-cheques">
              <AiFillSetting className="setting-cheques" />
            </div>
          </div>
        </div>
      </div>

      <div className="middleDiv-cheques">
        <h4 className="text-cheques">CHEQUE DETAILS</h4>
      </div>
      <div className="lowerDivSale-cheques">
        <div className="top-part-A-cheques">
          <p className="top-part-text-cheques">TRANSACTIONS</p>
          <input
            type="search"
            name=""
            id=""
            className="search-input-cheques"
            placeholder="Search ..."
          />
        </div>
        <ChequesTable />
      </div>
    </div>
  );
};
