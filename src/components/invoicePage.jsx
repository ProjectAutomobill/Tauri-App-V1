import React from "react";
import { useState } from "react";
import "./invoicePage.css";
import { FaPlusCircle } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";

export const InvoicePage = () => {
  const [items1, setItems1] = useState([]);

  //   const items = [];

  function addItems() {
    console.log("In function");
    const temp = [...items1, [], [], [], []];
    setItems1(temp);
  }
  function removeItems() {
    console.log("In function");
    // const temp = [...items, []];
    // setItems(temp);
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
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>
          <div className="grid-item">4</div>
          {items1.map((data, i) => {
            return (
              <div className="grid-item-inner" key={i}>
                <input
                  type="text"
                  name=""
                  id=""
                  className="input-inner-items"
                />
              </div>
            );
          })}
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
      </div>
    </div>
  );
};
