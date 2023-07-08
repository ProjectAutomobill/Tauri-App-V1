import React, { useContext } from "react";
import "./addPurchaseV3.css";
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
import { Link, useLocation } from "react-router-dom";
import { invoke } from "@tauri-apps/api";
// import { useSelector } from "react-redux";
// import { Provider } from "react-redux";
// import { store } from "../state_manager";
// import { AppContext } from "./App";
import { AppContext } from "./App";

export const AddPurchaseV3 = (props) => {
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

  const handleRemoveLast = () => {
    setRows(rows.slice(0, -1));
  };

  // const calcBalance = () => {
  //   for (var i = 0; i < rows.length; i++) {
  //     setBalance(balance + parseInt(rows[i]["amount"]));
  //   }
  // };

  const addRow1 = () => {
    // console.log("ADDING ROWS");
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
    // console.log("Length : " + rows.length);
  };
  const location = useLocation();
  // const [cName, setCName] = useState(location.state.company);
  var i = 0;
  function addRow(i) {
    i = i + 1;
    var table = document.getElementById("input-table-addPurchaseV3");
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
  async function getPartyNames() {
    // console.log("ADD SALE PAGE : " + props.userNumber);
    await fetch("/getPartyNames?number=" + props.userNumber.current)
      .then((val) => val.json())
      .then((value) => {
        setPartyNames(value);
        console.log(value);
      });
  }
  function getFormData() {
    const form = document.querySelector("#myForm");

    // form.addEventListener("submit", async (event) => {
    //   event.preventDefault();

    const formData = new FormData(form);
    const formDataJSON = Object.fromEntries(formData);
    // console.log(formDataJSON);

    // ... Do something with the form data ...
    // });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = JSON.stringify(rows);
    console.log(formData);

    invoke("new_purchase_data", {
      number: props.userNumber.current,
      company: props.userCompany.current,
      jsonData: formData,
      totalPrice: totalAmount.toString(),
      recievedPrice: receivedAmount.toString(),
    });
  };

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

  const testFunction = (event) => {
    // console.log(event.target.value);
    setSelectedPartyName(event.target.value);
  };
  useEffect(() => {
    // getPartyNames();
    // console.log(
    //   "FROM ADD SALES : " + props.userNumber + "\t\t" + props.userCompany
    // );
    // console.log()
    console.log("In addPurchase : " + props.userNumber.current);
    invoke("get_parties_name", {
      number: props.userNumber.current,
      company: props.userCompany.current,
    }).then((response) => {
      setPartyNames(JSON.parse(response));
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
            <div className="window-inner-text">Purchase #1</div>
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
          <h4 className="headingTag-addSale">Purchase</h4>
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
                  Invoice no.
                </label>
                <input
                  type="text"
                  className="upperButton-addPurchase-addPurchaseV3"
                  name="invoice_no"
                  onChange={(e) => setInvoiceNo(e.target.value)}
                ></input>
              </div>
              <div className="invoice-info-box-Purchase">
                <label className="balance-box-label-addPurchaseV3">
                  Invoice Date
                </label>
                <input
                  type="date"
                  className="upperButton-addPurchase-addPurchaseV3"
                  onChange={(e) => setInvoiceDate(e.target.value)}
                ></input>
              </div>
              <div className="invoice-info-box-Purchase">
                <label className="balance-box-label-addPurchaseV3">
                  State of supply{" "}
                </label>
                <input
                  type="text"
                  className="upperButton-addPurchase-addPurchaseV3"
                  onChange={(e) => setStateOfSupply(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
        </div>

        <div className="item-table-addPurchase-addPurchaseV3">
          <div className="header-table-addPurchase-addPurchaseV3">
            <table
              className="responsive-table-addPurchaseV3"
              id="input-table-addPurchaseV3"
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
                        id={
                          index % 2 == 0
                            ? "td-addPurchase"
                            : "td-addPurchase-diffColor"
                        }
                      >
                        {index}
                      </td>
                      <td
                        id={
                          index % 2 == 0
                            ? "td-addPurchase"
                            : "td-addPurchase-diffColor"
                        }
                      >
                        <input
                          className={
                            index % 2 == 0
                              ? "table-input-addpurchase-addPurchaseV3"
                              : "table-input-addpurchase-addPurchaseV3-DifferentColor"
                          }
                          type="text"
                          name="item"
                          id="item"
                          value={row.item}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </td>
                      <td
                        id={
                          index % 2 == 0
                            ? "td-addPurchase"
                            : "td-addPurchase-diffColor"
                        }
                      >
                        <input
                          className={
                            index % 2 == 0
                              ? "table-input-addpurchase-addPurchaseV3"
                              : "table-input-addpurchase-addPurchaseV3-DifferentColor"
                          }
                          type="number"
                          name="qty"
                          id="qty"
                          value={row.qty}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </td>
                      <td
                        id={
                          index % 2 == 0
                            ? "td-addPurchase"
                            : "td-addPurchase-diffColor"
                        }
                      >
                        <input
                          className={
                            index % 2 == 0
                              ? "table-input-addpurchase-addPurchaseV3"
                              : "table-input-addpurchase-addPurchaseV3-DifferentColor"
                          }
                          type="number"
                          name="unit"
                          id="unit"
                          onChange={(event) => handleChange(event, index)}
                        />
                      </td>
                      <td
                        id={
                          index % 2 == 0
                            ? "td-addPurchase"
                            : "td-addPurchase-diffColor"
                        }
                      >
                        <input
                          className={
                            index % 2 == 0
                              ? "table-input-addpurchase-addPurchaseV3"
                              : "table-input-addpurchase-addPurchaseV3-DifferentColor"
                          }
                          type="number"
                          name="price"
                          id="price"
                          onChange={(event) => handleChange(event, index)}
                        />
                      </td>
                      <td
                        id={
                          index % 2 == 0
                            ? "td-addPurchase"
                            : "td-addPurchase-diffColor"
                        }
                      >
                        <input
                          className={
                            index % 2 == 0
                              ? "table-input-addpurchase-addPurchaseV3"
                              : "table-input-addpurchase-addPurchaseV3-DifferentColor"
                          }
                          type="number"
                          name="tax"
                          id="tax"
                          value={row.tax}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </td>
                      <td
                        id={
                          index % 2 == 0
                            ? "td-addPurchase"
                            : "td-addPurchase-diffColor"
                        }
                      >
                        <input
                          className={
                            index % 2 == 0
                              ? "table-input-addpurchase-addPurchaseV3"
                              : "table-input-addpurchase-addPurchaseV3-DifferentColor"
                          }
                          type="number"
                          name="tax-amount"
                          id="tax-amount"
                          value={row.tax_amount}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </td>
                      <td
                        id={
                          index % 2 == 0
                            ? "td-addPurchase"
                            : "td-addPurchase-diffColor"
                        }
                      >
                        <input
                          className={
                            index % 2 == 0
                              ? "table-input-addpurchase-addPurchaseV3"
                              : "table-input-addpurchase-addPurchaseV3-DifferentColor"
                          }
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
              </tbody>
            </table>
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
            id="submit-button-addPurchase-addPurchaseV3"
            // onClick={getFormData}
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
        <div id="balance-box-addPurchaseV3">
          <div className="balance-box-data-Sale">
            <label className="balance-box-label-addPurchaseV3">Total</label>
            <input
              type="text"
              className="balance-box-input-addPurchaseV3"
              id="total-value-input"
            />
          </div>
          {/* <br /> */}
          <div className="balance-box-data-Sale">
            <label className="balance-box-label-addPurchaseV3">Paid</label>
            <input
              type="text"
              className="balance-box-input-addPurchaseV3"
              id="received-amount"
              onChange={(e) => calcBalance()}
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
