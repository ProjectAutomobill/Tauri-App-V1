import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./partiesModal.css";
import { GstPage } from "./gstPage";
import { invoke } from "@tauri-apps/api";

export function PartiesModal(props) {
  // const [url,setUrl] = useState("https://04df-103-199-226-253.in.ngrok.io ")
  const [partyName, setPartyName] = useState("");
  const [gstin, setGstin] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  function addPartyDetails() {
    invoke("add_party_details", {
      number: props.userNumber,
      company: props.userCompany,
      name: partyName,
      gstin: gstin,
      pnumber: phone_no,
      email: email,
      address: address,
    });
    props.onHide();
    props.toastMessage();
    props.setrefresh(1);
  }

  // useEffect(() => {
  // invoke("add_party_details", {
  //   number: props.userNumber,
  //   company: props.userCompany,
  //   name: partyName,
  //   gstin: gstin,
  //   pnumber: phone_no,
  //   email: email,
  //   address: address,
  // });
  // }, []);
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
      <Modal.Body>
        <div id="body-content">
          <div id="upper-input">
            <input
              type="text"
              name=""
              id="party_name"
              placeholder="Party Name"
              onChange={(v) => setPartyName(v.target.value)}
            />
            <input
              type="text"
              name=""
              id="GSTIN"
              placeholder="GSTIN"
              onChange={(v) => setGstin(v.target.value)}
            />
            <input
              type="text"
              name=""
              id="Phone_no"
              placeholder="Phone No"
              onChange={(v) => setPhoneNo(v.target.value)}
            />
          </div>
          <br />
          <br />
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="GST & Address">
              <GstPage setEmail={setEmail} setAddress={setAddress} />
            </Tab>
            <Tab eventKey="profile" title="Credit & Balance">
              Tab 2
            </Tab>
            <Tab eventKey="contact" title="Additional Fields" disabled>
              Tab 3
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
        <Button onClick={addPartyDetails}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}
