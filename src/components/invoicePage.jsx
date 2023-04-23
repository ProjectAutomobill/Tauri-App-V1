import React from "react";
import { useState } from "react";
import "./invoicePage.css";
import { FaPlusCircle } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";

export const InvoicePage = () => {
  const [items1, setItems1] = useState([]);
  const [itemName, setItemName] = useState();
  //   const items = [];

  function addItems() {
    // console.log("In function");
    const temp = [...items1, [], [], [], [], []];
    setItems1(temp);
    addPurchaseData();
  }
  function removeItems() {
    // console.log("In function");
    // const temp = [...items, []];
    // setItems(temp);
  }

  async function addPurchaseData() {
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ title: "React POST Request Example" }),
    // };
    // var data = {
    //   "Item" :
    // }
    // await fetch("/addPurchase", data);

    var item_name = document.getElementById("item-name").value;
    var item_qty = document.getElementById("item-qty").value;
    var item_price = document.getElementById("item-price").value;
    document.getElementById("item-total").value = item_price * item_qty;
    var invoiceNo = document.getElementById("invoice-no").value;
    var invoiceDate = document.getElementById("date-invoice").value;

    var json_data = {
      itemName: item_name,
      itemPrice: item_price,
      itemQty: item_qty,
      invoiceNo: invoiceNo,
      Date: invoiceDate,
    };
    // console.log("Item Name : " + item_name);
    await fetch("http:127.0.0.1:8001/purchase/addPurchase", json_data);
  }

  return (
    <div id="body-invoice">
      <div id="invoice-page">
        <header id="header-invoice">INVOICE</header>
        <div id="address">
          <input
            type="text"
            className="houseNo"
            id="AddressLine"
            placeholder="Address line 1"
          />
          <input
            type="text"
            className="houseNo"
            id="AddressLine2"
            placeholder="Address line 2"
          />
          {/* <br /> */}
          <input type="text" className="houseNo" id="city" placeholder="City" />
        </div>
        <div id="invoice-detail">
          <div id="company-name">
            <input
              type="text"
              name=""
              id="company-name-input"
              placeholder="Company Name"
            />
          </div>
          <div id="details">
            <input type="text" id="invoice-no" placeholder="Invoice No" />
            <input type="date" id="date-invoice" />
          </div>
        </div>
        <div id="grid-container">
          <div className="grid-item">Item</div>
          <div className="grid-item">QTY</div>
          <div className="grid-item">UNIT</div>
          <div className="grid-item">PRICE</div>
          <div className="grid-item">Total</div>
          {items1.map((data, i) => {
            return (
              <div className="grid-item-inner" key={i}>
                <input
                  type="text"
                  name=""
                  id={i.toString()}
                  className="input-inner-items"
                />
              </div>
            );
          })}
          {/* <div className="grid-item-inner">
            <input type="text" name="" id="item-name" />
          </div>
          <div className="grid-item-inner">
            <input type="number" name="" id="item-qty" />
          </div>
          <div className="grid-item-inner">
            <input type="number" name="" id="item-price" />
          </div>
          <div className="grid-item-inner">
            <input type="number" name="" id="item-total" />
          </div> */}
        </div>
        <FaPlusCircle onClick={addItems} id="add-icon" />
        <br />
        <Dropdown id="select-party">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Payment Type
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Cash</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Online</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="addDescription-invoicePage">
          <input
            type="text"
            id="descriptionButton-invoicePage"
            placeholder="Add Description"
          />
        </div>

        <div id="total-invoicePage">
          <input type="text" id="totalButton-invoicePage" placeholder="Total" />
        </div>

        <div className="lastDetails-invoicePage">
          <button id="saveButton-invoicePage">Save</button>
          <button id="shareButton-invoicePage">Share</button>
        </div>
      </div>
    </div>
  );
};
