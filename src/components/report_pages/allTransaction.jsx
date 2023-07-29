import React, { useState } from "react";
import "./allTransaction.css";
import { AiOutlinePlus } from "react-icons/ai";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { invoke } from "@tauri-apps/api";
import { AllTransactionTable } from "../tables/allTransactionTable";

export const AllTransaction = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();
  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }

  return (
    <div className="main-allTransaction">
      <div className="middleDiv-allTransaction">
        <div className="middleDiv-part1-allTransaction">
          <div className="choose-months-allTransaction">
            <select id="months-allTransaction">
              <option value="thisMonth-allTransaction">This Month</option>
              <option value="lastMonth-allTransaction">Last Month</option>
              <option value="thisQuater-allTransaction">This Quater</option>
              <option value="thisYear-allTransaction">This Year</option>
              <option value="custom-allTransaction">Custom</option>
            </select>
          </div>

          <div className="choose-dates-allTransaction">
            <div className="between-label">
              <label for="from-allTransaction">Between </label>
            </div>
            <input
              type="date"
              id="from-allTransaction"
              name="from-allTransaction"
            />

            <label for="to-allTransaction" id="to-label">
              To
            </label>
            <input
              type="date"
              id="to-allTransaction"
              name="to-allTransaction"
            />
          </div>
          <div className="options-middlepart1-allTransaction">
            <HiDocumentReport className="report-middlepart1-allTransaction" />
            <AiFillPrinter className="print-middlepart1-allTransaction" />
          </div>
        </div>
        <div className="middleDiv-part2-allTransaction">
          <div className="content-middleDiv-part2-allTransaction">
            <div className="choose-payment_in-allTransaction">
              <select id="payment_in-allTransaction">
                <option value="allTransactions-allTransaction">
                  All Transactions
                </option>
                <option value="allTransaction-allTransaction">
                  Payment-In
                </option>
                <option value="sale-allTransaction">Sale</option>
                <option value="purchase-allTransaction">Purchase</option>
                <option value="paymentOut-allTransaction">Payment-Out</option>
                <option value="creditNote-allTransaction">Credit Note</option>
                <option value="debittNote-allTransaction">Debit Note</option>
                <option value="saleOrder-allTransaction">Sale Order</option>
                <option value="purchaseOrder-allTransaction">
                  Purchase Order
                </option>
                <option value="estimate-allTransaction">Estimate</option>
                <option value="deliveryChallan-allTransaction">
                  Delivery Challan
                </option>
                <option value="expense-allTransaction">Expense</option>
                <option value="partyToPartyReceived-allTransaction">
                  Party-To-Party[Received]
                </option>
                <option value="partyToPartyPaid-allTransaction">
                  Party-To-Party[Paid]
                </option>
                <option value="manufacture-allTransaction">Manufacture</option>
                <option value="saleFA-allTransaction">Sale-FA</option>
                <option value="purchaseFA-allTransaction">Purchase-FA</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerDivSale-allTransaction">
        <div className="top-part-A-allTransaction">
          <input
            type="search"
            name=""
            id=""
            className="search-input-allTransaction"
            placeholder="Search "
          />
        </div>
        <AllTransactionTable />
      </div>
      {/* <allTransactionModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        userNumber={props.userNumber}
        userCompany={props.userCompany}
      /> */}
    </div>
  );
};
