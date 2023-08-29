import React from "react";
import "./stockAdjustmentModal.css";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { invoke } from "@tauri-apps/api";
import { RxCross2 } from "react-icons/rx";

export const StockAdjustmentModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="modal-title-parties">
          <div id="contained-modal-title-vcenter">Stock Adjustment</div>
          <div className="third-div-part-itemsModal">
            <div className="content-feature-diff-itemsModal">Add Stock</div>
            <div className="info-feature-tick-creditAndBalance">
              <label class="switch-itemsModal">
                <input type="checkbox" />
                <span class="sliderswitch-itemsModal round"></span>
              </label>{" "}
            </div>
            <div className="content-feature-tick-itemsModal">Reduce Stock</div>
          </div>
          <RxCross2 className="cross-partiesModal" onClick={props.onHide} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row-first-adjust-modal">
          <div className="itemname-box">
            <div className="item-name-modal">Item Name</div>
            <div className="item-name">Abc</div>
          </div>
          <div className="date-box-modal">
            <input type="date" className="body-input-Adjust-modal"></input>
          </div>
        </div>
        <div className="vertical-line-adjust-modal"></div>
        <div className="input-box-body-Adjust-Modal">
          <input
            type="text"
            className="body-input-Adjust-modal"
            placeholder="Total Qty"
          />
          <select name="" id="" className="select-adjust-modal">
            <option value="">Bags</option>
            <option value="">Btl</option>
          </select>
          <input
            type="text"
            className="body-input-Adjust-modal"
            placeholder="At Price"
          />
          <input
            type="text"
            className="body-input-Adjust-modal"
            placeholder="Details"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};
