import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./companyModal.css";
export function CompanyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="my-modal-companyModal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Firm</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div id="company-body">
          <div id="left-side-companyModal">
            <h5>Add Logo</h5>
          </div>
          <div id="right-side-companyModal">
            <input
              type="text"
              name=""
              id="ctextbox"
              placeholder="Business Name"
            />
            <br />
            <input type="text" name="" id="ctextbox" placeholder="GSTIN" />
            <br />
            <input
              type="number"
              name=""
              id="ctextbox"
              placeholder="Phone Number"
            />
            <br />
            <input type="email" name="" id="ctextbox" placeholder="Email ID" />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}
