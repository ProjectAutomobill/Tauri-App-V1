import React from "react";
import "./cheques.css";
import { AiOutlinePlus } from "react-icons/ai";
import { ChequesTable } from "../tables/chequesTable";
import { Navigate, Link } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
export const Cheques = () => {
  return (
    <div className="main-cheques">
      <div className="upperDiv-cheques">
        <div className="upperDivPart1-cheques">
          <div className="input-business-cheques">
            <input
              type="text"
              placeholder="•Enter Business Name"
              id="business-entry-cheques"
            ></input>
          </div>

          <div className="marginDiv-cheques">
            <div className="saleBtnDiv-cheques">
              <BsFillPlusCircleFill className="plusSale-cheques" />
              <button className="addBtnSale-cheques">Add Sale</button>
            </div>
            <div className="purchaseBtnDiv-cheques">
              <BsFillPlusCircleFill className="plusSale-purchase-cheques" />
              <button className="addBtnPurchase-cheques">Add Purchase</button>
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
