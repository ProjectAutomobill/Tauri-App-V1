import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./itemsModal.css";
import { GstPage } from "./gstPage";
import { invoke } from "@tauri-apps/api";

export function ItemsModal(props) {
  // const [url,setUrl] = useState("https://04df-103-199-226-253.in.ngrok.io ")
  const [itemName, setItemName] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [wholesalePrice, setWholesalePrice] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [stockQuantity, setStockQuantity] = useState(0);

  async function addItemDetails() {
    invoke("add_item_details", {
      number: props.userNumber,
      company: props.userCompany,
      name: itemName,
      salePrice: salePrice,
      wholesalePrice: wholesalePrice,
      stockQuantity: stockQuantity.toString(),
    });
    props.onHide();
    // props.getItemDetails();
    props.toastMessage();
    props.setrefresh(1);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id="body-content">
          <div id="upper-input">
            <input
              type="text"
              name=""
              id="item_name"
              placeholder="Item Name"
              onChange={(v) => setItemName(v.target.value)}
            />
            <input
              type="text"
              name=""
              id="sale_price"
              placeholder="Sale Price"
              onChange={(v) => setSalePrice(v.target.value)}
            />
            <input
              type="text"
              name=""
              id="wholesale_price"
              placeholder="WholeSale Price"
              onChange={(v) => setWholesalePrice(v.target.value)}
            />
          </div>
          <br />
          <br />
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Pricing">
              {/* <GstPage setEmail={setEmail} setAddress={setAddress} /> */}
              Tab 1
            </Tab>
            <Tab eventKey="profile" title="Stock">
              <input
                type="number"
                name=""
                id="stock_quantity"
                placeholder="Stock Quantiy"
                onChange={(v) => setStockQuantity(v.target.value)}
              />
            </Tab>
          </Tabs>
          {/* <ul className="nav nav-tabs">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu 1</a>
            </li>
            <li>
              <a href="#">Menu 2</a>
            </li>
            <li>
              <a href="#">Menu 3</a>
            </li>
          </ul> */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={addItemDetails}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}
