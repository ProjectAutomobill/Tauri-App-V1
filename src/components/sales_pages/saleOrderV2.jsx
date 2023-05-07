import React, { useState } from "react";
// import {Link} from 'react-router-dom';
// import '../purchaseBills.css';
import "./saleOrderV2.css";
import { AiOutlinePlus } from "react-icons/ai";
// import { PurchaseBillsTable } from '../tables/purchaseBillsTable';
// import { saleOrderV2Table } from "../tables/saleOrderV2Table";
// import { Navigate, Link } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
// import { GoGraph } from 'react-icons/go';
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
// import { saleOrderV2Modal } from "../modals/saleOrderV2Modal";
import { SaleOrderTable } from "../tables/saleOrderTable";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { invoke } from "@tauri-apps/api";

export const SaleOrderV2 = (props) => {
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();

  function navigateToSaleOrder() {
    navigate("/saleOrder");
  }
  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }

  function update_b_name_saleOrderV2() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: props.userCompany,
      bNameVal: b_name.toString(),
    });
  }
  return (
    <div className="main-saleOrderV2">
      <div className="upperDiv-saleOrderV2">
        <div className="upperDivPart1-saleOrderV2">
          <div className="input-business-saleOrderV2">
            {/* <input
              type="text"
              placeholder="•Enter Business Name"
              id="business-entry-saleOrderV2"
            ></input> */}
            <input
              type="text"
              placeholder="• Enter Business Name"
              id="business-entry-saleOrderV2"
              onChange={(e) => setNewBName(e.target.value)}
            ></input>
            <button
              id="business-name-save-btn-saleOrderV2"
              onClick={update_b_name_saleOrderV2}
            >
              Save
            </button>
          </div>

          <div className="marginDiv-saleOrderV2">
            <div className="saleBtnDiv-saleOrderV2">
              <BsFillPlusCircleFill className="plusSale-saleOrderV2" />
              <button
                className="addBtnSale-saleOrderV2"
                onClick={navigateToSale}
              >
                Add Sale
              </button>
            </div>
            <div className="purchaseBtnDiv-saleOrderV2">
              <BsFillPlusCircleFill className="plusSale-purchase-saleOrderV2" />
              <button
                className="addBtnPurchase-saleOrderV2"
                onClick={navigateToPurchase}
              >
                Add Purchase
              </button>
            </div>
            <div className="moreBtnDiv-saleOrderV2">
              <BsFillPlusCircleFill className="plusSaleMore-saleOrderV2" />
              <button className="addBtnMore-saleOrderV2">Add More</button>
            </div>
            <div className="settingBtnDiv-saleOrderV2">
              <AiFillSetting className="setting-saleOrderV2" />
            </div>
          </div>
        </div>
      </div>

      <div className="middleDiv-saleOrderV2">
        <div className="middleDiv-part1-saleOrderV2">
          <div className="choose-months-saleOrderV2">
            <select id="months-saleOrderV2">
              <option value="allsaleOrderV2-saleOrderV2">
                All Sale Invoices
              </option>
              <option value="thisMonth-saleOrderV2">This Month</option>
              <option value="lastMonth-saleOrderV2">Last Month</option>
              <option value="thisQuater-saleOrderV2">This Quater</option>
              <option value="thisYear-saleOrderV2">This Year</option>
              <option value="custom-saleOrderV2">Custom</option>
            </select>
          </div>

          <div className="choose-dates-saleOrderV2">
            <div className="from-saleOrderV2">
              Between :
              <input
                type="date"
                id="from-inputType-saleOrderV2"
                name="from-saleOrderV2"
              />
            </div>
            <div className="to-saleOrderV2">
              To :
              <input
                type="date"
                id="to-inputType-saleOrderV2"
                name="to-saleOrderV2"
              />
            </div>
          </div>

          <div className="options-middlepart1-saleOrderV2">
            <HiDocumentReport className="report-middlepart1-saleOrderV2" />
            <AiFillPrinter className="print-middlepart1-saleOrderV2" />
          </div>
        </div>
        <div className="middleDiv-part2-saleOrderV2">
          <div className="content-middleDiv-part2-saleOrderV2">
            <div className="choose-payment_in-saleOrderV2">
              <select id="payment_in-saleOrderV2">
                <option value="saleOrder-saleOrderV2">Sale Order</option>
                <option value="saleOrderV2-saleOrderV2">Payment-In</option>
                <option value="allTransactions-saleOrderV2">
                  All Transactions
                </option>
                <option value="sale-saleOrderV2">Sale</option>
                <option value="purchase-saleOrderV2">Purchase</option>
                <option value="paymentOut-saleOrderV2">Payment-Out</option>
                <option value="creditNote-saleOrderV2">Credit Note</option>
                <option value="debittNote-saleOrderV2">Debit Note</option>
                {/* <option value="saleOrder-saleOrderV2">Sale Order</option> */}
                <option value="purchaseOrder-saleOrderV2">
                  Purchase Order
                </option>
                <option value="estimate-saleOrderV2">Estimate</option>
                <option value="deliveryChallan-saleOrderV2">
                  Delivery Challan
                </option>
                <option value="expense-saleOrderV2">Expense</option>
                <option value="partyToPartyReceived-saleOrderV2">
                  Party-To-Party[Received]
                </option>
                <option value="partyToPartyPaid-saleOrderV2">
                  Party-To-Party[Paid]
                </option>
                <option value="manufacture-saleOrderV2">Manufacture</option>
                <option value="saleFA-saleOrderV2">Sale-FA</option>
                <option value="purchaseFA-saleOrderV2">Purchase-FA</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerDivSale-saleOrderV2">
        {/* <h3 className='transaction-saleOrderV2'>TRANSACTIONS</h3> */}
        <div className="top-part-A-saleOrderV2">
          {/* <h3>TRANSACTIONS</h3> */}
          <input
            type="search"
            name=""
            id=""
            className="search-input-saleOrderV2"
            placeholder="Search ..."
          />
          {/* <Link to="/purchase"> */}
          <button
            className="addBtnSale-sale2-saleOrderV2"
            onClick={navigateToSaleOrder}
          >
            <AiOutlinePlus className="plus-saleOrderV2" />
            Add Sale Order
          </button>
          {/* </Link> */}
        </div>
        <SaleOrderTable
          userNumber={props.userNumber}
          userCompany={props.userCompany}
        />
      </div>
    </div>

    // <div>
    //     <div className='upperDiv'>

    //     </div>
    //     <div className='lowerDivSale'>
    //     <h3>TRANSACTIONS</h3>
    //         <div className='top-part-A'>

    //             <input type="search" name="" id="" className='search-input-sales' placeholder='Search ...'/>
    //             <Link to="/purchase">
    //               <button className='addBtnPurchase-purchase'><AiOutlinePlus className="plus" />Add Purchase</button>
    //             </Link>
    //         </div>
    //     <PurchaseBillsTable/>
    //     </div>
    // </div>
  );
};
