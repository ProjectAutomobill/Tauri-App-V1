import React from "react";
import "./cashInHand.css";
import { AiOutlinePlus } from "react-icons/ai";
import { CashInHandTable } from "../tables/cashInHandTable";
import { Navigate, Link } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
export const CashInHand = () => {
  return (
    <div className="main-cashInHand">
      <div className="upperDiv-cashInHand">
        <div className="upperDivPart1-cashInHand">
          <div className="input-business-cashInHand">
            <input
              type="text"
              placeholder="•Enter Business Name"
              id="business-entry-cashInHand"
            ></input>
          </div>

          <div className="marginDiv-cashInHand">
            <div className="saleBtnDiv-cashInHand">
              <BsFillPlusCircleFill className="plusSale-cashInHand" />
              <button className="addBtnSale-cashInHand">Add Sale</button>
            </div>
            <div className="purchaseBtnDiv-cashInHand">
              <BsFillPlusCircleFill className="plusSale-purchase-cashInHand" />
              <button className="addBtnPurchase-cashInHand">
                Add Purchase
              </button>
            </div>
            <div className="moreBtnDiv-cashInHand">
              <BsFillPlusCircleFill className="plusSaleMore-cashInHand" />
              <button className="addBtnMore-cashInHand">Add More</button>
            </div>
            <div className="settingBtnDiv-cashInHand">
              <AiFillSetting className="setting-cashInHand" />
            </div>
          </div>
        </div>
      </div>

      <div className="middleDiv-cashInHand">
        <h4 className="text-cashInHand">
          CASH IN HAND: <span className="text-value-cashInHand">$0.00</span>
        </h4>
      </div>
      <div className="lowerDivSale-cashInHand">
        <div className="top-part-A-cashInHand">
          <input
            type="search"
            name=""
            id=""
            className="search-input-cashInHand"
            placeholder="Search ..."
          />
          <Link to="/purchase">
            <button
              className="addBtnSale-sale2-cashInHand"
              onClick={<Navigate to="/purchase" />}
            >
              <AiOutlinePlus className="plus-cashInHand" />
              Adjust Cash
            </button>
          </Link>
        </div>
        <CashInHandTable />
      </div>
    </div>
  );
};
