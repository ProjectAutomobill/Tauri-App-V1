import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./itemsModal.css";
import { GstPage } from "./gstPage";
import { RxCross2 } from "react-icons/rx";
import { AiTwotoneSetting } from "react-icons/ai";
import { invoke } from "@tauri-apps/api";
import { PricingItemsModal } from "./pricingItemsModal";
import { BsSearch, BsFillCameraFill } from "react-icons/bs";
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
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="contained-modal-title-vcenter">
          <div className="title-itemsModal"> Add Item</div>
          <div className="third-div-part-itemsModal">
            <div className="content-feature-diff-itemsModal">Product</div>
            <div className="info-feature-tick-creditAndBalance">
              <label class="switch-itemsModal">
                <input type="checkbox" />
                <span class="sliderswitch-itemsModal round"></span>
              </label>{" "}
            </div>
            <div className="content-feature-tick-itemsModal">Service</div>
          </div>
        </Modal.Title>
        <div className="header-options-modal">
          <AiTwotoneSetting className="cross-itemsModal" />
          <RxCross2 className="cross-itemsModal" onClick={props.onHide} />
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="body-conten-itemModalt">
          <div className="upper-input-itemModal">
            {/* <input
              type="text"
              name=""
              id="item_name"
              placeholder="Item Name"
              className="partiesModal-gstInput-dropdown"
              onChange={(v) => setItemName(v.target.value)}
            />
            <input
              type="text"
              name=""
              id="sale_price"
              placeholder="Sale Price"
              className="partiesModal-gstInput-dropdown"
              onChange={(v) => setSalePrice(v.target.value)}
            />
            <input
              type="text"
              name=""
              id="wholesale_price"
              placeholder="WholeSale Price"
              className="partiesModal-gstInput-dropdown"
              onChange={(v) => setWholesalePrice(v.target.value)}
            /> */}
            <div className="upper-input-first-div-main-itemModal">
              <div className="inputTag-main-itemModal">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Item Name*"
                  className="partiesModal-itemModal-dropdown"
                />
                {/* <BsInfoCircle className="info-sign-itemModal" /> */}
              </div>
              <div className="inputTag-main-itemModal">
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Item HSN"
                  className="partiesModal-itemModal-dropdown"
                />
                <BsSearch className="info-sign-itemModal" />
              </div>
              <div className="inputTag-third-main-itemModal">SELECT UNIT</div>
            </div>
            <div className="upper-input-second-div-main-itemModal">
              <div className="inputTag-main-itemModal">
                <select name="" id="" className="category-itemModal-dropdown">
                  <option value="" className="category-itemModal-dropdown">
                    Category
                  </option>
                  <option value="" className="category-itemModal-dropdown">
                    + Add category
                  </option>
                </select>
              </div>
              <div className="inputTag-main-itemModal">
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Item Code"
                  className="itemsModal-main-dropdown"
                />
                <div className="info-sign-new-text-itemModal">Assign Code</div>
              </div>
              <div className="inputTag-diff-main-itemModal">
                <BsFillCameraFill className="info-sign-camera-itemModal" />

                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Add Item Image"
                  className="itemsModal-diff-main-dropdown"
                />
              </div>
            </div>
          </div>
          <br />
          <br />
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Pricing">
              {/* <GstPage setEmail={setEmail} setAddress={setAddress} /> */}
              <PricingItemsModal />
            </Tab>
            <Tab eventKey="profile" title="Stock">
              <div className="stock-body-item-modal">
                <div className="input-box-first-stock-item-modal">
                  <input
                    type="text"
                    className="input-stock-item-modal"
                    placeholder="Opening Quantity"
                    onChange={(v) => setStockQuantity(v.target.value)}
                  />
                  <input
                    type="text"
                    className="input-stock-item-modal"
                    placeholder="At Price"
                  />
                  <input type="date" className="input-stock-item-modal" />
                </div>
                <div className="input-box-first-stock-item-modal">
                  <input
                    type="text"
                    className="input-stock-item-modal"
                    placeholder="Min Stock To Mantain"
                  />
                  <input
                    type="text"
                    className="input-stock-item-modal"
                    placeholder="Location"
                  />
                </div>
              </div>
              {/* <input
                type="number"
                name=""
                id="stock_quantity"
                placeholder="Stock Quantiy"
                onChange={(v) => setStockQuantity(v.target.value)}
              /> */}
            </Tab>
          </Tabs>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={addItemDetails}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}
