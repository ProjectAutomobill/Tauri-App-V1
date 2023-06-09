import React, { useContext } from "react";
import "../addSale.css";
import { AiFillCalculator, AiFillSetting } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { useState, useEffect } from "react";
import { Input } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { invoke } from "@tauri-apps/api";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";

export const AddSaleOrder = (props) => {
  const [partyNames, setPartyNames] = useState();
  const [currSelectedPartyName, setCurrParty] = useState();
  const [currParty, setSelectedPartyName] = useState();
  const [invoiceNo, setInvoiceNo] = useState();
  //   const { test } = useContext(AppContext);
  const [balance, setBalance] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [rows, setRows] = useState([
    {
      party_name_dropdown: "",
      Invoice_no: "",
      item: "",
      qty: "",
      price: "",
      amount: "",
      balance: "",
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
        item: "",
        qty: "",
        price: "",
        amount: "",
        balance: "",
      },
    ]);
    // console.log("Length : " + rows.length);
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

    invoke("new_sale_data", {
      number: props.userNumber.current,
      company: props.userCompany.current,
      jsonData: formData,
    });
  };

  function calcBalance() {
    var balance = 0;
    var temp = 0;
    for (var i = 0; i < rows.length; i++) {
      temp = temp + parseInt(rows[i]["amount"]);
    }
    console.log(
      "IN calBalance : temp :  " + temp + "\treceivedAmount : " + receivedAmount
    );
    balance = temp - parseInt(receivedAmount);
    console.log(balance);
    return balance;
  }

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newRows = [...rows];
    newRows[index][name] = value;
    // console.log(newRows[index]);
    newRows[index]["party_name_dropdown"] = currParty;
    newRows[index]["Invoice_no"] = invoiceNo;
    newRows[index]["balance"] = calcBalance();
    setRows(newRows);
    // console.log("Balance : " + balance);
    document.getElementById("total-value-input").value = balance;
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
        className="form-purchase-addSale"
        // method="post"
        id="myForm-addSale"
        // onSubmit={handleSubmit}
      >
        {/* <div className="purchaseTag-addSale">
          <h3>Sale</h3>
        </div> */}
        <div className="top-bar-addSale">
          <AiFillCalculator className="icn-addSale" />
          <AiFillSetting className="icn-addSale" />
          <RxCrossCircled className="icn-addSale" />
        </div>
        <div className="purchaseTag-addSale">
          <h4 className="headingTag-addSale">Sale Order</h4>
        </div>
        {/* <div className="line"></div> */}
        <div className="party-detail-addPurchase-addSale">
          <div className="party-detail-part1-addPurchase-addSale">
            <select
              id="dropdown-party-addPurchase-addSale"
              name="party_name_dropdown"
              //   onChange={testFunction}
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
                ></input>
              </div>
              <div className="invoice-info-box-Sale">
                <label className="balance-box-label-addSale">
                  State of supply{" "}
                </label>
                <input
                  type="text"
                  className="upperButton-addPurchase-addSale"
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
                  <td className="col col-1" id="td-addSale-heading">
                    #
                  </td>
                  <td className="col col-1" id="td-addSale-heading">
                    ITEM
                  </td>
                  <td className="col col-2" id="td-addSale-heading">
                    QTY
                  </td>
                  <td className="col col-3" id="td-addSale-heading">
                    PRICE
                  </td>
                  <td className="col col-4" id="td-addSale-heading">
                    AMOUNT
                  </td>
                </tr>
                {rows.map((row, index) => {
                  return (
                    <tr key={index}>
                      <td
                        className="col col-1"
                        id={
                          index % 2 == 0 ? "td-addSale" : "td-addSale-diffColor"
                        }
                      >
                        {index}
                      </td>
                      <td
                        className="col col-1"
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
                        className="col col-2"
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
                        className="col col-3"
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
                          value={row.price}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </td>
                      <td
                        className="col col-4"
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
              onChange={(e) => setReceivedAmount(e.target.value)}
            />
          </div>
        </div>
      </form>
      {/* <button onClick={() => addRow(i)} id="add-row-button">
        Add Row
      </button> */}
    </div>
  );
};
