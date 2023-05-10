import React from "react";
import "./dashboard.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { AiFillSetting, AiFillPrinter } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { SalesGraph } from "./charts/SalesChart";
import { PurchaseGraph } from "./charts/PurchaseChart";
import { useState, useEffect } from "react";
import { FaArrowDown, FaArrowUp, FaFileInvoice } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { IoWalletOutline } from "react-icons/io5";
import Dropdown from "react-bootstrap/Dropdown";
import { invoke } from "@tauri-apps/api";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import ToggleButton from "react-toggle-button";

export const DashBoard = (props) => {
  const [balance, setBalance] = useState(0);
  const [purchaseBalance, setPurchaseBalance] = useState(0);
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [salesAmount, setSalesAmount] = useState(0);
  const [stockValue, setStockValue] = useState(0);
  const [stockQty, setStockQty] = useState(0);
  const location = useLocation();
  // const [cName, setCName] = useState(location.state.company);
  const [cName, setCName] = useState(0);
  const [receiveList, setReceiveList] = useState();
  const [payList, setPayList] = useState();
  const [purchaseItemList, setPurchaseItemList] = useState();
  const [blur, setBlur] = useState(false);
  const [b_name, setNewBName] = useState();
  const [lowStockData, setLowStockData] = useState();
  const navigate = useNavigate();
  // console.log(cName);

  function navigateToSale() {
    navigate("/sale");
  }
  function navigateToPurchase() {
    navigate("/purchase");
  }

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
    // console.log("Purchase Balance : " + purchaseBalance);
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
    // console.log("Purchase Balance : " + purchaseBalance);
    await fetch(
      "/getPurchaseAmount?number=" +
        props.userNumber +
        "&company=" +
        cName.toString()
    )
      .then((val) => val.json())
      .then((value) => {
        setPurchaseAmount(parseInt(value));
        // console.log("Value : " + value);
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
        // console.log("SalesAmount  :" + salesAmount);
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

  function blurScreen() {
    document.getElementsByClassName("dashboard").style.backdropFilter =
      "blur(10px)";
  }

  function update_b_name() {
    invoke("change_business_name", {
      number: props.userNumber,
      company: cName.toString(),
      bNameVal: b_name.toString(),
    });
    // `invoke` returns a Promise
    // .then((response) => setBalance(parseInt(response)));
  }

  useEffect(() => {
    console.log(
      "USER NUMBER : " +
        props.userNumber +
        "&company=" +
        props.userCompany +
        "\tIn Dashboard"
    );
    // componentDidMount();
    // PurchaseBalance();
    // PurchaseAmount();
    // totalSalesAmount();
    // getStockValue();
    // getStockQty();
    // getReceiveList();
    // getPayList();
    // getPurchaseItemList();
    invoke("component_did_mount", {
      number: props.userNumber,
      company: props.userCompany,
    })
      // `invoke` returns a Promise
      .then((response) => setBalance(parseInt(response)));

    invoke("purchase_balance", {
      number: props.userNumber,
      company: props.userCompany,
    }).then((response) => setPurchaseBalance(parseInt(response)));

    invoke("purchase_amount", {
      number: props.userNumber,
      company: props.userCompany,
    }).then((response) => setPurchaseAmount(parseInt(response)));

    invoke("total_sales_amount", {
      number: props.userNumber,
      company: props.userCompany,
    }).then((response) => setSalesAmount(parseInt(response)));

    invoke("get_stock_value", {
      number: props.userNumber,
      company: props.userCompany,
    }).then((response) => setStockValue(parseInt(response)));

    invoke("get_stock_qty", {
      number: props.userNumber,
      company: props.userCompany,
    }).then((response) => setStockQty(parseInt(response)));

    invoke("get_receive_list", {
      number: props.userNumber,
      company: props.userCompany,
    }).then((response) => setReceiveList(JSON.parse(response)));

    invoke("get_pay_list", {
      number: props.userNumber,
      company: props.userCompany,
    }).then((response) => setPayList(JSON.parse(response)));

    invoke("get_purchase_item_list", {
      number: props.userNumber,
      company: props.userCompany,
    }).then((response) => setPurchaseItemList(JSON.parse(response)));

    invoke("get_low_stock_data", {
      number: props.userNumber,
      company: props.userCompany,
    }).then((response) => setLowStockData(JSON.parse(response)));
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
              onChange={(e) => setNewBName(e.target.value)}
            ></input>
            <button id="business-name-save-btn" onClick={update_b_name}>
              Save
            </button>
          </div>

          {/* <div className='middle-portion'>
                    PRODUCTS
                </div> */}

          <div className="marginDiv-dashboard">
            {/* <Link to="/sale"> */}
            <div className="saleBtnDiv-dashboard">
              <BsFillPlusCircleFill className="plusSale-dashboard" />
              <div className="addBtnSale-dashboard">Add Sale</div>
              {/* <button className="addBtnSale-dashboard" onClick={navigateToSale}>
                Add Sale
              </button> */}
            </div>
            {/* </Link> */}
            <div className="purchaseBtnDiv-dashboard">
              {/* <AiOutlinePlus className="plusSale" /> */}
              <BsFillPlusCircleFill className="plusSale-dashboard" />
              <div
                className="addBtnPurchase-dashboard"
                // onClick={navigateToPurchase}
              >
                Add Purchase
              </div>
            </div>
            <div className="moreBtnDiv-dashboard">
              <BsFillPlusCircleFill className="plusSaleMore-dashboard" />
              <button className="addBtnMore-dashboard">Add More</button>
            </div>
            <div className="vertical-line-upperPart-dashboard"></div>

            <div className="settingBtnDiv-upperPart-dashboard">
              <AiFillSetting className="setting-upperPart-dashboard" />
            </div>
            <div className="printBtnDiv-upperPart-dashboard">
              <AiFillPrinter className="print-upperPart-dashboard" />
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
              <h5 className="tag-header-sale-dashboard">Sale</h5>
              {/* <DropdownDashboard /> */}
              <select name="" id="dropdown-dashboard" placeholder="Time Period">
                <option value="">This Month</option>
                <option value="">Previous Month</option>
                <option value="">Lifetime</option>
              </select>
            </div>
            <div className="lower-part-sale-graph-dashboard">
              <div className="left-portion-dashboard">
                <h4 className="sale-label-dashboard">${salesAmount}.00</h4>
                <h6 className="totalSalelabel-dashboard">Total Sale</h6>

                <br />
                {/* <br />
                <br /> */}
                {/* <br />
                <br />
                <br />
                <br /> */}
                {/* <br />
                <br /> */}
                <FaArrowUp className="Arrow-up-sale-dashboard" />
                <div className="small-text-dashboard">This month Growth</div>
              </div>
              <div className="dotted-line-dashboard"></div>
              <div className="right-portion-dashboard">
                <SalesGraph
                  className="sale-2ndComponent-graph-dashboard"
                  userNumber={props.userNumber}
                  userCompany={props.userCompany}
                />
                <div className="small-text-dashboard">Report : Lifetime</div>
              </div>
            </div>
          </div>
          <div className="leftDiv-dashboardB-dashboard">
            {/* This is left section | part(b) */}
            <div className="top-header-sale-dashboard">
              <IoWalletOutline className="invoice-expense-dashboard" />
              <h5 className="tag-header-expense-dashboard">Expenses</h5>
              <select
                name=""
                id="dropdown-expense-dashboard"
                placeholder="Time Period"
              >
                <option value="">This Month</option>
                <option value="">Previous Month</option>
                <option value="">Lifetime</option>
              </select>
              {/* <DropdownDashboard /> */}
            </div>
            <PurchaseGraph
              userNumber={props.userNumber}
              userCompany={props.userCompany}
            />
            <div className="small-text-dashboard">Report : Lifetime</div>
          </div>
        </div>

        <div className="leftDiv2-dashboard">
          <div className="leftDiv2A-dashboard">
            <div className="receive-div-dashboard">
              <FaArrowDown className="down-arrow-dashboard" />
              <h5 className="gray-color-dashboard">You'll Receive</h5>
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
              <h5 className="gray-color-dashboard">You'll Pay</h5>
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
              <GrCart className="cart-purchase-dashboard" />
              <h5 className="gray-color-dashboard">Purchase</h5>
              <select
                name=""
                id="dropdown-expense-dashboard"
                placeholder="Time Period"
              >
                <option value="">This Month</option>
                <option value="">Previous Month</option>
                <option value="">Lifetime</option>
              </select>
            </div>
            <h5 className="balance-tag-purchase-dashboard">
              ${purchaseAmount}.00
            </h5>
            {purchaseItemList?.map((row) => (
              <div className="receiveInfo-dashboard">
                <div className="receiveInfoName-dashboard">{row.Item}</div>
                <div className="receiveInfoBalance-dashboard">{row.Price}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="vertical-line-dashboard"></div>
        <div className="rightDiv-dashboard">
          <div className="data-box-stock-dashboard-privacy">
            <div className="inner-element-data-box-dashboard">Privacy</div>
            {/* <div className="inner-element-val-data-box-dashboard">
              <b>${stockValue}.00</b>
            </div> */}
            <ToggleButton
              value={blur}
              onToggle={(value) => {
                // setBlur(!value);
                blurScreen(true);
              }}
            />
          </div>
          <br />
          <div className="tag-header-right-dashboard">Stock Inventory</div>
          <div className="data-box-stock-dashboard">
            <div className="inner-element-data-box-dashboard">Stock Value</div>
            <div className="inner-element-val-data-box-dashboard">
              <div className="inner-text-right-panel">
                ${stockValue}
                <div className="smaller-appended-zeros">.00</div>
              </div>
            </div>
          </div>
          <div className="data-box-stock-dashboard">
            <div className="inner-element-data-box-dashboard">Low Stocks</div>
            {lowStockData?.map((row) => (
              <div className="inner-element-val-data-box-stock-dashboard">
                <div className="item-name-stock-box">{row.Name}</div>
                <div className="item-qty-stock-box">{row.Units}</div>
              </div>
            ))}
          </div>
          <div className="tag-header-right-dashboard">Cash & Bank</div>
          <div className="data-box-stock-dashboard">
            <div className="inner-element-data-box-dashboard">Cash in hand</div>
            <div className="inner-element-val-data-box-dashboard">
              <div className="inner-text-right-panel-cashInHand">
                $ 00<div className="smaller-appended-zeros">.00</div>
              </div>
            </div>
          </div>
          <div className="data-box-stock-dashboard">
            <div className="inner-element-data-box-dashboard">
              Bank Accounts
            </div>
            <div className="inner-element-val-data-box-dashboard">
              <div className="inner-text-right-panel">
                $ 00<div className="smaller-appended-zeros">.00</div>
              </div>
            </div>
          </div>
          <div className="data-box-stock-openCheques-dashboard">
            <div className="inner-element-data-box-dashboard">Open Cheques</div>
            <div
              // style={{ margin: "0 0 0 -73%" }}
              className="sampleItem-stockInventory-dashboard"
            >
              Received(1)
            </div>
            <div
              // style={{ margin: "0 0 0 -80%" }}
              className="sampleItem-stockInventory-dashboard"
            >
              Paid(0)
            </div>
          </div>
          <div className="tag-header-sales-dashboard">Sales</div>
          <div className="data-box-stock-sales-dashboard">
            <div className="inner-element-data-box-dashboard">Sales Order</div>
            <div
              // style={{ margin: "0 0 0 -60%" }}
              className="sampleItem-stockInventory-dashboard"
            >
              No. of Open Orders
            </div>
            <div
              // style={{ margin: "0 0 0 -50%" }}
              className="sampleItem-stockInventory-dashboard"
            >
              Open Sales Order Amount
            </div>
          </div>
          <div className="data-box-stock-sales-dashboard">
            <div className="inner-element-data-box-dashboard">
              Delivery Challans
            </div>
            <div
              // style={{ margin: "0 0 0 -58%" }}
              className="sampleItem-stockInventory-dashboard"
            >
              No. of Open Challans
            </div>
            <div
              // style={{ margin: "0 0 0 -53%" }}
              className="sampleItem-stockInventory-dashboard"
            >
              Delivery Challan Amount
            </div>
          </div>
          <div className="tag-header-purchase-dashboard">Purchase</div>
          <div className="data-box-stock-purchase-dashboard">
            <div className="inner-element-data-box-dashboard">
              Purchase Order
            </div>
            <div
              // style={{ margin: "0 0 0 -55%" }}
              className="sampleItem-stockInventory-dashboard"
            >
              No. of Purchase Orders
            </div>
            <div
              // style={{ margin: "0 0 0 -53%" }}
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
