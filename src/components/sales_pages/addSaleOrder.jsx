import React, { useContext } from "react";
import "../addSale.css";
import {
  AiFillCalculator,
  AiFillSetting,
  AiOutlineDownload,
  AiFillPrinter,
  AiFillPlusCircle,
} from "react-icons/ai";
import { RxCrossCircled, RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import { Input } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { invoke } from "@tauri-apps/api";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import { store } from "../../state_manager";
// import { AppContext } from "../App";
import { FaWhatsappSquare, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail, BiSolidMessageDots } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { TableA } from "../../settingsPages/tables/tableA";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { AppContext } from "./App";
import { AppContext } from "../../App";
export const AddSaleOrder = (props) => {
  const showToastMessage = () => {
    toast.success("Invoice Generated !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const createNotification = (type) => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message");
          break;
        case "success":
          NotificationManager.success("Success message", "Invoice Generated !");
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          });
          break;
      }
    };
  };
  const [partyNames, setPartyNames] = useState();
  const [currSelectedPartyName, setCurrParty] = useState();
  const [currParty, setSelectedPartyName] = useState();
  const [invoiceNo, setInvoiceNo] = useState();
  const [invoiceDate, setInvoiceDate] = useState();
  const { test } = useContext(AppContext);
  const [balance, setBalance] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [stateofsupply, setStateOfSupply] = useState("");
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [afterSale, setAfterSale] = useState(false);
  const [rows, setRows] = useState([
    {
      party_name_dropdown: "",
      Invoice_no: "",
      Invoice_date: "",
      State_of_supply: "",
      item: "",
      qty: "",
      unit: "Bags",
      price: "",
      amount: "",
      tax: "",
      tax_amount: "",
    },
  ]);
  const navigate = useNavigate();

  function navigateToDashboard() {
    navigate("/loggedIn");
  }

  const handleRemoveLast = () => {
    setRows(rows.slice(0, -1));
  };

  const addRow1 = () => {
    setRows([
      ...rows,
      {
        party_name_dropdown: "",
        Invoice_no: "",
        Invoice_date: "",
        State_of_supply: "",
        item: "",
        qty: "",
        unit: "Bags",
        price: "",
        amount: "",
        tax: "",
        tax_amount: "",
      },
    ]);
  };
  const location = useLocation();
  // const [cName, setCName] = useState(location.state.company);
  var i = 0;
  function addRow(i) {
    i = i + 1;
    var table = document.getElementById("input-table");
    // var row = table.insertRow(i);
    // var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // var cell1 = row.insertCell(2);
    // var cell2 = row.insertCell(3);
    let template = `<tr><td className="col col-1">
    <input class="table-input-addpurchase" type="text" name="item"+"${i}"  />
  </td>
  <td className="col col-2">
    <input class="table-input-addpurchase" type="text" name="qty"+"${i}" />
  </td>
  <td className="col col-3">
    <input class="table-input-addpurchase" type="text" name="price"+"${i}"  />
  </td>
  <td className="col col-4">
    <input class="table-input-addpurchase" type="text" name="amount"+"${i}"  />
  </td></tr>`;
    table.innerHTML += template;
  }
  function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = JSON.stringify(rows);
    console.log(formData);

    invoke("new_sale_data", {
      number: props.userNumber.current,
      company: props.userCompany.current,
      jsonData: formData,
      totalPrice: totalAmount.toString(),
      recievedPrice: receivedAmount.toString(),
    });
    props.showToastMessage();
    // wait(2000);
    navigateToDashboard();
  };

  async function calcTotal() {
    var temp = 0;
    for (var i = 0; i < rows.length; i++) {
      temp = temp + parseFloat(rows[i]["amount"]);
    }
    await setTotalAmount(temp);
    var recieved_amount = parseFloat(
      document.getElementById("received-amount").value
    );
    if (recieved_amount === NaN) {
      recieved_amount = 0;
    }
    var a = temp - recieved_amount ? receivedAmount : 0;
    // await setBalance(a);
    console.log("TEMP>>>>>>>>>>>>>>>>>>>>>>" + a);
    // // console.log(totalAmount);

    document.getElementById("total-value-input").value = temp;
    await setBalance(temp);
    console.log(balance);
    console.log(temp);
    console.log(recieved_amount);
    // if (a != null) {
    //   document.getElementById("balance-amount").value = a.toString();
    // }
  }

  async function calcBalance() {
    console.log("In calc Balance");
    var recieved_amount = parseFloat(
      document.getElementById("received-amount").value
    );
    setReceivedAmount(recieved_amount);
    var balance_amount = balance - recieved_amount;
    console.log(balance + "\t\t" + recieved_amount);
    document.getElementById("balance-amount").value = balance_amount;
  }

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newRows = [...rows];
    newRows[index][name] = value;
    newRows[index]["party_name_dropdown"] = currParty;
    newRows[index]["Invoice_no"] = invoiceNo;
    newRows[index]["Invoice_date"] = invoiceDate;
    newRows[index]["State_of_supply"] = stateofsupply;
    // newRows[index]["balance"] = "0";
    newRows[index]["tax_amount"] =
      newRows[index]["price"] *
      newRows[index]["tax"] *
      newRows[index]["qty"] *
      0.01;

    newRows[index]["amount"] =
      newRows[index]["price"] * newRows[index]["qty"] +
      newRows[index]["tax_amount"];
    setRows(newRows);
    calcTotal();
    // console.log("Balance : " + balance);
    // document.getElementById("total-value-input").value = totalAmount;
  };

  const testFunction = (event) => {
    // console.log(event.target.value);
    setSelectedPartyName(event.target.value);
  };
  useEffect(() => {
    // getPartyNames();
    // console.log(
    //   "FROM ADD SALES : " + props.userNumber + "\t\t" + props.userCompany
    // );
    console.log("In addSale : " + props.userNumber.current);
    invoke("get_parties_name", {
      number: props.userNumber.current,
      company: props.userCompany.current,
    }).then((response) => {
      setPartyNames(JSON.parse(response));
      setSelectedPartyName(partyNames[0].Name);
    });
    // console.log("Party Names List : " + partyNames);
  }, []);
  return (
    <div id="main-background-body">
      {/* action="/addSaleData" */}
      <form
        className="form-purchase-addPurchaseV3"
        // method="post"
        id="myForm"
        onSubmit={handleSubmit}
      >
        <div className="top-bar-addSale">
          <div className="window-addSale">
            <div className="window-inner-text">Sale Order #1</div>
            <RxCross2 className="cross-without-circle" />
          </div>
          <AiFillPlusCircle className="plus-addSalePage" />
          <div className="page-options-addSale">
            <AiFillCalculator className="icn-addSale" />
            <AiFillSetting className="icn-addSale" />
            <RxCrossCircled className="icn-addSale" />
          </div>
        </div>
        <div className="purchaseTag-addSale">
          <h4 className="headingTag-addSale">Sale Order</h4>
        </div>
        {/* <div className="line"></div> */}
        <div className="party-detail-addPurchase-addPurchaseV3">
          <div className="party-detail-part1-addPurchase-addPurchaseV3">
            <select
              id="dropdown-party-addPurchase-addPurchaseV3"
              name="party_name_dropdown"
              onChange={testFunction}
            >
              {/* <option value="volvo">Party 1</option>
          <option value="saab">Party 2</option>
          <option value="mercedes">Party 3</option>
          <option value="audi">Party 4</option> */}

              {partyNames?.map((row, index) => (
                <option
                  value={row.Name}
                  // name="party-name-dropdown"
                  // onClick={(e) => testFunction(e.target.val)}
                >
                  {row.Name}
                </option>
              ))}
            </select>

            <input
              className="number-addPurchase-addPurchaseV3"
              placeholder="Phone no."
            />
          </div>

          <div className="party-detail-part2-addPurchase-addPurchaseV3">
            <div className="party-detail-part2-insideDiv-addPurchase-addPurchaseV3">
              <div className="invoice-info-box-Purchase">
                <label className="balance-box-label-addPurchaseV3">
                  Order No.
                </label>
                <input
                  type="text"
                  className="upperButton-addPurchase-addPurchaseV3"
                  name="order_no"
                  onChange={(e) => setInvoiceNo(e.target.value)}
                ></input>
              </div>
              <div className="invoice-info-box-Purchase">
                <label className="balance-box-label-addPurchaseV3">
                  Order Date
                </label>
                <input
                  type="date"
                  name="order_date"
                  className="upperButton-addPurchase-addPurchaseV3"
                ></input>
              </div>
              <div className="invoice-info-box-Purchase">
                <label className="balance-box-label-addPurchaseV3">
                  Due Date
                </label>
                <input
                  type="date"
                  name="due_date"
                  className="upperButton-addPurchase-addPurchaseV3"
                ></input>
              </div>
              <div className="invoice-info-box-Purchase">
                <label className="balance-box-label-addPurchaseV3">
                  State of supply{" "}
                </label>
                <input
                  type="text"
                  name="state_of_supply"
                  className="upperButton-addPurchase-addPurchaseV3"
                ></input>
              </div>
            </div>
          </div>
        </div>

        <div className="item-table-addPurchase-addSale">
          <div className="header-table-addPurchase-addSale">
            <table
              className="responsive-table-addSale"
              id="input-table-addSale"
            >
              {/* <form action="/addPurchaseData" method="get"> */}
              <tbody>
                <tr>
                  <td id="td-addSale-heading">#</td>
                  <td className="col col-4" id="td-addSale-heading">
                    ITEM
                  </td>
                  <td id="td-addSale-heading">QTY</td>
                  <td id="td-addSale-heading">UNIT</td>
                  <td id="td-addSale-heading">
                    <div className="p-per-u-box">
                      <div className="addSale-heading-tax">PRICE/UNIT</div>
                      <select name="" id="" className="dropdown-addSale">
                        <option value="">With Tax</option>
                        <option value="">Without Tax</option>
                      </select>
                    </div>
                  </td>
                  <td colSpan={2} id="td-addSale-heading">
                    <div className="addSale-heading-tax">TAX</div>
                    <div className="tax-dropdown-addSale">
                      <div id="dropdown-addSale-tax">%</div>
                      <div id="dropdown-addSale-tax">Amount</div>
                    </div>
                  </td>
                  {/* <td id="td-addSale-heading-tax">Tax</td> */}
                  <td id="td-addSale-heading">AMOUNT</td>
                </tr>
                {rows.map((row, index) => {
                  return (
                    <tr key={index}>
                      <td
                        // className="col col-1"
                        id={
                          index % 2 == 0 ? "td-addSale" : "td-addSale-diffColor"
                        }
                      >
                        {index}
                      </td>
                      <td
                        // className="col col-1"
                        id={
                          index % 2 == 0 ? "td-addSale" : "td-addSale-diffColor"
                        }
                      >
                        <input
                          className={
                            index % 2 == 0
                              ? "table-2nd-input-addpurchase-addSale"
                              : "table-2nd-input-addpurchase-addSale-DifferentColor"
                          }
                          // className="table-2nd-input-addpurchase-addSale"
                          type="text"
                          name="item"
                          id="item"
                          value={row.item}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </td>
                      <td
                        // className="col col-2"
                        id={
                          index % 2 == 0 ? "td-addSale" : "td-addSale-diffColor"
                        }
                      >
                        <input
                          className={
                            index % 2 == 0
                              ? "table-2nd-input-addpurchase-addSale"
                              : "table-2nd-input-addpurchase-addSale-DifferentColor"
                          }
                          // className="table-2nd-input-addpurchase-addSale"
                          type="number"
                          name="qty"
                          id="qty"
                          value={row.qty}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </td>
                      <td
                        // className="col col-3"
                        id={
                          index % 2 == 0 ? "td-addSale" : "td-addSale-diffColor"
                        }
                      >
                        <input
                          className={
                            index % 2 == 0
                              ? "table-2nd-input-addpurchase-addSale"
                              : "table-2nd-input-addpurchase-addSale-DifferentColor"
                          }
                          // className="table-2nd-input-addpurchase-addSale"
                          type="number"
                          name="unit"
                          id="unit"
                          // value={row.price}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </td>
                      <td
                        // className="col col-4"
                        id={
                          index % 2 == 0 ? "td-addSale" : "td-addSale-diffColor"
                        }
                      >
                        <input
                          className={
                            index % 2 == 0
                              ? "table-2nd-input-addpurchase-addSale"
                              : "table-2nd-input-addpurchase-addSale-DifferentColor"
                          }
                          // className="table-2nd-input-addpurchase-addSale"
                          type="number"
                          name="price"
                          id="price"
                          // value={row.amount}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </td>
                      <td
                        // className="col col-4"
                        id={
                          index % 2 == 0 ? "td-addSale" : "td-addSale-diffColor"
                        }
                      >
                        <input
                          className={
                            index % 2 == 0
                              ? "table-2nd-input-addpurchase-addSale"
                              : "table-2nd-input-addpurchase-addSale-DifferentColor"
                          }
                          // className="table-2nd-input-addpurchase-addSale"
                          type="number"
                          name="tax"
                          id="tax"
                          value={row.tax}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </td>
                      <td
                        // className="col col-4"
                        id={
                          index % 2 == 0 ? "td-addSale" : "td-addSale-diffColor"
                        }
                      >
                        <input
                          className={
                            index % 2 == 0
                              ? "table-2nd-input-addpurchase-addSale"
                              : "table-2nd-input-addpurchase-addSale-DifferentColor"
                          }
                          // className="table-2nd-input-addpurchase-addSale"
                          type="number"
                          name="tax-amount"
                          id="tax-amount"
                          value={row.tax_amount}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </td>
                      <td
                        // className="col col-4"
                        id={
                          index % 2 == 0 ? "td-addSale" : "td-addSale-diffColor"
                        }
                      >
                        <input
                          className={
                            index % 2 == 0
                              ? "table-2nd-input-addpurchase-addSale"
                              : "table-2nd-input-addpurchase-addSale-DifferentColor"
                          }
                          // className="table-2nd-input-addpurchase-addSale"
                          type="number"
                          name="amount"
                          id="amount"
                          value={row.amount}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </td>
                    </tr>
                  );
                })}
                {/* <tr>
                  <td className="add-row-btn-row">
                    <div onClick={addRow1} className="add-row-button-addSale">
                      Add Row
                    </div>
                  </td>
                </tr> */}
              </tbody>
            </table>
            {/* <br /> */}
            <div className="white-strip-AddRow-Btn">
              <div onClick={addRow1} className="add-row-button-addSale">
                Add Row
              </div>
              {totalAmount != 0 && (
                <div className="totalAmountText">{totalAmount}</div>
              )}
            </div>
            {/* <button type="submit" id="submit-button-addPurchase">
              Save
            </button> */}
            {/* <br /> */}
            {/* <button type="submit">Submit</button> */}
            {/* </form> */}
            {/* <button onClick={addRow}>Add Row</button> */}
          </div>

          <div className="white-strip-bottom-Sale"></div>
          <button
            type="submit"
            id="submit-button-addPurchase-addSale"
            // onClick={showToastMessage}
          >
            Save
          </button>
          {/* <button onClick={getFormData}>Print</button> */}
          {/* <button onClick={() => addRow(i)} id="add-row-button">
            Add Row
          </button> */}
          {/* <button onClick={clickTest}>Test Name</button> */}
        </div>
        <div className="white-strip-AddRow-Btn">
          <div onClick={addRow1} className="add-row-button-addSale">
            Add Row
          </div>
        </div>
        <br />
        <br />
        <div onClick={handleRemoveLast} id="add-row-button-addPurchaseV3">
          Remove Row
        </div>
        <div id="balance-box-addSale">
          <div className="balance-box-data-Sale">
            <label className="balance-box-label-addSale">Total</label>
            <input
              type="text"
              className="balance-box-input-addSale"
              id="total-value-input"
            />
          </div>
          {/* <br /> */}
          <div className="balance-box-data-Sale">
            <label className="balance-box-label-addSale">Received</label>
            <input
              type="text"
              className="balance-box-input-addSale"
              id="received-amount"
              onChange={(e) => calcBalance()}
              // onChange={(e) => setReceivedAmount(e.target.value)}
            />
          </div>
          {totalAmount != 0 && totalAmount != NaN && (
            <div className="balance-box-data-Sale">
              <label className="balance-box-label-addSale">Balance</label>
              <input
                type="text"
                className="balance-box-input-addSale"
                id="balance-amount"

                // value={balance}
                // onChange={(e) => setReceivedAmount(e.target.value)}
              />
            </div>
          )}
        </div>
      </form>
      {/* <button onClick={() => addRow(i)} id="add-row-button">
        Add Row
      </button> */}
    </div>
  );
};
