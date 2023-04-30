import React, { useState } from "react";
// import {Link} from 'react-router-dom';
// import '../purchaseBills.css';
import "./paymentIn.css";
import { AiOutlinePlus } from "react-icons/ai";
// import { PurchaseBillsTable } from '../tables/purchaseBillsTable';
import { PaymentInTable } from "../tables/paymentInTable";
import { Navigate, Link } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
// import { GoGraph } from 'react-icons/go';
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { PaymentInModal } from "../modals/paymentInModal";
export const PaymentIn = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="main-paymentIn">
      <div className="upperDiv-paymentIn">
        <div className="upperDivPart1-paymentIn">
          <div className="input-business-paymentIn">
            <input
              type="text"
              placeholder="•Enter Business Name"
              id="business-entry-paymentIn"
            ></input>
          </div>

          {/* <div className='middle-portion'>
                PRODUCTS
            </div> */}

          <div className="marginDiv-paymentIn">
            <div className="saleBtnDiv-paymentIn">
              <BsFillPlusCircleFill className="plusSale-paymentIn" />
              <button className="addBtnSale-paymentIn">Add Sale</button>
            </div>
            <div className="purchaseBtnDiv-paymentIn">
              {/* <AiOutlinePlus className="plusSale" /> */}
              <BsFillPlusCircleFill className="plusSale-purchase-paymentIn" />
              <button className="addBtnPurchase-paymentIn">Add Purchase</button>
            </div>
            <div className="moreBtnDiv-paymentIn">
              <BsFillPlusCircleFill className="plusSaleMore-paymentIn" />
              <button className="addBtnMore-paymentIn">Add More</button>
            </div>
            <div className="settingBtnDiv-paymentIn">
              <AiFillSetting className="setting-paymentIn" />
            </div>
          </div>
          {/* <div className='horizontal-line'>fgyrfhj</div> */}
        </div>
        {/* <div className='horizontal-line-paymentIn'></div>
        <h3 className='heading-paymentIn'>SALE INVOICES</h3> */}
      </div>

      <div className="middleDiv-paymentIn">
        <div className="middleDiv-part1-paymentIn">
          <div className="choose-months-paymentIn">
            <select id="months-paymentIn">
              <option value="allpaymentIn-paymentIn">All Sale Invoices</option>
              <option value="thisMonth-paymentIn">This Month</option>
              <option value="lastMonth-paymentIn">Last Month</option>
              <option value="thisQuater-paymentIn">This Quater</option>
              <option value="thisYear-paymentIn">This Year</option>
              <option value="custom-paymentIn">Custom</option>
            </select>
          </div>

          <div className="choose-dates-paymentIn">
            <label for="from-paymentIn">Betweeen :</label>
            <input type="date" id="from-paymentIn" name="from-paymentIn" />

            <label for="to-paymentIn">To :</label>
            <input type="date" id="to-paymentIn" name="to-paymentIn" />
          </div>

          <div className="options-middlepart1-paymentIn">
            {/* <GoGraph className='graph-middlepart1-paymentIn'/> */}
            <HiDocumentReport className="report-middlepart1-paymentIn" />
            <AiFillPrinter className="print-middlepart1-paymentIn" />
          </div>
        </div>
        <div className="middleDiv-part2-paymentIn">
          <div className="content-middleDiv-part2-paymentIn">
            <div className="choose-payment_in-paymentIn">
              <select id="payment_in-paymentIn">
                <option value="allTransactions-paymentIn">
                  All Transactions
                </option>
                <option value="sale-paymentIn">Sale</option>
                <option value="purchase-paymentIn">Purchase</option>
                <option value="paymentIn-paymentIn">Payment-In</option>
                <option value="paymentOut-paymentIn">Payment-Out</option>
                <option value="creditNote-paymentIn">Credit Note</option>
                <option value="debittNote-paymentIn">Debit Note</option>
                <option value="saleOrder-paymentIn">Sale Order</option>
                <option value="purchaseOrder-paymentIn">Purchase Order</option>
                <option value="estimate-paymentIn">Estimate</option>
                <option value="deliveryChallan-paymentIn">
                  Delivery Challan
                </option>
                <option value="expense-paymentIn">Expense</option>
                <option value="partyToPartyReceived-paymentIn">
                  Party-To-Party[Received]
                </option>
                <option value="partyToPartyPaid-paymentIn">
                  Party-To-Party[Paid]
                </option>
                <option value="manufacture-paymentIn">Manufacture</option>
                <option value="saleFA-paymentIn">Sale-FA</option>
                <option value="purchaseFA-paymentIn">Purchase-FA</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerDivSale-paymentIn">
        {/* <h3 className='transaction-paymentIn'>TRANSACTIONS</h3> */}
        <div className="top-part-A-paymentIn">
          {/* <h3>TRANSACTIONS</h3> */}
          <input
            type="search"
            name=""
            id=""
            className="search-input-paymentIn"
            placeholder="Search ..."
          />
          {/* <Link to="/purchase"> */}
          <button
            className="addBtnSale-sale2-paymentIn"
            onClick={() => setModalShow(true)}
          >
            <AiOutlinePlus className="plus-paymentIn" />
            Add Payment-In
          </button>
          {/* </Link> */}
        </div>
        <PaymentInTable
          userNumber={props.userNumber}
          userCompany={props.userCompany}
        />
      </div>
      <PaymentInModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        userNumber={props.userNumber}
        userCompany={props.userCompany}
      />
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
