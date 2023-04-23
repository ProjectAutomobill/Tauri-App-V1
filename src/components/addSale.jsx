import React from "react";
import "./addSale.css";
import { AiFillCalculator, AiFillSetting } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { useState, useEffect } from "react";
import { Input } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { invoke } from "@tauri-apps/api";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import { store } from "../state_manager";

export const AddSale = (props) => {
  const [partyNames, setPartyNames] = useState();
  const [currSelectedPartyName, setCurrParty] = useState();
  const [currParty, setSelectedPartyName] = useState();
  const [invoiceNo, setInvoiceNo] = useState();
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
    console.log("ADDING ROWS");
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
    console.log("Length : " + rows.length);
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
    await fetch("/getPartyNames?number=" + props.userNumber)
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
    console.log(formDataJSON);

    // ... Do something with the form data ...
    // });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = JSON.stringify(rows);
    console.log(formData);
    // console.log(currParty);

    console.log(
      "NUMBER FROM SALE : " +
        props.userNumber +
        "\t\tCOMPANY : " +
        props.userCompany
    );
    invoke("new_sale_data", {
      number: props.userNumber,
      company: props.userCompany,
      jsonData: formData,
    });
    // `invoke` returns a Promise
    // .then((response) => setBalance(parseInt(response)));
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newRows = [...rows];
    newRows[index][name] = value;
    console.log(newRows[index]);
    newRows[index]["party_name_dropdown"] = currParty;
    newRows[index]["invoice_no"] = invoiceNo;
    setRows(newRows);
    // console.log("Balance : " + balance);
    document.getElementById("total-value-input").value = balance;
  };

  const testFunction = (event) => {
    console.log(event.target.value);
    setSelectedPartyName(event.target.value);
  };
  useEffect(() => {
    // getPartyNames();
    console.log(
      "FROM ADD SALES : " + props.userNumber + "\t\t" + props.userCompany
    );
    invoke("get_parties_name", {
      number: "9350244300",
      company: "DataE",
    }).then((response) => {
      setPartyNames(JSON.parse(response));
    });
    console.log("Party Names List : " + partyNames);
  }, []);
  return (
    <div>
      {/* action="/addSaleData" */}
      <form
        className="form-purchase"
        // method="post"
        id="myForm"
        onSubmit={handleSubmit}
      >
        <div className="purchaseTag">
          <h3>Sale</h3>
        </div>
        <div className="top-bar">
          <AiFillCalculator className="icn" />
          <AiFillSetting className="icn" />
          <RxCrossCircled className="icn" />
        </div>
        {/* <div className="line"></div> */}
        <div className="party-detail-addPurchase">
          <div className="party-detail-part1-addPurchase">
            <select
              id="dropdown-party-addPurchase"
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

            <input className="number-addPurchase" placeholder="Phone no." />
          </div>

          <div className="party-detail-part2-addPurchase">
            <div className="party-detail-part2-insideDiv-addPurchase">
              <label className="balance-box-label">Invoice no.</label>
              <input
                type="text"
                className="upperButton-addPurchase"
                name="invoice_no"
                onChange={(e) => setInvoiceNo(e.target.value)}
              ></input>

              <label className="balance-box-label">Invoice Date</label>
              <input type="date" className="upperButton-addPurchase"></input>

              <label className="balance-box-label">State of supply </label>
              <input type="text" className="upperButton-addPurchase"></input>
            </div>
          </div>
        </div>

        <div className="item-table-addPurchase">
          <div className="header-table-addPurchase">
            <table className="responsive-table" id="input-table">
              {/* <form action="/addPurchaseData" method="get"> */}
              <tbody>
                <tr>
                  <td className="col col-1">ITEM</td>
                  <td className="col col-2">QTY</td>
                  <td className="col col-3">PRICE</td>
                  <td className="col col-4">AMOUNT</td>
                </tr>
                {rows.map((row, index) => {
                  return (
                    <tr key={index}>
                      <td className="col col-1">
                        <input
                          className="table-input-addpurchase"
                          type="text"
                          name="item"
                          id="item"
                          value={row.item}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </td>
                      <td className="col col-2">
                        <input
                          className="table-input-addpurchase"
                          type="number"
                          name="qty"
                          id="qty"
                          value={row.qty}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </td>
                      <td className="col col-3">
                        <input
                          className="table-input-addpurchase"
                          type="number"
                          name="price"
                          id="price"
                          value={row.price}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </td>
                      <td className="col col-4">
                        <input
                          className="table-input-addpurchase"
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
            id="submit-button-addPurchase"
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
        <div onClick={addRow1} id="add-row-button">
          Add Row
        </div>
        <br />
        <br />
        <div onClick={handleRemoveLast} id="add-row-button">
          Remove Row
        </div>
        <div id="balance-box">
          <label className="balance-box-label">Total</label>
          <input
            type="text"
            className="balance-box-input"
            id="total-value-input"
          />
          {/* <br /> */}
          <label className="balance-box-label">Received</label>
          <input
            type="text"
            className="balance-box-input"
            id="received-amount"
          />
        </div>
      </form>
      {/* <button onClick={() => addRow(i)} id="add-row-button">
        Add Row
      </button> */}
    </div>
  );
};
