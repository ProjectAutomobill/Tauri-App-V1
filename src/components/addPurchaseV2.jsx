import React from "react";
import "./addPurchaseV2.css";
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

export const AddPurchaseV2 = (props) => {
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
    await fetch("/getPartyNames?number=" + props.userNumber)
      .then((val) => val.json())
      .then((value) => {
        setPartyNames(value);
        console.log(value);
      });
  }

  useEffect(() => {
    getPartyNames();
    console.log("Party Names List : " + partyNames);
  }, []);
  return (
    <div>
      <form className="form-purchase" action="/addPurchaseData" method="post">
        <div className="purchaseTag">
          <h3>Purchase</h3>
        </div>
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
        {/* <div className="line"></div> */}
        <div className="party-detail-addPurchase">
          <div className="party-detail-part1-addPurchase">
            <select id="dropdown-party-addPurchase" name="party-name-dropdown">
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
                <input
                  type="text"
                  id="upperButton-addPurchase"
                  name="invoice-no"
                ></input>
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
                    className="table-input-addpurchase"
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
                    className="table-input-addpurchase"
                    type="number"
                    name="price"
                    id="price"
                  />
                </td>
                <td className="col col-4">
                  <input
                    className="table-input-addpurchase"
                    type="number"
                    name="amount"
                    id="amount"
                  />
                </td>
              </tr>
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
          <button type="submit" id="submit-button-addPurchase">
            Save
          </button>
          {/* <button onClick={() => addRow(i)} id="add-row-button">
            Add Row
          </button> */}
          {/* <button onClick={clickTest}>Test Name</button> */}
        </div>
        <div onClick={() => addRow(i)} id="add-row-button">
          Add Row
        </div>
      </form>
      {/* <button onClick={() => addRow(i)} id="add-row-button">
        Add Row
      </button> */}
    </div>
  );
};
