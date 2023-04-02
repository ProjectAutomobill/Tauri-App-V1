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
import { Link, Navigate, useLocation } from "react-router-dom";
export const DashBoard = (props) => {
  const [balance, setBalance] = useState(0);
  const [purchaseBalance, setPurchaseBalance] = useState(0);
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [salesAmount, setSalesAmount] = useState(0);
  const [stockValue, setStockValue] = useState(0);
  const [stockQty, setStockQty] = useState(0);
  const location = useLocation();
  const [cName, setCName] = useState(location.state.company);
  const [receiveList, setReceiveList] = useState();
  const [payList, setPayList] = useState();
  const [purchaseItemList, setPurchaseItemList] = useState();

  // console.log(cName);
  async function componentDidMount() {
    await fetch(
      "/getBalance?number=" + props.userNumber + "&company=" + cName.toString()
    )
      .then((val) => val.json())
      .then((value) => {
        setBalance(parseInt(value));
        // console.log(data);
      });
  }
  async function PurchaseBalance() {
    console.log("Purchase Balance : " + purchaseBalance);
    await fetch(
      "/getPurchaseBalance?number=" +
        props.userNumber +
        "&company=" +
        cName.toString()
    )
      .then((val) => val.json())
      .then((value) => {
        setPurchaseBalance(parseInt(value));
      });
  }

  async function PurchaseAmount() {
    console.log("Purchase Balance : " + purchaseBalance);
    await fetch(
      "/getPurchaseAmount?number=" +
        props.userNumber +
        "&company=" +
        cName.toString()
    )
      .then((val) => val.json())
      .then((value) => {
        setPurchaseAmount(parseInt(value));
        console.log("Value : " + value);
      });
    // await fetch("/getPurchaseAmount")
    //   .then((val) => console.log("Fetch Data  :" + val.json()))
    //   .then((value) => {
    //     console.log("Value : " + value);
    //   });
  }
  async function totalSalesAmount() {
    await fetch(
      "/getTotalSalesAmount?number=" +
        props.userNumber +
        "&company=" +
        cName.toString()
    )
      .then((val) => val.json())
      .then((value) => {
        setSalesAmount(parseInt(value));
        console.log("SalesAmount  :" + salesAmount);
      });
  }
  async function getStockValue() {
    await fetch(
      "/getStockValue?number=" +
        props.userNumber +
        "&company=" +
        cName.toString()
    )
      .then((val) => val.json())
      .then((value) => {
        setStockValue(parseInt(value));
        // console.log(data);
      });
  }
  async function getStockQty() {
    await fetch(
      "/getTotalItemQty?number=" +
        props.userNumber +
        "&company=" +
        cName.toString()
    )
      .then((val) => val.json())
      .then((value) => {
        setStockQty(parseInt(value));
        // console.log(data);
      });
  }
  async function getReceiveList() {
    await fetch(
      "/getReceiveList?number=" +
        props.userNumber +
        "&company=" +
        cName.toString()
    )
      .then((val) => val.json())
      .then((value) => {
        setReceiveList(value);
      });
  }
  async function getPayList() {
    await fetch(
      "/getPayList?number=" + props.userNumber + "&company=" + cName.toString()
    )
      .then((val) => val.json())
      .then((value) => {
        setPayList(value);
      });
  }
  async function getPurchaseItemList() {
    await fetch(
      "/getPurchaseItemList?number=" +
        props.userNumber +
        "&company=" +
        cName.toString()
    )
      .then((val) => val.json())
      .then((value) => {
        setPurchaseItemList(value);
      });
  }
  useEffect(() => {
    console.log("USER NUMBER : " + props.userNumber + "&company=" + cName);
    componentDidMount();
    PurchaseBalance();
    PurchaseAmount();
    totalSalesAmount();
    getStockValue();
    getStockQty();
    getReceiveList();
    getPayList();
    getPurchaseItemList();
  }, []);

  return (
    <div className="dashboard">
      <div className="upperDiv-dashboard">
        <div className="upperDivPart1-dashboard">
          <div className="input-business-dashboard">
            <input
              type="text"
              placeholder="• Enter Business Name"
              id="business-entry-dashboard"
            ></input>
            <button id="business-name-save-btn">Save</button>
          </div>

          {/* <div className='middle-portion'>
                    PRODUCTS
                </div> */}

          <div className="marginDiv-dashboard">
            {/* <Link to="/sale"> */}
            <div className="saleBtnDiv-dashboard">
              <BsFillPlusCircleFill className="plusSale-dashboard" />

              <button
                className="addBtnSale-dashboard"
                onClick={<Navigate to="/sale" />}
              >
                Add Sale
              </button>
            </div>
            {/* </Link> */}
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
        <div className="leftDiv1-dashboard">
          <div className="leftDiv-dashboardA-dashboard">
            {/* This is left section | part(a) */}
            {/* <FaFileInvoice /> */}
            <div className="top-header-sale-dashboard">
              <FaFileInvoice className="invoice-dashboard" />
              <h5 className="tag-header-dashboard">Sale</h5>
              <DropdownDashboard />
            </div>
            <div className="lower-part-sale-graph-dashboard">
              <div className="left-portion-dashboard">
                <h4 className="sale-label-dashboard">${salesAmount}.00</h4>
                <h6 style={{ color: "blue" }}>Total Sale</h6>

                <br />
                <br />
                {/* <br />
                <br />
                <br />
                <br /> */}
                {/* <br />
                <br /> */}
                <FaArrowUp />
                <div className="small-text-dashboard">This month Growth</div>
              </div>
              <div className="dotted-line-dashboard"></div>
              <div className="right-portion-dashboard">
                <SalesGraph
                  className="sale-graph-dashboard"
                  userNumber={props.userNumber}
                  userCompany={cName}
                />
                <div className="small-text-dashboard">Report : Lifetime</div>
              </div>
            </div>
          </div>
          <div className="leftDiv-dashboardB-dashboard">
            {/* This is left section | part(b) */}
            <div className="top-header-sale-dashboard">
              <FaFileInvoice className="invoice-dashboard" />
              <h5 className="tag-header-dashboard">Expenses</h5>
              {/* <DropdownDashboard /> */}
            </div>
            <PurchaseGraph userNumber={props.userNumber} userCompany={cName} />
            <div className="small-text-dashboard">Report : Lifetime</div>
          </div>
        </div>

        <div className="leftDiv2-dashboard">
          <div className="leftDiv2A-dashboard">
            <div className="receive-div-dashboard">
              <FaArrowDown className="down-arrow-dashboard" />
              <h5 className="gray-color">You'll Receive</h5>
            </div>
            <h5 className="balance-tag-dashboard">${balance}.00</h5>
            {receiveList?.map((row) => (
              <div className="receiveInfo-dashboard">
                <div className="receiveInfoName-dashboard">{row.PartyName}</div>
                <div className="receiveInfoBalance-dashboard">
                  {row.Balance}
                </div>
              </div>
            ))}
          </div>
          <div className="leftDiv2B-dashboard">
            <div className="receive-div-dashboard">
              <FaArrowUp className="up-arrow-dashboard" />
              <h5 className="gray-color">You'll Pay</h5>
            </div>
            <h5 className="balance-tag-dashboard">${purchaseBalance}.00</h5>
            {payList?.map((row) => (
              <div className="receiveInfo-dashboard">
                <div className="receiveInfoName-dashboard">{row.PartyName}</div>
                <div className="payInfoBalance-dashboard">{row.Balance}</div>
              </div>
            ))}
          </div>
          <div className="leftDiv2C-dashboard">
            <div className="receive-div-dashboard">
              <GrCart className="down-arrow-dashboard" />
              <h5 className="gray-color">Purchase</h5>
            </div>
            <h5 className="balance-tag-dashboard">${purchaseAmount}.00</h5>
            {purchaseItemList?.map((row) => (
              <div className="receiveInfo-dashboard">
                <div className="receiveInfoName-dashboard">{row.Item}</div>
                <div className="receiveInfoBalance-dashboard">{row.Price}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rightDiv-dashboard">
          <div className="tag-header-dashboard">Stock Inventory</div>
          <div className="data-box-stock-dashboard">
            <div className="inner-element-data-box-dashboard">Stock Value</div>
            <div className="inner-element-val-data-box-dashboard">
              <b>${stockValue}.00</b>
            </div>
          </div>
          <div className="data-box-stock-dashboard">
            <div className="inner-element-data-box-dashboard">Low Stocks</div>
            <div className="inner-element-val-data-box-stock-dashboard">
              <div className="item-name-stock-box">Item</div>
              <div className="item-qty-stock-box">-100</div>
            </div>
          </div>
          <div className="tag-header-cashAndBank-dashboard">Cash & Bank</div>
          <div className="data-box-stock-dashboard">
            <div style={{ margin: "0 0 0 -66%" }}>Cash in hand</div>
            <div style={{ margin: "0 0 0 -80%" }}>
              <b>$0.00</b>
            </div>
          </div>
          <div className="data-box-stock-dashboard">
            <div style={{ margin: "0 0 0 -63%" }}>Bank Accounts</div>
            <div style={{ margin: "0 0 0 -80%" }}>
              <b>$0.00</b>
            </div>
          </div>
          <div className="data-box-stock-openCheques-dashboard">
            <div style={{ margin: "0 0 0 -63%" }}>Open Cheques</div>
            <div
              style={{ margin: "0 0 0 -73%" }}
              className="sampleItem-stockInventory-dashboard"
            >
              Received(1)
            </div>
            <div
              style={{ margin: "0 0 0 -80%" }}
              className="sampleItem-stockInventory-dashboard"
            >
              Paid(0)
            </div>
          </div>
          <div className="tag-header-sales-dashboard">Sales</div>
          <div className="data-box-stock-sales-dashboard">
            <div style={{ margin: "0 0 0 -70%" }}>Sales Order</div>
            <div
              style={{ margin: "0 0 0 -60%" }}
              className="sampleItem-stockInventory-dashboard"
            >
              No. of Open Orders
            </div>
            <div
              style={{ margin: "0 0 0 -50%" }}
              className="sampleItem-stockInventory-dashboard"
            >
              Open Sales Order Amount
            </div>
          </div>
          <div className="data-box-stock-sales-dashboard">
            <div style={{ margin: "0 0 0 -60%" }}>Delivery Challans</div>
            <div
              style={{ margin: "0 0 0 -58%" }}
              className="sampleItem-stockInventory-dashboard"
            >
              No. of Open Challans
            </div>
            <div
              style={{ margin: "0 0 0 -53%" }}
              className="sampleItem-stockInventory-dashboard"
            >
              Delivery Challan Amount
            </div>
          </div>
          <div className="tag-header-purchase-dashboard">Purchase</div>
          <div className="data-box-stock-purchase-dashboard">
            <div style={{ margin: "0 0 0 -63%" }}>Purchase Order</div>
            <div
              style={{ margin: "0 0 0 -55%" }}
              className="sampleItem-stockInventory-dashboard"
            >
              No. of Purchase Orders
            </div>
            <div
              style={{ margin: "0 0 0 -53%" }}
              className="sampleItem-stockInventory-dashboard"
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
      <Dropdown.Toggle variant="Secondary" id="dropdown-basic-dashboard">
        Time Period
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
          <div className="small-text-dashboard">This Month</div>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          {" "}
          <div className="small-text-dashboard">Previous Month</div>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          {" "}
          <div className="small-text-dashboard">Lifetime</div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
