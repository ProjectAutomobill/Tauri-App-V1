import { React, useState, useEffect } from "react";
import "./purchaseBillReport.css";
import { AiOutlinePlus } from "react-icons/ai";
// import { Navigate, Link } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { PurchaseBillsTable } from "../tables/purchaseBillsTable";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { invoke } from "@tauri-apps/api";

export const PurchaseBillsReport = (props) => {
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();

  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }
  function update_b_name_purchaseBills() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: props.userCompany,
      bNameVal: b_name.toString(),
    });
    // `invoke` returns a Promise
    // .then((response) => setBalance(parseInt(response)));
  }
  return (
    <div className="main-purchaseBills">
      <div className="middleDiv-purchaseBills">
        {/* <div className="middleDiv-part1-purchaseBills">
          <div className="choose-months-purchaseBills">
            <select id="months-purchaseBills">
              <option value="allpurchaseBills-purchaseBills">
                All Sale Invoices
              </option>
              <option value="thisMonth-purchaseBills">This Month</option>
              <option value="lastMonth-purchaseBills">Last Month</option>
              <option value="thisQuater-purchaseBills">This Quater</option>
              <option value="thisYear-purchaseBills">This Year</option>
              <option value="custom-purchaseBills">Custom</option>
            </select>
          </div>

         
          <div className="choose-dates-purchaseBills">
            <div id="between-label">
              <label for="from-purchaseBills">Between </label>
            </div>
            <input
              type="date"
              id="from-purchaseBills"
              name="from-purchaseBills"
            />

            <label for="to-purchaseBills" id="to-label">
              To
            </label>
            <input type="date" id="to-purchaseBills" name="to-purchaseBills" />

            <select id="firm-purchaseBills">
              <option value="allFirms-purchaseBills">All Firm</option>
              <option value="myCompany-purchaseBills">My Company</option>
            </select>
          </div>

          <div className="options-middlepart1-purchaseBills">
            <HiDocumentReport className="report-middlepart1-purchaseBills" />
            <AiFillPrinter className="print-middlepart1-purchaseBills" />
          </div>
        </div> */}
        <div className="middleDiv-part1-purchaseBills">
          <div className="choose-months-purchaseBills">
            <select id="months-purchaseBills">
              <option value="thisMonth-purchaseBills">This Month</option>
              <option value="lastMonth-purchaseBills">Last Month</option>
              <option value="thisQuater-purchaseBills">This Quater</option>
              <option value="thisYear-purchaseBills">This Year</option>
              <option value="custom-purchaseBills">Custom</option>
            </select>
          </div>

          {/* this month+ dates filter start */}

          {/* <div className="choose-dates-purchaseBills">
            <div className="between-label-purchaseBills">Between</div>

            <div className="date1-purchaseBills">
              <input
                type="date"
                className="from-purchaseBills"
                name="from-purchaseBills"
              />
            </div>
            <div className="to-choose-dates-purchaseBills">To</div>
            <div className="date1-purchaseBills">
              <input
                type="date"
                className="from-purchaseBills"
                name="from-purchaseBills"
              />
            </div>
          </div> */}
          {/* this month+ dates filter start */}

          <div className="choose-dates-allTransaction">
            <div className="between-label-allTransaction">Between</div>

            <div className="date1-allTransaction">
              <input
                type="date"
                className="from-allTransaction"
                name="from-allTransaction"
              />
            </div>
            <div className="to-choose-dates-allTransaction">To</div>
            <div className="date1-allTransaction">
              <input
                type="date"
                className="from-allTransaction"
                name="from-allTransaction"
              />
            </div>
          </div>

          {/*  options buttons start */}
          {/*  options buttons start */}
          <div className="options-middlepart1-allTransaction">
            <div className="option1-allTransaction">
              <div className="image-option1-allTransaction">
                <HiDocumentReport className="report-middlepart1-allTransaction" />
              </div>
              <div className="text1-option1-allTransaction">Excel Report</div>
            </div>

            <div className="option2-allTransaction">
              <div className="image-option2-allTransaction">
                <AiFillPrinter className="print-middlepart1-allTransaction" />
              </div>
              <div className="text1-option2-allTransaction">Print</div>
            </div>
          </div>
        </div>
        <div className="middleDiv-part2-purchaseBills">
          <div className="content-middleDiv-part2-purchaseBills">
            <div className="paid-block">Paid</div>
            <div className="plus-anotherOne-purchaseBills">+</div>
            <div className="unpaid-block">Unpaid</div>
            <div className="equal">=</div>
            <div className="total-block">Total</div>
          </div>
        </div>
      </div>
      <div className="lowerDivSale-purchaseBills-Report">
        <h3 className="transaction-purchaseBills">TRANSACTIONS</h3>
        <div className="top-part-A-purchaseBills">
          <input
            type="search"
            name=""
            className="search-input-purchaseBills"
            placeholder="Search"
          />
          {/* <Link to="/purchase"> */}
          <button
            className="addBtnSale-sale2-purchaseBills"
            onClick={navigateToPurchase}
          >
            <BsFillPlusCircleFill className="plus-purchaseBills" />
            Add Purchase
          </button>
          {/* </Link> */}
        </div>
        <PurchaseBillsTable />
      </div>
    </div>
  );
};
