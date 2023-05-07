// import React from "react";
import React, { useState } from "react";
import "./paymentOut.css";
import { AiOutlinePlus } from "react-icons/ai";
import { PaymentOutTable } from "../tables/paymentOutTable";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { invoke } from "@tauri-apps/api";

export const PaymentOut = (props) => {
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();
  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }
  function update_b_name_paymentOut() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: props.userCompany,
      bNameVal: b_name.toString(),
    });
    // `invoke` returns a Promise
    // .then((response) => setBalance(parseInt(response)));
  }
  return (
    <div className="main-paymentOut">
      <div className="upperDiv-paymentOut">
        <div className="upperDivPart1-paymentOut">
          <div className="input-business-paymentOut">
            <input
              type="text"
              placeholder="• Enter Business Name"
              id="business-entry-paymentOut"
              onChange={(e) => setNewBName(e.target.value)}
            ></input>
            <button
              id="business-name-save-btn-paymentOut"
              onClick={update_b_name_paymentOut}
            >
              Save
            </button>
            {/* <input type="text" placeholder='•Enter Business Name' id='business-entry-paymentOut'></input> */}
          </div>

          <div className="marginDiv-paymentOut">
            <div className="saleBtnDiv-paymentOut">
              <BsFillPlusCircleFill className="plusSale-paymentOut" />
              <button
                className="addBtnSale-paymentOut"
                onClick={navigateToSale}
              >
                Add Sale
              </button>
            </div>
            <div className="purchaseBtnDiv-paymentOut">
              <BsFillPlusCircleFill className="plusSale-purchase-paymentOut" />
              <button
                className="addBtnPurchase-paymentOut"
                onClick={navigateToPurchase}
              >
                Add Purchase
              </button>
            </div>
            <div className="moreBtnDiv-paymentOut">
              <BsFillPlusCircleFill className="plusSaleMore-paymentOut" />
              <button className="addBtnMore-paymentOut">Add More</button>
            </div>
            <div className="settingBtnDiv-paymentOut">
              <AiFillSetting className="setting-paymentOut" />
            </div>
          </div>
        </div>
      </div>

      <div className="middleDiv-paymentOut">
        <div className="middleDiv-part1-paymentOut">
          <div className="choose-months-paymentOut">
            <select id="months-paymentOut">
              <option value="allpaymentOut-paymentOut">
                All Sale Invoices
              </option>
              <option value="thisMonth-paymentOut">This Month</option>
              <option value="lastMonth-paymentOut">Last Month</option>
              <option value="thisQuater-paymentOut">This Quater</option>
              <option value="thisYear-paymentOut">This Year</option>
              <option value="custom-paymentOut">Custom</option>
            </select>
          </div>

          {/* <div className='choose-dates-paymentOut'>
              <label for="from-paymentOut">Betweeen :</label>
              <input type="date" id="from-paymentOut" name="from-paymentOut"/>

              <label for="to-paymentOut">To :</label>
              <input type="date" id="to-paymentOut" name="to-paymentOut"/>
              
              

            </div> */}
          <div className="choose-dates-paymentOut">
            <div className="from-paymentOut">
              Between :
              <input
                type="date"
                id="from-inputType-paymentOut"
                name="from-paymentOut"
              />
            </div>
            <div className="to-paymentOut">
              To :
              <input
                type="date"
                id="to-inputType-paymentOut"
                name="to-paymentOut"
              />
            </div>
          </div>

          <div className="options-middlepart1-paymentOut">
            <HiDocumentReport className="report-middlepart1-paymentOut" />
            <AiFillPrinter className="print-middlepart1-paymentOut" />
          </div>
        </div>
        <div className="middleDiv-part2-paymentOut">
          <div className="content-middleDiv-part2-paymentOut">
            <div className="choose-sale_return-paymentOut">
              <select id="sale_return-paymentOut">
                <option value="paymentOut-paymentOut">Payment-Out</option>
                <option value="allTransactions-paymentOut">
                  All Transactions
                </option>
                <option value="sale-paymentOut">Sale</option>
                <option value="purchase-paymentOut">Purchase</option>
                <option value="paymentOut-paymentOut">Payment-In</option>
                {/* <option value="paymentOut-paymentOut">Payment-Out</option> */}
                <option value="creditNote-paymentOut">Credit Note</option>
                <option value="debittNote-paymentOut">Debit Note</option>
                <option value="saleOrder-paymentOut">Sale Order</option>
                <option value="purchaseOrder-paymentOut">Purchase Order</option>
                <option value="estimate-paymentOut">Estimate</option>
                <option value="deliveryChallan-paymentOut">
                  Delivery Challan
                </option>
                <option value="expense-paymentOut">Expense</option>
                <option value="partyToPartyReceived-paymentOut">
                  Party-To-Party[Received]
                </option>
                <option value="partyToPartyPaid-paymentOut">
                  Party-To-Party[Paid]
                </option>
                <option value="manufacture-paymentOut">Manufacture</option>
                <option value="saleFA-paymentOut">Sale-FA</option>
                <option value="purchaseFA-paymentOut">Purchase-FA</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerDivSale-paymentOut">
        <div className="top-part-A-paymentOut">
          <input
            type="search"
            name=""
            id=""
            className="search-input-paymentOut"
            placeholder="Search ..."
          />
          <Link to="/purchase">
            <button
              className="addBtnSale-sale2-paymentOut"
              onClick={<Navigate to="/purchase" />}
            >
              <AiOutlinePlus className="plus-paymentOut" />
              Add Payment-Out
            </button>
          </Link>
        </div>
        <PaymentOutTable />
      </div>
    </div>
  );
};
