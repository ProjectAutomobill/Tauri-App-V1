import React, { useContext } from "react";
import "./addPurchaseV3.css";
import { AiFillCalculator, AiFillSetting } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
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
  const { test } = useContext(AppContext);
  const [balance, setBalance] = useState(0);
  const [rows, setRows] = useState([
    {
      party_name_dropdown: "",
      invoice_no: "",
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

  const calcBalance = () => {
    for (var i = 0; i < rows.length; i++) {
      setBalance(balance + parseInt(rows[i]["amount"]));
    }
  };

  const addRow1 = () => {
    // console.log("ADDING ROWS");
    setRows([
      ...rows,
      {
        party_name_dropdown: "",
        invoice_no: "",
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
    // console.log(currParty);

    // console.log(
    //   "NUMBER FROM SALE : " +
    //     props.userNumber.current +
    //     "\t\tCOMPANY : " +
    //     props.userCompany.current
    // );

    invoke("new_purchase_data", {
      number: props.userNumber.current,
      company: props.userCompany.current,
      jsonData: formData,
    });
    // `invoke` returns a Promise
    // .then((response) => setBalance(parseInt(response)));
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newRows = [...rows];
    newRows[index][name] = value;
    // console.log(newRows[index]);
    newRows[index]["party_name_dropdown"] = currParty;
    newRows[index]["invoice_no"] = invoiceNo;
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
    <div>
      {/* action="/addSaleData" */}
      <form
        className="form-purchase-addPurchaseV3"
        // method="post"
        id="myForm"
        onSubmit={handleSubmit}
      >
        <div className="purchaseTag-addPurchaseV3">
          <h3>Purchase</h3>
        </div>
        <div className="top-bar-addPurchaseV3">
          <AiFillCalculator className="icn-addPurchaseV3" />
          <AiFillSetting className="icn-addPurchaseV3" />
          <RxCrossCircled className="icn-addPurchaseV3" />
        </div>
        {/* <div className="line"></div> */}
        <div className="party-detail-addPurchase-addPurchaseV3">
          <div className="party-detail-part1-addPurchase-addPurchaseV3">
            <select
              id="dropdown-party-addPurchase-addPurchaseV3"
              name="party_name_dropdown-addPurchaseV3"
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
              <label className="balance-box-label-addPurchaseV3">
                Invoice no.
              </label>
              <input
                type="text"
                className="upperButton-addPurchase-addPurchaseV3"
                name="invoice_no"
                onChange={(e) => setInvoiceNo(e.target.value)}
              ></input>

              <label className="balance-box-label-addPurchaseV3">
                Invoice Date
              </label>
              <input
                type="date"
                className="upperButton-addPurchase-addPurchaseV3"
              ></input>

              <label className="balance-box-label-addPurchaseV3">
                State of supply{" "}
              </label>
              <input
                type="text"
                className="upperButton-addPurchase-addPurchaseV3"
              ></input>
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
                  <td className="col col-1" id="td-addPurchase">
                    ITEM
                  </td>
                  <td className="col col-2" id="td-addPurchase">
                    QTY
                  </td>
                  <td className="col col-3" id="td-addPurchase">
                    PRICE
                  </td>
                  <td className="col col-4" id="td-addPurchase">
                    AMOUNT
                  </td>
                </tr>
                {rows.map((row, index) => {
                  return (
                    <tr key={index}>
                      <td className="col col-1" id="td-addPurchase">
                        <input
                          className="table-input-addpurchase-addPurchaseV3"
                          type="text"
                          name="item"
                          id="item"
                          value={row.item}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </td>
                      <td className="col col-2" id="td-addPurchase">
                        <input
                          className="table-input-addpurchase-addPurchaseV3"
                          type="number"
                          name="qty"
                          id="qty"
                          value={row.qty}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </td>
                      <td className="col col-3" id="td-addPurchase">
                        <input
                          className="table-input-addpurchase-addPurchaseV3"
                          type="number"
                          name="price"
                          id="price"
                          value={row.price}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </td>
                      <td className="col col-4" id="td-addPurchase">
                        <input
                          className="table-input-addpurchase-addPurchaseV3"
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
            <br />
            {/* <button type="submit" id="submit-button-addPurchase">
              Save
            </button> */}
            {/* <br /> */}
            {/* <button type="submit">Submit</button> */}
            {/* </form> */}
            {/* <button onClick={addRow}>Add Row</button> */}
          </div>

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
        <div onClick={addRow1} id="add-row-button-addPurchaseV3">
          Add Row
        </div>
        <br />
        <br />
        <div onClick={handleRemoveLast} id="add-row-button-addPurchaseV3">
          Remove Row
        </div>
        <div id="balance-box-addPurchaseV3">
          <label className="balance-box-label-addPurchaseV3">Total</label>
          <input
            type="text"
            className="balance-box-input-addPurchaseV3"
            id="total-value-input-addPurchaseV3"
          />
          {/* <br /> */}
          <label className="balance-box-label-addPurchaseV3">Received</label>
          <input
            type="text"
            className="balance-box-input-addPurchaseV3"
            id="received-amount-addPurchaseV3"
          />
        </div>
      </form>
      {/* <button onClick={() => addRow(i)} id="add-row-button">
        Add Row
      </button> */}
    </div>
  );
};
