import React, { useContext } from "react";
import "./addSale.css";
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
import { store } from "../state_manager";
import { AppContext } from "../App";
import { FaWhatsappSquare, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail, BiSolidMessageDots } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { TableA } from "../settingsPages/tables/tableA";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddSale = (props) => {
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
    wait(2000);
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
      <ToastContainer />
      {/* action="/addSaleData" */}
      {afterSale == false && (
        <form
          className="form-purchase-addSale"
          // method="post"
          id="myForm-addSale"
          onSubmit={handleSubmit}
        >
          {/* <div className="purchaseTag-addSale">
          <h3>Sale</h3>
        </div> */}
          {/* <div className="top-bar-addSale">
            <AiFillCalculator className="icn-addSale" />
            <AiFillSetting className="icn-addSale" />
            <RxCrossCircled className="icn-addSale" />
          </div> */}
          <div className="top-bar-addSale">
            <div className="window-addSale">
              <div className="window-inner-text">Sale #1</div>
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
            <h4 className="headingTag-addSale">Sale</h4>
            <div
              className="custom-control custom-switch"
              id="toggle-switch-add-sale"
            >
              <input
                type="checkbox"
                className="custom-control-input"
                id="customSwitches"
              />
              {/* <label class="custom-control-label" for="customSwitches">
              Cash
            </label> */}
            </div>
          </div>
          {/* <div className="line"></div> */}
          <div className="party-detail-addPurchase-addSale">
            <div className="party-detail-part1-addPurchase-addSale">
              <select
                id="dropdown-party-addPurchase-addSale"
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
                className="number-addPurchase-addSale"
                placeholder="Phone no."
              />
            </div>

            <div className="party-detail-part2-addPurchase-addSale">
              <div className="party-detail-part2-insideDiv-addPurchase-addSale">
                <div className="invoice-info-box-Sale">
                  <label className="balance-box-label-addSale">
                    Invoice Number
                  </label>
                  <input
                    type="text"
                    className="upperButton-addPurchase-addSale"
                    name="invoice_no"
                    onChange={(e) => setInvoiceNo(e.target.value)}
                  ></input>
                </div>
                <div className="invoice-info-box-Sale">
                  <label className="balance-box-label-addSale">
                    Invoice Date
                  </label>
                  <input
                    type="date"
                    className="upperButton-addPurchase-addSale"
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  ></input>
                </div>
                <div className="invoice-info-box-Sale">
                  <label className="balance-box-label-addSale">
                    State of supply{" "}
                  </label>
                  <input
                    type="text"
                    className="upperButton-addPurchase-addSale"
                    onChange={(e) => setStateOfSupply(e.target.value)}
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
                            index % 2 == 0
                              ? "td-addSale"
                              : "td-addSale-diffColor"
                          }
                        >
                          {index}
                        </td>
                        <td
                          // className="col col-1"
                          id={
                            index % 2 == 0
                              ? "td-addSale"
                              : "td-addSale-diffColor"
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
                            index % 2 == 0
                              ? "td-addSale"
                              : "td-addSale-diffColor"
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
                            index % 2 == 0
                              ? "td-addSale"
                              : "td-addSale-diffColor"
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
                            index % 2 == 0
                              ? "td-addSale"
                              : "td-addSale-diffColor"
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
                            index % 2 == 0
                              ? "td-addSale"
                              : "td-addSale-diffColor"
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
                            index % 2 == 0
                              ? "td-addSale"
                              : "td-addSale-diffColor"
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
                            index % 2 == 0
                              ? "td-addSale"
                              : "td-addSale-diffColor"
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
          {/* <div onClick={addRow1} id="add-row-button-addSale">
          Add Row
        </div> */}
          <br />
          <br />
          <div onClick={handleRemoveLast} className="add-row-button-addSale">
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
      )}

      {afterSale == true && (
        <div className="afterSale-mainBody">
          <div className="top-bar-addSale">
            <div className="window-addSale">
              <div className="window-inner-text">Sale #1</div>
              <RxCross2 className="cross-without-circle" />
            </div>
            <AiFillPlusCircle className="plus-addSalePage" />
            <div className="page-options-addSale">
              <AiFillCalculator className="icn-addSale" />
              <AiFillSetting className="icn-addSale" />
              <RxCrossCircled className="icn-addSale" />
            </div>
          </div>

          <div className="purchaseTag-afterSale">
            <h4 className="headingTag-addSale">Preview</h4>
            <div className="checkbox-preview-data">
              <input
                type="checkbox"
                name=""
                className="checkbox-input-preview"
              />
              <div className="checkbox-label-preview">
                Do not show invoice preview again
              </div>
            </div>
            <div className="save-btn-preview">Save & Close</div>
          </div>
          <div className="lowerBody-preview">
            <div className="left-part-lower-body-preview">
              <div className="sidebar-heading-preview">
                <div className="inner-text-preview-sidebar">Select Theme</div>
              </div>
              <div className="sidebar-data-box-preview">
                <div className="inner-text-preview-sidebar-data">
                  GST Theme 1
                </div>
              </div>
              <div className="sidebar-data-box-preview">
                <div className="inner-text-preview-sidebar-data">
                  GST Theme 2
                </div>
              </div>
              <div className="sidebar-data-box-preview">
                <div className="inner-text-preview-sidebar-data">
                  GST Theme 3
                </div>
              </div>
              <div className="sidebar-data-box-preview">
                <div className="inner-text-preview-sidebar-data">
                  GST Theme 4
                </div>
              </div>
              <div className="sidebar-data-box-preview">
                <div className="inner-text-preview-sidebar-data">
                  GST Theme 5
                </div>
              </div>
              <div className="sidebar-data-box-preview">
                <div className="inner-text-preview-sidebar-data">
                  GST Theme 6
                </div>
              </div>
              <div className="sidebar-data-box-preview">
                <div className="inner-text-preview-sidebar-data">
                  Double Divine
                </div>
              </div>
              <div className="sidebar-data-box-preview">
                <div className="inner-text-preview-sidebar-data">
                  French Elite
                </div>
              </div>
              <div className="sidebar-data-box-preview">
                <div className="inner-text-preview-sidebar-data">Theme 1</div>
              </div>
              <div className="sidebar-data-box-preview">
                <div className="inner-text-preview-sidebar-data">Theme 2</div>
              </div>
              <div className="sidebar-data-box-preview">
                <div className="inner-text-preview-sidebar-data">Theme 3</div>
              </div>
              <div className="sidebar-data-box-preview">
                <div className="inner-text-preview-sidebar-data">Theme 4</div>
              </div>
              <div className="sidebar-lower-part-color">
                <div className="select-color-text">Select Color</div>
                <div className="selected-color-div">
                  <div className="selected-color-box"></div>
                  <div className="selected-color-text">Selected</div>
                </div>
                <div className="colors-row">
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                </div>
                <div className="colors-row">
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                </div>
                <div className="colors-row">
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                  <div className="color-boxes"></div>
                </div>
              </div>
            </div>
            <div className="center-part-lower-body-preview">
              <div className="pdf-div-afterSale">
                <div className="company-logo-img">
                  <div className="company-img"></div>
                  <div className="company-name-no">
                    <div className="company-name">Company</div>
                    <div className="phone-no-company">Ph no.:123456879</div>
                  </div>
                </div>
                <div className="sale-heading-Print">Sale</div>
                <div className="below-sale-heading">
                  <div className="partA-billTo-Print">
                    <div className="heading-Print">Bill To:</div>
                    <div className="heading-Print">Classic enterprises</div>
                    <div className="billing-details-text">
                      Plot no. 1, Shop No. 8, Kormangala, Banglore
                    </div>
                    <div className="billing-details-text">
                      Contact no.:123456879
                    </div>
                  </div>
                  <div className="partB-shippingTo-Print">
                    <div className="heading-Print">Shipping To:</div>
                    <div className="heading-Print">Classic enterprises</div>
                    <div className="billing-details-text">
                      Plot no. 1, Shop No. 8, Kormangala, Banglore
                    </div>
                  </div>
                  <div className="partC-dateTime-Print">
                    <div className="margin-top-div-PRINT"></div>
                    <div className="dateTime-detail-text">Invoice no.: 101</div>
                    <div className="dateTime-detail-text">
                      Date : 02-07-2019
                    </div>
                    <div className="dateTime-detail-text">Time : 5:30pm</div>
                    <div className="dateTime-detail-text">
                      Due Date : 10-07-2019
                    </div>
                    <div className="margin-bottom-div-PRINT"></div>
                  </div>
                </div>
                <div className="table-part1-PRINT">
                  <TableA />
                </div>
                <div className="below-table-div-PRINT">
                  <div className="invoice-detail-box_PRINT">
                    <div className="invoice-bold-text-PRINT">Decription</div>
                    <div className="invoice-normal-text-PRINT">
                      Sale Decription
                    </div>
                    <div className="invoice-bold-text-PRINT">
                      INVOICE AMOUNT IN WORDS
                    </div>
                    <div className="invoice-normal-text-PRINT">
                      Forty Rupees and Fifty Paisa only
                    </div>
                    <div className="invoice-normal-text-PRINT">
                      Due Date : 02-07-2019
                    </div>
                    <div className="invoice-bold-text-PRINT">
                      TERMS AND CONDITIONS
                    </div>
                    <div className="invoice-normal-text-PRINT">
                      Thank you for doing business with us !
                    </div>
                    <div className="barcode-box-PRINT"></div>
                  </div>
                  <div className="tax-details-PRINT">
                    <div className="tax-detail-flex-box-PRINT">
                      <div className="label-tax-PRINT">Sub Total</div>
                      <div className="tax-data-value-PRINT">$ 40.00</div>
                    </div>
                    <div className="tax-detail-flex-box-PRINT">
                      <div className="label-tax-PRINT">Discount</div>
                      <div className="tax-data-value-PRINT">$ 0.100</div>
                    </div>
                    <div className="tax-detail-flex-box-PRINT">
                      <div className="label-tax-PRINT">SGST@2.5%</div>
                      <div className="tax-data-value-PRINT">$ 0.25</div>
                    </div>
                    <div className="tax-detail-flex-box-PRINT">
                      <div className="label-tax-PRINT">CGST@2.5%</div>
                      <div className="tax-data-value-PRINT">$ 0.25</div>
                    </div>
                    <div className="tax-detail-flex-box-PRINT">
                      <div className="label-tax-PRINT">SGST@9%</div>
                      <div className="tax-data-value-PRINT">$ 0.25</div>
                    </div>
                    <div className="tax-detail-flex-box-PRINT">
                      <div className="label-tax-PRINT">Discount(12%)</div>
                      <div className="tax-data-value-PRINT">$ 0.25</div>
                    </div>
                    <div className="tax-detail-flex-box-PRINT">
                      <div className="label-tax-PRINT">SGST@2.5%</div>
                      <div className="tax-data-value-PRINT">$ 0.25</div>
                    </div>
                    <div className="tax-detail-flex-box-PRINT">
                      <div className="label-tax-PRINT">CGST@2.5%</div>
                      <div className="tax-data-value-PRINT">$ 0.25</div>
                    </div>
                    <div className="tax-detail-flex-box-total-PRINT">
                      <div className="label-tax-total-PRINT">Total</div>
                      <div className="tax-data-value-total-PRINT">$ 42.32</div>
                    </div>
                    <div className="tax-detail-flex-box-PRINT">
                      <div className="label-tax-PRINT">Recieved</div>
                      <div className="tax-data-value-PRINT">$ 0.00</div>
                    </div>
                    <div className="tax-detail-flex-box-PRINT">
                      <div className="label-tax-PRINT">Balance</div>
                      <div className="tax-data-value-PRINT">$ 42.32</div>
                    </div>
                    <br />
                    <div className="label-tax-PRINT">For, Company</div>
                    <div className="company-signature-PRINT"></div>
                    <div className="label-tax-PRINT">Authorizes Signatory</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-part-lower-body-preview">
              <div className="upper-box-right-part">
                <img
                  src={require("../assets/afterSaleImage.jpg")}
                  className="img_right_side_afterSale"
                  alt=""
                />
                <div className="collect-payment-btn">Collect Payment</div>
              </div>
              <div className="sale-invoice-text-right-part">Sale Invoice</div>
              <div className="share-options">
                <div className="share-box">
                  <FaWhatsapp className="whatsapp-icon" />
                  <div className="icon-text-share-box">Whatsapp</div>
                </div>
                <div className="share-box">
                  <GrMail className="gmail-icon" />
                  <div className="icon-text-share-box">Gmail</div>
                </div>
                <div className="share-box">
                  <MdMessage className="message-icon" />
                  <div className="icon-text-share-box">Message</div>
                </div>
              </div>
              <div className="share-options-normal">
                <div className="share-box-normal">
                  <AiOutlineDownload className="download-icon" />
                  <div className="icon-text-share-box">Download PDF</div>
                </div>
                <div className="share-box">
                  <AiFillPrinter className="print-icon" />
                  <div className="icon-text-share-box">Print Invoice</div>
                </div>
                <div className="share-box">
                  <AiFillPrinter className="print-icon-normal" />
                  <div className="icon-text-share-box">Print Invoice</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <button onClick={() => addRow(i)} id="add-row-button">
        Add Row
      </button> */}
    </div>
  );
};
