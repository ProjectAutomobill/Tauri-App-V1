import React from "react";
import { useState, useEffect } from "react";
import "./addPurchase.css";
import { AiFillCalculator, AiFillSetting } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
export const AddPurchase = (props) => {
  const [partyNames, setPartyNames] = useState();
  const [currSelectedPartyName, setCurrParty] = useState();
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
    <input className="table-input" type="text" name="item"+"${i}" id="" />
  </td>
  <td className="col col-2">
    <input className="table-input" type="text" name="qty"+"${i}" id="" />
  </td>
  <td className="col col-3">
    <input className="table-input" type="text" name="price"+"${i}" id="" />
  </td>
  <td className="col col-4">
    <input className="table-input" type="text" name="amount"+"${i}" id="" />
  </td></tr>`;
    table.innerHTML += template;
  }

  async function getPartyNames() {
    await fetch("/getPartyNames?number=" + props.userNumber)
      .then((val) => val.json())
      .then((value) => {
        setPartyNames(value);
        console.log(value);
      });
  }

  async function testName() {
    console.log("curr : " + currSelectedPartyName);
    await fetch("/testName?name=" + currSelectedPartyName).then((val) =>
      val.json()
    );
  }

  function clickTest() {
    const selectElement = document.querySelector("#dropdown-party");

    selectElement.addEventListener("change", (event) => {
      setCurrParty(event.target.value);
      console.log(currSelectedPartyName);
    });
  }

  useEffect(() => {
    getPartyNames();
    console.log("Party Names List : " + partyNames);
  }, []);
  return (
    <div>
      <div className="top-bar">
        <AiFillCalculator className="icn" />
        <AiFillSetting className="icn" />
        <RxCrossCircled className="icn" />
      </div>

      <div className="purchaseTag">
        <h3>Purchase</h3>
      </div>

      <div className="line"></div>

      <div className="party-detail-addPurchase">
        <div className="party-detail-part1-addPurchase">
          <select id="dropdown-party-addPurchase">
            {/* <option value="volvo">Party 1</option>
          <option value="saab">Party 2</option>
          <option value="mercedes">Party 3</option>
          <option value="audi">Party 4</option> */}

            {partyNames?.map((row) => (
              <option value={row.Name}>{row.Name}</option>
            ))}
          </select>

          <input className="number-addPurchase" placeholder="Phone no." />
        </div>

        <div className="party-detail-part2-addPurchase">
          <div className="party-detail-part2-insideDiv-addPurchase">
            <div className="invoiceno-addPurchase">
              Invoice no.{"          "}
              <input type="text" id="upperButton-addPurchase"></input>
            </div>

            <div className="invoicedate-addPurchase">
              Invoice Date{" "}
              <input type="date" id="upperButton-addPurchase"></input>
            </div>

            <div className="stateofsupply-addPurchase">
              State of supply{" "}
              <input type="text" id="upperButton-addPurchase"></input>
            </div>
          </div>
        </div>
      </div>

      <div className="item-table-addPurchase">
        <div className="header-table-addPurchase">
          {/* <div className="header-items">#</div>
          <div className="header-items">ITEM</div>
          <div className="header-items">QTY</div>
          <div className="header-items">UNIT</div>
          <div className="header-items" id="double-row-cell">
            <div className="inner-items">PRICE/UNIT</div>
            <div className="inner-items">With/Without Tax</div>
          </div>

          <div className="header-items" id="double-row-cell">
            <div className="inner-items">DISCOUNT</div>
            <div className="inner-items" id="double-col-cell">
              <div className="inner-items">%</div>
              <div className="inner-items">AMOUNT</div>
            </div>
          </div>

          <div className="header-items" id="double-row-cell">
            <div className="inner-items">TAX</div>
            <div className="inner-items" id="double-col-cell">
              <div className="inner-items">%</div>
              <div className="inner-items">AMOUNT</div>
            </div>
          </div>
          <div className="header-items">AMOUNT</div>

          <div className="header-items-data">-</div>
          <div className="header-items-data"></div>
          <div className="header-items-data"></div>
          <div className="header-items-data"></div>
          <div className="header-items-data" id="double-row-cell"></div>
          <div className="header-items-data" id="double-row-cell"></div>
          <div classNameName="header-items-data" id="double-col-cell"></div>
          <div classNameName="header-items-data"></div> */}
          <form action="/addPurchaseData" method="post">
            <table className="responsive-table" id="input-table">
              {/* <form action="/addPurchaseData" method="get"> */}
              <tr>
                <td className="col col-1">ITEM</td>
                <td className="col col-2">QTY</td>
                <td className="col col-3">PRICE</td>
                <td className="col col-4">AMOUNT</td>
              </tr>
              <tr>
                <td className="col col-1">
                  <input
                    className="table-input"
                    type="text"
                    name="item"
                    id="item"
                  />
                </td>
                <td className="col col-2">
                  <input
                    className="table-input-addpurchase"
                    type="number"
                    name="qty"
                    id="qty"
                  />
                </td>
                <td className="col col-3">
                  <input
                    className="table-input"
                    type="number"
                    name="price"
                    id="price"
                  />
                </td>
                <td className="col col-4">
                  <input
                    className="table-input"
                    type="number"
                    name="amount"
                    id="amount"
                  />
                </td>
              </tr>
            </table>
            <br />
            <button type="submit">Submit</button>
          </form>
          <br />
          {/* <button type="submit">Submit</button> */}
          {/* </form> */}
          {/* <button onClick={addRow}>Add Row</button> */}
        </div>
        <button onClick={() => addRow(i)} id="add-row-button">
          Add Row
        </button>
        {/* <button onClick={clickTest}>Test Name</button> */}
      </div>
    </div>
  );
};
