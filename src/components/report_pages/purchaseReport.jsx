import { React, useState, useEffect } from "react";
import "./purchaseReport.css";
import { AiOutlinePlus } from "react-icons/ai";
// import { Navigate, Link } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
// import { purchaseReportTable } from "../tables/purchaseReportTable";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { invoke } from "@tauri-apps/api";

export const PurchaseReport = (props) => {
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();

  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }
  function update_b_name_purchaseReport() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: props.userCompany,
      bNameVal: b_name.toString(),
    });
    // `invoke` returns a Promise
    // .then((response) => setBalance(parseInt(response)));
  }
  return (
    <div className="main-purchaseReport">
      <div className="middleDiv-purchaseReport">
        <div className="middleDiv-part1-purchaseReport">
          <div className="choose-months-purchaseReport">
            <select id="months-purchaseReport">
              <option value="allpurchaseReport-purchaseReport">
                All Sale Invoices
              </option>
              <option value="thisMonth-purchaseReport">This Month</option>
              <option value="lastMonth-purchaseReport">Last Month</option>
              <option value="thisQuater-purchaseReport">This Quater</option>
              <option value="thisYear-purchaseReport">This Year</option>
              <option value="custom-purchaseReport">Custom</option>
            </select>
          </div>

          <div className="choose-dates-purchaseReport">
            <div id="between-label">
              <label for="from-purchaseReport">Between </label>
            </div>
            <input
              type="date"
              id="from-purchaseReport"
              name="from-purchaseReport"
            />

            <label for="to-purchaseReport" id="to-label">
              To
            </label>
            <input
              type="date"
              id="to-purchaseReport"
              name="to-purchaseReport"
            />

            <select id="firm-purchaseReport">
              <option value="allFirms-purchaseReport">All Firm</option>
              <option value="myCompany-purchaseReport">My Company</option>
            </select>
          </div>

          <div className="options-middlepart1-purchaseReport">
            {/* <GoGraph className='graph-middlepart1-purchaseReport'/> */}
            <HiDocumentReport className="report-middlepart1-purchaseReport" />
            <AiFillPrinter className="print-middlepart1-purchaseReport" />
          </div>
        </div>
        <div className="middleDiv-part2-purchaseReport">
          <div className="content-middleDiv-part2-purchaseReport">
            <div className="paid-block">Paid</div>
            <div className="plus-anotherOne-purchaseReport">+</div>
            <div className="unpaid-block">Unpaid</div>
            <div className="equal">=</div>
            <div className="total-block">Total</div>
          </div>
        </div>
      </div>
      <div className="lowerDivSale-purchaseReport-Report">
        <h3 className="transaction-purchaseReport">TRANSACTIONS</h3>
        <div className="top-part-A-purchaseReport">
          <input
            type="search"
            name=""
            className="search-input-purchaseReport"
            placeholder="Search"
          />
          {/* <Link to="/purchase"> */}
          <button
            className="addBtnSale-sale2-purchaseReport"
            onClick={navigateToPurchase}
          >
            <BsFillPlusCircleFill className="plus-purchaseReport" />
            Add Purchase
          </button>
          {/* </Link> */}
        </div>
        {/* <purchaseReportTable /> */}
      </div>
    </div>
  );
};
