import React, { useState } from "react";
import "./purchaseReturn.css";
import { AiOutlinePlus } from "react-icons/ai";
import { PurchaseReturnTable } from "../tables/purchaseReturnTable";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { invoke } from "@tauri-apps/api";

export const PurchaseReturn = (props) => {
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();
  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }
  function update_b_name_purchaseReturn() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: props.userCompany,
      bNameVal: b_name.toString(),
    });
    // `invoke` returns a Promise
    // .then((response) => setBalance(parseInt(response)));
  }
  return (
    <div className="main-purchaseReturn">
      <div className="upperDiv-purchaseReturn">
        <div className="upperDivPart1-purchaseReturn">
          <div className="input-business-purchaseReturn">
            {/* <input type="text" placeholder='•Enter Business Name' id='business-entry-purchaseReturn'></input> */}
            <input
              type="text"
              placeholder="• Enter Business Name"
              id="business-entry-purchaseReturn"
              onChange={(e) => setNewBName(e.target.value)}
            ></input>
            <button
              id="business-name-save-btn-purchaseReturn"
              onClick={update_b_name_purchaseReturn}
            >
              Save
            </button>
          </div>

          <div className="marginDiv-purchaseReturn">
            <div className="saleBtnDiv-purchaseReturn">
              <BsFillPlusCircleFill className="plusSale-purchaseReturn" />
              {/* <button
                className="addBtnSale-purchaseReturn"
                onClick={navigateToSale}
              >
                Add Sale
              </button> */}
              <div className="addBtnSale-purchaseReturn">Add Sale</div>
            </div>
            <div className="purchaseBtnDiv-purchaseReturn">
              <BsFillPlusCircleFill className="plusPurchase-purchaseReturn" />
              {/* <button
                className="addBtnPurchase-purchaseReturn"
                onClick={navigateToPurchase}
              >
                Add Purchase
              </button> */}
              <div
                className="addBtnPurchase-purchaseReturn"
                // onClick={navigateToPurchase}
              >
                {" "}
                Add Purchase
              </div>
            </div>
            <div className="moreBtnDiv-purchaseReturn">
              <BsFillPlusCircleFill className="plusSaleMore-purchaseReturn" />
              <button className="addBtnMore-purchaseReturn">Add More</button>
            </div>
            <div className="vertical-line-upperPart-purchaseReturn"></div>

            <div className="settingBtnDiv-upperPart-purchaseReturn">
              <AiFillSetting className="setting-upperPart-purchaseReturn" />
            </div>
            <div className="printBtnDiv-upperPart-purchaseReturn">
              <AiFillPrinter className="print-upperPart-purchaseReturn" />
            </div>
          </div>
        </div>
      </div>

      <div className="middleDiv-purchaseReturn">
        <div className="middleDiv-part1-purchaseReturn">
          <div className="choose-months-purchaseReturn">
            <select id="months-purchaseReturn">
              <option value="allpurchaseReturn-purchaseReturn">
                All Sale Invoices
              </option>
              <option value="thisMonth-purchaseReturn">This Month</option>
              <option value="lastMonth-purchaseReturn">Last Month</option>
              <option value="thisQuater-purchaseReturn">This Quater</option>
              <option value="thisYear-purchaseReturn">This Year</option>
              <option value="custom-purchaseReturn">Custom</option>
            </select>
          </div>

          {/* <div className='choose-dates-purchaseReturn'>
              <label for="from-purchaseReturn">Betweeen :</label>
              <input type="date" id="from-purchaseReturn" name="from-purchaseReturn"/>

              <label for="to-purchaseReturn">To :</label>
              <input type="date" id="to-purchaseReturn" name="to-purchaseReturn"/>
              
              

            </div> */}

          <div className="choose-dates-purchaseReturn">
            {/* <div className="from-purchaseReturn">
              Between :
              <input
                type="date"
                id="from-inputType-purchaseReturn"
                name="from-purchaseReturn"
              />
            </div>
            <div className="to-purchaseReturn">
              To :
              <input
                type="date"
                id="to-inputType-purchaseReturn"
                name="to-purchaseReturn"
              />
            </div> */}
            <div className="between-label">
              <label for="from-purchaseReturn">Between </label>
            </div>
            <input
              type="date"
              id="from-purchaseReturn"
              name="from-purchaseReturn"
            />

            <label for="to-purchaseReturn" id="to-label">
              To
            </label>
            <input
              type="date"
              id="to-purchaseReturn"
              name="to-purchaseReturn"
            />
          </div>

          <div className="options-middlepart1-purchaseReturn">
            <HiDocumentReport className="report-middlepart1-purchaseReturn" />
            <AiFillPrinter className="print-middlepart1-purchaseReturn" />
          </div>
        </div>
        <div className="middleDiv-part2-purchaseReturn">
          <div className="content-middleDiv-part2-purchaseReturn">
            <div className="choose-purchase_return-purchaseReturn">
              <select id="purchase_return-purchaseReturn">
                <option value="debittNote-purchaseReturn">Debit Note</option>
                <option value="allTransactions-purchaseReturn">
                  All Transactions
                </option>
                <option value="sale-purchaseReturn">Sale</option>
                <option value="purchase-purchaseReturn">Purchase</option>
                <option value="purchaseReturn-purchaseReturn">
                  Payment-In
                </option>
                <option value="paymentOut-purchaseReturn">Payment-Out</option>
                <option value="creditNote-purchaseReturn">Credit Note</option>
                {/* <option value="debittNote-purchaseReturn">Debit Note</option> */}
                <option value="saleOrder-purchaseReturn">Sale Order</option>
                <option value="purchaseOrder-purchaseReturn">
                  Purchase Order
                </option>
                <option value="estimate-purchaseReturn">Estimate</option>
                <option value="deliveryChallan-purchaseReturn">
                  Delivery Challan
                </option>
                <option value="expense-purchaseReturn">Expense</option>
                <option value="partyToPartyReceived-purchaseReturn">
                  Party-To-Party[Received]
                </option>
                <option value="partyToPartyPaid-purchaseReturn">
                  Party-To-Party[Paid]
                </option>
                <option value="manufacture-purchaseReturn">Manufacture</option>
                <option value="saleFA-purchaseReturn">Sale-FA</option>
                <option value="purchaseFA-purchaseReturn">Purchase-FA</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerDivSale-purchaseReturn">
        <div className="top-part-A-purchaseReturn">
          <input
            type="search"
            name=""
            id=""
            className="search-input-purchaseReturn"
            placeholder="Search"
          />
          {/* <Link to="/purchase"> */}
          <button
            className="addBtnSale-sale2-purchaseReturn"
            onClick={<Navigate to="/purchase" />}
          >
            <BsFillPlusCircleFill className="plus-purchaseReturn" />
            Add Debit Note
          </button>
          {/* </Link> */}
        </div>
        <PurchaseReturnTable />
      </div>
    </div>
  );
};
