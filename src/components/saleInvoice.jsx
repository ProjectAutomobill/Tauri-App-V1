import { React, useState, useEffect } from "react";
import "./saleInvoice.css";
import { AiOutlinePlus } from "react-icons/ai";
import { SaleInvoiceTable } from "./tables/salesInvoiceTable";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { invoke } from "@tauri-apps/api";
import { EandQ } from "./sales_pages/EandQ";
export const SaleInvoice = (props) => {
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();
  const [dataSales, setSalesData] = useState();

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
  useEffect(() => {
    // getSaleTransactions();
    invoke("get_sales_transaction", {
      number: props.userNumber,
      company: props.userCompany,
    }).then((response) => setSalesData(JSON.parse(response)));
  }, []);

  if (dataSales != null && dataSales.length == 0) {
    return <EandQ />;
  }
  return (
    <div className="main-saleInvoice">
      <div className="upperDiv-saleInvoice">
        <div className="upperDivPart1-saleInvoice">
          <div className="input-business-saleInvoice">
            {/* <input
              type="text"
              placeholder="•Enter Business Name"
              id="business-entry-saleInvoice"
            ></input> */}
            <input
              type="text"
              placeholder="• Enter Business Name"
              id="business-entry-saleInvoice"
              onChange={(e) => setNewBName(e.target.value)}
            ></input>
            <button
              id="business-name-save-btn-saleInvoice"
              onClick={update_b_name_saleInvoice}
            >
              Save
            </button>
          </div>

          {/* <div className='middle-portion'>
                PRODUCTS
            </div> */}

          <div className="marginDiv-saleInvoice">
            <div className="saleBtnDiv-saleInvoice">
              <BsFillPlusCircleFill className="plusSale-saleInvoice" />
              {/* <button className="addBtnSale-saleInvoice" onClick={goToSale}>
                Add Sale
              </button> */}
              <div className="addBtnSale-saleInvoice">Add Sale</div>
            </div>
            <div className="purchaseBtnDiv-saleInvoice">
              {/* <AiOutlinePlus className="plusSale" /> */}
              <BsFillPlusCircleFill className="plusPurchase-saleInvoice" />
              {/* <button
                className="addBtnPurchase-saleInvoice"
                onClick={navigateToPurchase}
              >
                Add Purchase
              </button> */}
              <div
                className="addBtnPurchase-saleInvoice"
                // onClick={navigateToPurchase}
              >
                Add Purchase
              </div>
            </div>
            <div className="moreBtnDiv-saleInvoice">
              <BsFillPlusCircleFill className="plusSaleMore-saleInvoice" />
              <button className="addBtnMore-saleInvoice">Add More</button>
            </div>
            <div className="vertical-line-upperPart-saleInvoice"></div>

            <div className="settingBtnDiv-upperPart-saleInvoice">
              <AiFillSetting className="setting-upperPart-saleInvoice" />
            </div>
            <div className="printBtnDiv-upperPart-saleInvoice">
              <AiFillPrinter className="print-upperPart-saleInvoice" />
            </div>
          </div>
          {/* <div className='horizontal-line'>fgyrfhj</div> */}

          {/* <div className='horizontal-line-saleInvoice'></div>
        <h3 className='heading-saleInvoice'>SALE INVOICES</h3> */}
        </div>
      </div>
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

          <div className="choose-dates-saleInvoice">
            <div id="between-label">
              <label for="from-saleInvoice">Between </label>
            </div>
            <input type="date" id="from-saleInvoice" name="from-saleInvoice" />

            <label for="to-saleInvoice" id="to-label">
              To
            </label>
            <input type="date" id="to-saleInvoice" name="to-saleInvoice" />

            <select id="firm-saleInvoice">
              <option value="allFirms-saleInvoice">All Firm</option>
              <option value="myCompany-saleInvoice">My Company</option>
            </select>
          </div>

          <div className="options-middlepart1-saleInvoice">
            <GoGraph className="graph-middlepart1-saleInvoice" />
            <HiDocumentReport className="report-middlepart1-saleInvoice" />
            <AiFillPrinter className="print-middlepart1-saleInvoice" />
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
      <div className="lowerDivSale-saleInvoice">
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
