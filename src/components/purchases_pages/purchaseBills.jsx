import { React, useState, useEffect } from "react";
import "./purchaseBills.css";
import { AiOutlinePlus } from "react-icons/ai";
// import { Navigate, Link } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { PurchaseBillsTable } from "../tables/purchaseBillsTable";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { invoke } from "@tauri-apps/api";

export const PurchaseBills = (props) => {
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();
  const [totalPaid, setTotalPaid] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [searchText, setSearchText] = useState("");

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
      <div className="upperDiv-purchaseBills">
        <div className="upperDivPart1-purchaseBills">
          <div className="input-business-purchaseBills">
            {/* <input
              type="text"
              placeholder="•Enter Business Name"
              id="business-entry-purchaseBills"
            ></input> */}
            <input
              type="text"
              placeholder="• Enter Business Name"
              id="business-entry-purchaseBills"
              onChange={(e) => setNewBName(e.target.value)}
            ></input>
            <button
              id="business-name-save-btn-purchaseBills"
              onClick={update_b_name_purchaseBills}
            >
              Save
            </button>
          </div>

          {/* <div className='middle-portion'>
              PRODUCTS
          </div> */}

          <div className="marginDiv-purchaseBills">
            <div className="saleBtnDiv-purchaseBills">
              <BsFillPlusCircleFill className="plusSale-purchaseBills" />
              {/* <button
                className="addBtnSale-purchaseBills"
                onClick={navigateToSale}
              >
                Add Sale
              </button> */}
              <div className="addBtnSale-purchaseBills">Add Sale</div>
            </div>
            <div className="purchaseBtnDiv-purchaseBills">
              {/* <AiOutlinePlus className="plusSale" /> */}
              <BsFillPlusCircleFill className="plusPurchase-purchaseBills" />
              {/* <button
                className="addBtnPurchase-purchaseBills"
                onClick={navigateToPurchase}
              >
                Add Purchase
              </button> */}
              <div
                className="addBtnPurchase-purchaseBills"
                // onClick={navigateToPurchase}
              >
                Add Purchase
              </div>
            </div>
            <div className="moreBtnDiv-purchaseBills">
              <BsFillPlusCircleFill className="plusSaleMore-purchaseBills" />
              <button className="addBtnMore-purchaseBills">Add More</button>
            </div>
            <div className="vertical-line-upperPart-purchaseBills"></div>

            <div className="settingBtnDiv-upperPart-purchaseBills">
              <AiFillSetting className="setting-upperPart-purchaseBills" />
            </div>
            <div className="printBtnDiv-upperPart-purchaseBills">
              <AiFillPrinter className="print-upperPart-purchaseBills" />
            </div>
          </div>
          {/* <div className='horizontal-line'>fgyrfhj</div> */}
        </div>
        {/* <div className='horizontal-line-purchaseBills'></div>
      <h3 className='heading-purchaseBills'>SALE INVOICES</h3> */}
      </div>

      <div className="middleDiv-purchaseBills">
        <div className="middleDiv-part1-purchaseBills">
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

          {/* <div className="choose-dates-purchaseBills">
            <label for="from-purchaseBills">Betweeen :</label>
            <input
              type="date"
              id="from-purchaseBills"
              name="from-purchaseBills"
            />

            <label for="to-purchaseBills">To :</label>
            <input type="date" id="to-purchaseBills" name="to-purchaseBills" />

            <select id="firm-purchaseBills">
              <option value="allFirms-purchaseBills">All Firm</option>
              <option value="myCompany-purchaseBills">My Company</option>
            </select>
          </div> */}
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
            {/* <GoGraph className='graph-middlepart1-purchaseBills'/> */}
            <HiDocumentReport className="report-middlepart1-purchaseBills" />
            <AiFillPrinter className="print-middlepart1-purchaseBills" />
          </div>
        </div>
        <div className="middleDiv-part2-purchaseBills">
          <div className="content-middleDiv-part2-purchaseBills">
            <div className="paid-block">
              Paid
              <br />
              <div className="amount-text-sale">₹{totalPaid}</div>
            </div>
            <div className="plus-anotherOne-purchaseBills">+</div>
            <div className="unpaid-block">
              Unpaid
              <br />
              <div className="amount-text-sale">₹{totalAmount - totalPaid}</div>
            </div>
            <div className="equal">=</div>
            <div className="total-block">
              Total
              <br />
              <div className="amount-text-sale">₹{totalAmount}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerDivSale-purchaseBills">
        <h3 className="transaction-purchaseBills">TRANSACTIONS</h3>
        <div className="top-part-A-purchaseBills">
          <input
            type="search"
            name=""
            className="search-input-purchaseBills"
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
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
        <PurchaseBillsTable
          userNumber={props.userNumber}
          userCompany={props.userCompany}
          setTotalPaid={setTotalPaid}
          setTotalAmount={setTotalAmount}
          searchText={searchText}
        />
      </div>
    </div>
  );
};
