import { React, useState, useEffect } from "react";
import "./saleInvoiceReport.css";
import { AiOutlinePlus } from "react-icons/ai";
// import { SaleInvoiceTable } from "./tables/salesInvoiceTable";
import { SaleInvoiceTable } from "../tables/salesInvoiceTable";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { invoke } from "@tauri-apps/api";

export const SaleInvoiceReport = (props) => {
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();

  function goToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }
  function update_b_name_saleInvoice() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: props.userCompany,
      bNameVal: b_name.toString(),
    });
    // `invoke` returns a Promise
    // .then((response) => setBalance(parseInt(response)));
  }
  return (
    <div className="main-saleInvoice">
      <div className="middleDiv-saleInvoice">
        <div className="middleDiv-part1-saleInvoice">
          <div className="choose-months-saleInvoice">
            <select id="months-saleInvoice">
              <option value="allSaleInvoice-saleInvoice">
                All Sale Invoices
              </option>
              <option value="thisMonth-saleInvoice">This Month</option>
              <option value="lastMonth-saleInvoice">Last Month</option>
              <option value="thisQuater-saleInvoice">This Quater</option>
              <option value="thisYear-saleInvoice">This Year</option>
              <option value="custom-saleInvoice">Custom</option>
            </select>
          </div>

          <div className="choose-dates-purchaseBills">
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
          <div className="allFirms-middleDiv-saleInvoiceReport">
            <select id="firm-purchaseBills">
              <option value="allFirms-purchaseBills"> ALL FIRMS</option>
              <option value="myCompany-purchaseBills">Company</option>
            </select>
          </div>
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
        <div className="middleDiv-part2-saleInvoice">
          <div className="content-middleDiv-part2-saleInvoice">
            <div className="paid-block">Paid</div>
            <div className="plus-anotherOne-saleInvoice">+</div>
            <div className="unpaid-block">Unpaid</div>
            <div className="equal">=</div>
            <div className="total-block">Total</div>
          </div>
        </div>
      </div>
      <div className="lowerDivSale-saleInvoice-forReport">
        <div className="transaction-saleInvoice">TRANSACTIONS</div>
        <div className="top-part-A-saleInvoice">
          <input
            type="search"
            name=""
            className="search-input-saleInvoice"
            placeholder="Search"
          />

          <button
            className="addBtnSale-sale2-saleInvoice"
            // onClick={<Navigate to="/purchase" />}
            onClick={goToSale}
          >
            <BsFillPlusCircleFill className="plus-saleInvoice" />
            {/* <AiOutlinePlus className="plus-saleInvoice" /> */}
            Add Sale
          </button>
          {/* </Link> */}
        </div>
        <SaleInvoiceTable
          userNumber={props.userNumber}
          userCompany={props.userCompany}
        />
      </div>
    </div>
  );
};
