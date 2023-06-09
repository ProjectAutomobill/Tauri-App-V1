import React, { useState } from "react";
import "./cashInHand.css";
import { AiOutlinePlus, AiFillPrinter } from "react-icons/ai";
import { CashInHandTable } from "../tables/cashInHandTable";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { invoke } from "@tauri-apps/api";

export const CashInHand = (props) => {
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();
  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }
  function update_b_name_cashInHand() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: props.userCompany,
      bNameVal: b_name.toString(),
    });
    // `invoke` returns a Promise
    // .then((response) => setBalance(parseInt(response)));
  }
  return (
    <div className="main-cashInHand">
      <div className="upperDiv-cashInHand">
        <div className="upperDivPart1-cashInHand">
          <div className="input-business-cashInHand">
            {/* <input
              type="text"
              placeholder="•Enter Business Name"
              id="business-entry-cashInHand"
            ></input> */}
            <input
              type="text"
              placeholder="• Enter Business Name"
              id="business-entry-cashInHand"
              onChange={(e) => setNewBName(e.target.value)}
            ></input>
            <button
              id="business-name-save-btn-cashInHand"
              onClick={update_b_name_cashInHand}
            >
              Save
            </button>
          </div>

          <div className="marginDiv-cashInHand">
            <div className="saleBtnDiv-cashInHand">
              <BsFillPlusCircleFill className="plusSale-cashInHand" />
              {/* <button
                className="addBtnSale-cashInHand"
                onClick={navigateToSale}
              >
                Add Sale
              </button> */}
              <div className="addBtnSale-cashInHand">Add Sale</div>
            </div>
            <div className="purchaseBtnDiv-cashInHand">
              <BsFillPlusCircleFill className="plusPurchase-cashInHand" />
              {/* <button
                className="addBtnPurchase-cashInHand"
                onClick={navigateToPurchase}
              >
                Add Purchase
              </button> */}
              <div
                className="addBtnPurchase-cashInHand"
                // onClick={navigateToPurchase}
              >
                Add Purchase
              </div>
            </div>
            <div className="moreBtnDiv-cashInHand">
              <BsFillPlusCircleFill className="plusSaleMore-cashInHand" />
              <button className="addBtnMore-cashInHand">Add More</button>
            </div>
            <div className="vertical-line-upperPart-cashInHand"></div>

            <div className="settingBtnDiv-upperPart-cashInHand">
              <AiFillSetting className="setting-upperPart-cashInHand" />
            </div>
            <div className="printBtnDiv-upperPart-cashInHand">
              <AiFillPrinter className="print-upperPart-cashInHand" />
            </div>
          </div>
        </div>
      </div>

      <div className="middleDiv-cashInHand">
        <h5 className="text-cashInHand">
          CASH IN HAND <span className="text-value-cashInHand">$0.00</span>
        </h5>
      </div>

      <div className="lowerDivSale-cashInHand">
        <div className="transaction-cashInHand">TRANSACTIONS</div>

        <div className="top-part-A-cashInHand">
          <input
            type="search"
            name=""
            id=""
            className="search-input-cashInHand"
            placeholder="Search"
          />
          {/* <Link to="/purchase"> */}
          <button
            className="addBtnSale-sale2-cashInHand"
            onClick={<Navigate to="/purchase" />}
          >
            <BsFillPlusCircleFill className="plus-cashInHand" />
            Adjust Cash
          </button>
          {/* </Link> */}
        </div>
        <CashInHandTable />
      </div>
    </div>
  );
};
