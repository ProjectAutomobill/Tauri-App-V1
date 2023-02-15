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
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Party</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}
