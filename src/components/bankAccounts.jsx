import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
// import {FiSearch} from 'react-icons/fi';
// import {AiOutlinePlus} from 'react-icons/ai';
import { FaShoppingCart } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import "./bankAccounts.css";
export const BankAccounts = () => {
  return (
    <div className="main-bankAccounts">
      <div className="upperDiv-bankAccounts">
        <div className="upperDivPart1-bankAccounts">
          <div className="input-business-bankAccounts">
            <input
              type="text"
              placeholder="•Enter Business Name"
              id="business-entry-bankAccounts"
            ></input>
          </div>

          <div className="marginDiv-bankAccounts">
            <div className="saleBtnDiv-bankAccounts">
              <BsFillPlusCircleFill className="plusSale-bankAccounts" />
              <button className="addBtnSale-bankAccounts">Add Sale</button>
            </div>
            <div className="purchaseBtnDiv-bankAccounts">
              <BsFillPlusCircleFill className="plusSale-purchase-bankAccounts" />
              <button className="addBtnPurchase-bankAccounts">
                Add Purchase
              </button>
            </div>
            <div className="moreBtnDiv-bankAccounts">
              <BsFillPlusCircleFill className="plusSaleMore-bankAccounts" />
              <button className="addBtnMore-bankAccounts">Add More</button>
            </div>
            <div className="settingBtnDiv-bankAccounts">
              <AiFillSetting className="setting-bankAccounts" />
            </div>
          </div>
        </div>
        <div className="horizontal-line-bankAccounts"></div>
        <h3 className="heading-bankAccounts">BANKS</h3>
      </div>

      <div className="lowerBody-bankAccounts">
        <div className="lowerBody-part1-bankAccounts">
          <div className="lowerBody-part1-first-bankAccounts">
            <div className="lowerBody-part1-first-section1-bankAccounts">
              <p className="lowerBody-part1-first-section1-content-bankAccounts">
                Banking with Vyapar
              </p>

              <p> Add Bank accounts on Vyapar and you can effortlessley:</p>
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
