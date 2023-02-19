import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { GiNotebook } from "react-icons/gi";
import "./expenses.css";
export const Expenses = () => {
  return (
    <div className="main-expenses">
      <div className="upperDiv-expenses">
        <div className="upperDivPart1-expenses">
          <div className="input-business-expenses">
            <input
              type="text"
              placeholder="•Enter Business Name"
              id="business-entry-expenses"
            ></input>
          </div>

          <div className="marginDiv-expenses">
            <div className="saleBtnDiv-expenses">
              <BsFillPlusCircleFill className="plusSale-expenses" />
              <button className="addBtnSale-expenses">Add Sale</button>
            </div>
            <div className="purchaseBtnDiv-expenses">
              <BsFillPlusCircleFill className="plusSale-purchase-expenses" />
              <button className="addBtnPurchase-expenses">Add Purchase</button>
            </div>
            <div className="moreBtnDiv-expenses">
              <BsFillPlusCircleFill className="plusSaleMore-expenses" />
              <button className="addBtnMore-expenses">Add More</button>
            </div>
            <div className="settingBtnDiv-expenses">
              <AiFillSetting className="setting-expenses" />
            </div>
          </div>
        </div>
        {/* <div className="horizontal-line-expenses"></div>
        <h3 className="heading-expenses">ORDERS</h3> */}
      </div>

      <div className="lowerBody-expenses">
        <div className="lowerBody-part1-expenses">
          <GiNotebook className="image-expenses" />
          <br></br>
          <br></br>
          <p className="paragraph-expenses">
            Add your 1st Expense
            <br></br>
            <br></br>
            Record your business expenses & know your real profits.
          </p>
          <br></br>

          <button className="add-your-first-estimate-expenses">
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};
