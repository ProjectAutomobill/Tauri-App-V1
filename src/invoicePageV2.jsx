import React from "react";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import "./invoicePageV2.css";
export const InvoicePageV2 = () => {
  const [selectedParty, setParty] = useState("Select Party");
  const [invoiceNo, setInvoiceNo] = useState(0);
  const [Date, setDate] = useState();

  async function addPurchaseDetail() {
    var item_name = document.getElementById("item-name").value;
    var item_qty = document.getElementById("item-qty").value;
    var item_price = document.getElementById("item-price").value;
    document.getElementById("item-total").value = item_price * item_qty;
    var json_data = {
      Item: item_name,
      Qty: item_qty,
      Price: item_price,
      Total: item_price * item_qty,
    };

    await fetch("/test", json_data);
  }

  return (
    <div id="purchase-background">
      <div id="container-box">
        <header id="header-Tag">INVOICE</header>
        <div id="section-upper">
          <section id="section-two">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedParty}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setParty("Party 1")}>
                  Party 1
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setParty("Party 2")}>
                  Party 2
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setParty("Party 3")}>
                  Party 3
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </section>
          <section id="section-one">
            <input
              type="number"
              name=""
              id="invoice-no"
              placeholder="Invoice No"
              onChange={(e) => setInvoiceNo(e.target.value)}
            />
            <br />
            <input
              type="date"
              name=""
              id="invoice-date"
              onChange={(e) => setDate(e.target.value)}
            />
          </section>
        </div>
        <section id="section-three">
          <input
            type="text"
            name=""
            id="item-name"
            className="elements-items"
          />
          <input
            type="number"
            name=""
            id="item-qty"
            className="elements-items"
          />
          <input
            type="number"
            name=""
            id="item-price"
            className="elements-items"
          />
          <input
            type="number"
            name=""
            id="item-total"
            className="elements-items"
          />
        </section>
      </div>
      <button onClick={addPurchaseDetail}>Submit</button>
    </div>
  );
};
