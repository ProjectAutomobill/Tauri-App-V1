import React from "react";
import "./dashboard.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { AiFillSetting } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { SalesGraph } from "./charts/SalesChart";
import { PurchaseGraph } from "./charts/PurchaseChart";
import { useState, useEffect } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export const DashBoard = () => {
  const [balance, setBalance] = useState(0);
  const [purchaseBalance, setPurchaseBalance] = useState(0);
  const [purchaseAmount, setPurchaseAmount] = useState(0);

  async function componentDidMount() {
    await fetch("/getBalance")
      .then((val) => val.json())
      .then((value) => {
        setBalance(parseInt(value));
        // console.log(data);
      });
  }
  async function PurchaseBalance() {
    await fetch("/getPurchaseBalance")
      .then((val) => val.json())
      .then((value) => {
        setPurchaseBalance(parseInt(value));
        // console.log(data);
      });
  }

  async function PurchaseAmount() {
    await fetch("/getPurchaseAmount")
      .then((val) => val.json())
      .then((value) => {
        setPurchaseAmount(parseInt(value));
        // console.log(data);
      });
  }

  useEffect(() => {
    componentDidMount();
    PurchaseBalance();
    PurchaseAmount();
  }, []);

  return (
    <div className="dashboard">
      <div className="upperDiv-dashboard">
        <div className="upperDivPart1-dashboard">
          <div className="input-business-dashboard">
            <input
              type="text"
              placeholder="•Enter Business Name"
              id="business-entry-dashboard"
            ></input>
          </div>

          {/* <div className='middle-portion'>
                    PRODUCTS
                </div> */}

          <div className="marginDiv-dashboard">
            <div className="saleBtnDiv-dashboard">
              <BsFillPlusCircleFill className="plusSale-dashboard" />
              <button className="addBtnSale-dashboard">Add Sale</button>
            </div>
            <div className="purchaseBtnDiv-dashboard">
              {/* <AiOutlinePlus className="plusSale" /> */}
              <BsFillPlusCircleFill className="plusSale-purchase-dashboard" />
              <button className="addBtnPurchase-dashboard">Add Purchase</button>
            </div>
            <div className="moreBtnDiv-dashboard">
              <BsFillPlusCircleFill className="plusSaleMore-dashboard" />
              <button className="addBtnMore-dashboard">Add More</button>
            </div>
            <div className="settingBtnDiv-dashboard">
              <AiFillSetting className="setting-dashboard" />
            </div>
          </div>
          {/* <div className='horizontal-line'>fgyrfhj</div> */}
        </div>
        <div className="horizontal-line-dashboard"></div>
        <h3 className="heading-dashboard">YOUR PROFILE</h3>
      </div>

      <div className="lowerBody-dashboard">
        <div className="leftDiv1">
          <div className="leftDiv-dashboardA">
            {/* This is left section | part(a) */}
            <SalesGraph />
          </div>
          <div className="leftDiv-dashboardB">
            {/* This is left section | part(b) */}
            <PurchaseGraph />
          </div>
        </div>

        <div className="leftDiv2">
          <div className="leftDiv2A">
            <div>
              <FaArrowDown />
              <h3>You'll Receive</h3>
            </div>
            {balance}
          </div>
          <div className="leftDiv2B">
            <div>
              <FaArrowDown />
              <h3>You'll Pay</h3>
            </div>
            {purchaseBalance}
          </div>
          <div className="leftDiv2C">{purchaseAmount}</div>
        </div>

        <div className="rightDiv-dashboard">
          <div className="data-box"></div>
          <div className="data-box"></div>
          <div className="data-box"></div>
          <div className="data-box"></div>
          <div className="data-box"></div>
          <div className="data-box"></div>
        </div>
      </div>
    </div>
  );
};
