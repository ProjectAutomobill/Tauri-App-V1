import React from "react";
import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting, AiFillPrinter } from "react-icons/ai";
import { GiNotebook } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import { invoke } from "@tauri-apps/api";
import "./expenses.css";
export const Expenses = (props) => {
  const [b_name, setNewBName] = useState();
  const navigate = useNavigate();

  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }
  function update_b_name_expenses() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: props.userCompany,
      bNameVal: b_name.toString(),
    });
  }
  return (
    <div className="main-expenses">
      <div className="upperDiv-expenses">
        <div className="upperDivPart1-expenses">
          <div className="input-business-expenses">
            {/* <input
              type="text"
              placeholder="•Enter Business Name"
              id="business-entry-expenses"
            ></input> */}
            <input
              type="text"
              placeholder="• Enter Business Name"
              id="business-entry-expenses"
              onChange={(e) => setNewBName(e.target.value)}
            ></input>
            <button
              id="business-name-save-btn-expenses"
              onClick={update_b_name_expenses}
            >
              Save
            </button>
          </div>

          <div className="marginDiv-expenses">
            <div className="saleBtnDiv-expenses">
              <BsFillPlusCircleFill className="plusSale-expenses" />
              {/* <button className="addBtnSale-expenses" onClick={navigateToSale}>
                Add Sale
              </button> */}
              <div className="addBtnSale-expenses">Add Sale</div>
            </div>
            <div className="purchaseBtnDiv-expenses">
              <BsFillPlusCircleFill className="plusPurchase-expenses" />
              {/* <button
                className="addBtnPurchase-expenses"
                onClick={navigateToPurchase}
              >
                Add Purchase
              </button> */}
              <div
                className="addBtnPurchase-expenses"
                // onClick={navigateToPurchase}
              >
                Add Purchase
              </div>
            </div>
            <div className="moreBtnDiv-expenses">
              <BsFillPlusCircleFill className="plusSaleMore-expenses" />
              <button className="addBtnMore-expenses">Add More</button>
            </div>
            <div className="vertical-line-upperPart-expenses"></div>

            <div className="settingBtnDiv-upperPart-expenses">
              <AiFillSetting className="setting-upperPart-expenses" />
            </div>
            <div className="printBtnDiv-upperPart-expenses">
              <AiFillPrinter className="print-upperPart-expenses" />
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

          {/* <button className="add-your-first-estimate-expenses">
            Add Expense
          </button> */}
          <div className="add-expense-button-div-expenses">
            <BsFillPlusCircleFill className="plusExpenseButton-expenses" />
            {/* <button className="addBtnSale-expenses" onClick={navigateToSale}>
                Add Sale
              </button> */}
            <div className="addBtnExpense-expenses">Add Sale</div>
          </div>
        </div>
      </div>
    </div>
  );
};
