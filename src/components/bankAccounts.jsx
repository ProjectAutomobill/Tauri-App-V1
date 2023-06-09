import { React, useState, useEffect } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting, AiFillPrinter } from "react-icons/ai";
// import {FiSearch} from 'react-icons/fi';
// import {AiOutlinePlus} from 'react-icons/ai';
import { FaShoppingCart } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { invoke } from "@tauri-apps/api";
import "./bankAccounts.css";
export const BankAccounts = (props) => {
  const navigate = useNavigate();
  const [b_name, setNewBName] = useState();

  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }
  function update_b_name_bankAccounts() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: props.userCompany,
      bNameVal: b_name.toString(),
    });
    // `invoke` returns a Promise
    // .then((response) => setBalance(parseInt(response)));
  }
  return (
    <div className="main-bankAccounts">
      <div className="upperDiv-bankAccounts">
        <div className="upperDivPart1-bankAccounts">
          <div className="input-business-bankAccounts">
            {/* <input
              type="text"
              placeholder="•Enter Business Name"
              id="business-entry-bankAccounts"
            ></input> */}
            <input
              type="text"
              placeholder="• Enter Business Name"
              id="business-entry-bankAccounts"
              onChange={(e) => setNewBName(e.target.value)}
            ></input>
            <button
              id="business-name-save-btn-bankAccounts"
              onClick={update_b_name_bankAccounts}
            >
              Save
            </button>
          </div>

          <div className="marginDiv-bankAccounts">
            <div className="saleBtnDiv-bankAccounts">
              <BsFillPlusCircleFill className="plusSale-bankAccounts" />
              {/* <button
                className="addBtnSale-bankAccounts"
                onClick={navigateToSale}
              >
                Add Sale
              </button> */}
              <div className="addBtnSale-bankAccounts">Add Sale</div>
            </div>
            <div className="purchaseBtnDiv-bankAccounts">
              <BsFillPlusCircleFill className="plusPurchase-bankAccounts" />
              {/* <button
                className="addBtnPurchase-bankAccounts"
                onClick={navigateToPurchase}
              >
                Add Purchase
              </button> */}
              <div
                className="addBtnPurchase-bankAccounts"
                // onClick={navigateToPurchase}
              >
                Add Purchase
              </div>
            </div>
            <div className="moreBtnDiv-bankAccounts">
              <BsFillPlusCircleFill className="plusSaleMore-bankAccounts" />
              <button className="addBtnMore-bankAccounts">Add More</button>
            </div>
            <div className="vertical-line-upperPart-bankAccounts"></div>

            <div className="settingBtnDiv-upperPart-bankAccounts">
              <AiFillSetting className="setting-upperPart-bankAccounts" />
            </div>
            <div className="printBtnDiv-upperPart-bankAccounts">
              <AiFillPrinter className="print-upperPart-bankAccounts" />
            </div>
          </div>
        </div>
        <div className="horizontal-line-bankAccounts"></div>
        <div className="heading-bankAccounts">BANKS</div>
        <div
          className="horizontal-line-bankAccounts"
          id="blue-line-bankAccounts"
        ></div>
      </div>

      <div className="lowerBody-bankAccounts">
        <div className="lowerBody-part1-bankAccounts">
          <div className="lowerBody-part1-first-bankAccounts">
            <div className="lowerBody-part1-first-section1-bankAccounts">
              <p className="lowerBody-part1-first-section1-content-bankAccounts">
                Banking with Vyapar
              </p>

              <p className="content-bankAccounts">
                {" "}
                Add Bank accounts on Vyapar and you can effortlessley:
              </p>
            </div>
          </div>
          <div className="lowerBody-part1-second-bankAccounts">
            <div className="lowerBody-part1-second-section1-bankAccounts">
              <p>
                <b>Print Bank Details on Invoices</b>
                <br></br>
                Print account details on your invoices and get payments via
                NEFT/RTGS/IMPS etc.
              </p>
            </div>
            <div className="lowerBody-part1-second-section2-bankAccounts">
              <p>
                <b>Connect Bank Online</b>
                <br></br>
                Get transactions and balance in real time on Vyapar from your
                bank.
              </p>
            </div>
            <div className="lowerBody-part1-second-section3-bankAccounts">
              <p>
                <b>Receive Online Payments</b>
                <br></br>
                Print QR code on your invoices or send payment links to your
                customers.
              </p>
            </div>
          </div>

          <div className="lowerBody-part1-third-bankAccounts">
            <button className="add-bank-account-bankAccounts">
              Add Bank Account
            </button>
            <button className="watch-video-bankAccounts">Watch Video</button>
          </div>
        </div>
      </div>
    </div>
  );
};
