import React from "react";
import "./dashboard.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { AiFillSetting } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { SalesGraph } from "./charts/SalesChart";
import { PurchaseGraph } from "./charts/PurchaseChart";
import { useState, useEffect } from "react";
import { FaArrowDown, FaArrowUp, FaFileInvoice } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import Dropdown from "react-bootstrap/Dropdown";

export const DashBoard = () => {
  const [balance, setBalance] = useState(0);
  const [purchaseBalance, setPurchaseBalance] = useState(0);
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [salesAmount, setSalesAmount] = useState(0);
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
  async function totalSalesAmount() {
    await fetch("/getTotalSalesAmount")
      .then((val) => val.json())
      .then((value) => {
        setSalesAmount(parseInt(value));
        // console.log(data);
      });
  }

  useEffect(() => {
    componentDidMount();
    PurchaseBalance();
    PurchaseAmount();
    totalSalesAmount();
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
        {/* <div className="horizontal-line-dashboard"></div>
        <h3 className="heading-dashboard">DASHBOARD</h3> */}
      </div>

      <div className="lowerBody-dashboard">
        <div className="leftDiv1">
          <div className="leftDiv-dashboardA">
            {/* This is left section | part(a) */}
            {/* <FaFileInvoice /> */}
            <div className="top-header-sale">
              <FaFileInvoice className="invoice" />
              <h5 className="tag-header">Sale</h5>
              <DropdownDashboard />
            </div>
            <div className="lower-part-sale-graph">
              <div className="left-portion">
                <h4 className="sale-label">${salesAmount}.00</h4>
                <h6 style={{ color: "blue" }}>Total Sale</h6>
                <br />
                <br />
                <br />
                <FaArrowUp />
                <div className="small-text">This month Growth</div>
              </div>
              <div className="dotted-line"></div>
              <div className="right-portion">
                <SalesGraph className="sale-graph" />
                <div className="small-text">Report : Lifetime</div>
              </div>
            </div>
          </div>
          <div className="leftDiv-dashboardB">
            {/* This is left section | part(b) */}
            <div className="top-header-sale">
              <FaFileInvoice className="invoice" />
              <h5 className="tag-header">Expenses</h5>
              {/* <DropdownDashboard /> */}
            </div>
            <PurchaseGraph />
            <div className="small-text">Report : Lifetime</div>
          </div>
        </div>

        <div className="leftDiv2">
          <div className="leftDiv2A">
            <div className="receive-div">
              <FaArrowDown className="down-arrow" />
              <h5>You'll Receive</h5>
            </div>
            <h5 className="balance-tag">${balance}.00</h5>
          </div>
          <div className="leftDiv2B">
            <div className="receive-div">
              <FaArrowUp className="down-arrow" />
              <h5>You'll Pay</h5>
            </div>
            <h5 className="balance-tag">${purchaseBalance}.00</h5>
          </div>
          <div className="leftDiv2C">
            <div className="receive-div">
              <GrCart className="down-arrow" />
              <h5>Purchase</h5>
            </div>
            <h5 className="balance-tag">${purchaseAmount}.00</h5>
          </div>
        </div>

        <div className="rightDiv-dashboard">
          <div className="tag-header">Stock Inventory</div>
          <div className="data-box-stock">
            <div style={{ margin: "0 0 0 -70%" }}>Stock Value</div>
            <div style={{ margin: "0 0 0 -80%" }}>
              <b>$0.00</b>
            </div>
          </div>
          <div className="data-box-stock-stockInventory-2ndPart">
            <div
              style={{ margin: "0 0 0 -70%" }}
              className="lowStock-stockInventory"
            >
              Low Stocks
            </div>

            <div
              style={{ margin: "0 0 0 -77%" }}
              className="sampleItem-stockInventory"
            >
              Items 10
            </div>
          </div>
          <div className="tag-header-cashAndBank-dashboard">Cash & Bank</div>
          <div className="data-box-stock">
            <div style={{ margin: "0 0 0 -66%" }}>Cash in hand</div>
            <div style={{ margin: "0 0 0 -80%" }}>
              <b>$0.00</b>
            </div>
          </div>
          <div className="data-box-stock">
            <div style={{ margin: "0 0 0 -63%" }}>Bank Accounts</div>
            <div style={{ margin: "0 0 0 -80%" }}>
              <b>$0.00</b>
            </div>
          </div>
          <div className="data-box-stock-openCheques-dashboard">
            <div style={{ margin: "0 0 0 -63%" }}>Open Cheques</div>
            <div
              style={{ margin: "0 0 0 -73%" }}
              className="sampleItem-stockInventory"
            >
              Received(1)
            </div>
            <div
              style={{ margin: "0 0 0 -80%" }}
              className="sampleItem-stockInventory"
            >
              Paid(0)
            </div>
          </div>
          <div className="tag-header-sales-dashboard">Sales</div>
          <div className="data-box-stock-sales-dashboard">
            <div style={{ margin: "0 0 0 -70%" }}>Sales Order</div>
            <div
              style={{ margin: "0 0 0 -60%" }}
              className="sampleItem-stockInventory"
            >
              No. of Open Orders
            </div>
            <div
              style={{ margin: "0 0 0 -50%" }}
              className="sampleItem-stockInventory"
            >
              Open Sales Order Amount
            </div>
          </div>
          <div className="data-box-stock-sales-dashboard">
            <div style={{ margin: "0 0 0 -60%" }}>Delivery Challans</div>
            <div
              style={{ margin: "0 0 0 -58%" }}
              className="sampleItem-stockInventory"
            >
              No. of Open Challans
            </div>
            <div
              style={{ margin: "0 0 0 -53%" }}
              className="sampleItem-stockInventory"
            >
              Delivery Challan Amount
            </div>
          </div>
          <div className="tag-header-purchase-dashboard">Purchase</div>
          <div className="data-box-stock-purchase-dashboard">
            <div style={{ margin: "0 0 0 -63%" }}>Purchase Order</div>
            <div
              style={{ margin: "0 0 0 -55%" }}
              className="sampleItem-stockInventory"
            >
              No. of Purchase Orders
            </div>
            <div
              style={{ margin: "0 0 0 -53%" }}
              className="sampleItem-stockInventory"
            >
              Purchase Order Amount
            </div>
          </div>
          {/* <div className="data-box"></div>
          <div className="data-box"></div>
          <div className="data-box"></div>
          <div className="data-box"></div>
          <div className="data-box"></div> */}
        </div>
      </div>
    </div>
  );
};

// async function getTotalSale(setTotalSale) {
//   await fetch("/gettotalsale")
//     .then((val) => val.json())
//     .then((value) => {
//       setTotalSale(parseInt(value));
//       // console.log(data);
//     });
// }

function DropdownDashboard() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
        Time Period
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
          <div className="small-text">This Month</div>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          {" "}
          <div className="small-text">Previous Month</div>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          {" "}
          <div className="small-text">Lifetime</div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
