import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./partiesModal.css";
export function PartiesModal(props) {
  const [partyName, setPartyName] = useState("");
  const [gstin, setGstin] = useState("");
  const [phone_no, setPhoneNo] = useState("");

  async function addPartyDetails() {
    await fetch(
      "/addParty?name=" + partyName + "&gstin=" + gstin + "&pnumber=" + phone_no
    ).then((val) => console.log(val));
  }

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
              Tab 1
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
