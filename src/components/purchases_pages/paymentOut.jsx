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
import { PaymentOutModal } from "../modals/paymentOutModal";
export const PaymentOut = (props) => {
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();
  const [modalShow, setModalShow] = useState(false);
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
              {/* <button
                className="addBtnSale-paymentOut"
                onClick={navigateToSale}
              >
                Add Sale
              </button> */}
              <div className="addBtnSale-paymentOut">Add Sale</div>
            </div>
            <div className="purchaseBtnDiv-paymentOut">
              <BsFillPlusCircleFill className="plusPurchase-paymentOut" />
              {/* <button
                className="addBtnPurchase-paymentOut"
                onClick={navigateToPurchase}
              >
                Add Purchase
              </button> */}
              <div
                className="addBtnPurchase-paymentOut"
                // onClick={navigateToPurchase}
              >
                {" "}
                Add Purchase
              </div>
            </div>
            <div className="moreBtnDiv-paymentOut">
              <BsFillPlusCircleFill className="plusSaleMore-paymentOut" />
              <button className="addBtnMore-paymentOut">Add More</button>
            </div>
            <div className="vertical-line-upperPart-paymentOut"></div>

            <div className="settingBtnDiv-upperPart-paymentOut">
              <AiFillSetting className="setting-upperPart-paymentOut" />
            </div>
            <div className="printBtnDiv-upperPart-paymentOut">
              <AiFillPrinter className="print-upperPart-paymentOut" />
            </div>
          </div>
        </div>
      </div>

      <div className="middleDiv-paymentOut">
        <div className="middleDiv-part1-paymentOut">
          <div className="choose-months-paymentOut">
            <select id="months-paymentOut">
              <option value="thisMonth-paymentOut">This Month</option>

              <option value="lastMonth-paymentOut">Last Month</option>
              <option value="thisQuater-paymentOut">This Quater</option>
              <option value="thisYear-paymentOut">This Year</option>
              <option value="custom-paymentOut">Custom</option>
            </select>
          </div>

          {/* dates filter start from here */}

          <div className="choose-dates-paymentOut">
            <div className="between-label-paymentOut">Between</div>

            <div className="date1-paymentOut">
              <input
                type="date"
                className="from-paymentOut"
                name="from-paymentOut"
              />
            </div>
            <div className="to-choose-dates-paymentOut">To</div>
            <div className="date1-paymentOut">
              <input
                type="date"
                className="from-paymentOut"
                name="from-paymentOut"
              />
            </div>
          </div>
          {/*  options buttons start */}
          <div className="options-middlepart1-paymentOut">
            <div className="option1-paymentOut">
              <div className="image-option1-paymentOut">
                <HiDocumentReport className="report-middlepart1-paymentOut" />
              </div>
              <div className="text1-option1-paymentOut">Excel Report</div>
            </div>

            <div className="option2-paymentOut">
              <div className="image-option2-paymentOut">
                <AiFillPrinter className="print-middlepart1-paymentOut" />
              </div>
              <div className="text1-option2-paymentOut">Print</div>
            </div>
          </div>
        </div>
        <div className="middleDiv-part2-paymentOut">
          <div className="content-middleDiv-part2-paymentOut">
            <div className="choose-payment_out-paymentOut">
              <select id="payment_out-paymentOut">
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
            placeholder="Search"
          />
          {/* <Link to="/purchase"> */}
          <button
            className="addBtnSale-sale2-paymentOut"
            // onClick={<Navigate to="/purchase" />}
            onClick={() => setModalShow(true)}
          >
            <BsFillPlusCircleFill className="plus-paymentOut" />
            Add Payment-Out
          </button>
          {/* </Link> */}
        </div>
        <PaymentOutTable
          userNumber={props.userNumber}
          userCompany={props.userCompany}
        />
      </div>
      <PaymentOutModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        userNumber={props.userNumber}
        userCompany={props.userCompany}
      />
    </div>
  );
};
