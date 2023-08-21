import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./companyModal.css";
export function CompanyModal(props) {
  const [nameCompanyModal, setNameCompanyModal] = useState();
  const [gstinCompanyModal, setGSTINCompanyModal] = useState();
  const [emailCompanyModal, setEmailCompanyModal] = useState();
  const [numberCompanyModal, setNumberCompanyModal] = useState();
  async function updateCompanyInfo() {
    console.log("Updated Company Name : " + nameCompanyModal);
    await fetch(
      "/updateCompanyInfo?b_name=" +
        nameCompanyModal +
        "&b_gstin=" +
        gstinCompanyModal +
        "&b_number=" +
        numberCompanyModal +
        "&b_email=" +
        emailCompanyModal
    ).then((val) => console.log(val));
  }

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
        <div className="company-body">
          <div className="left-side-companyModal">
            {/* <div>Add Logo</div> */}Add Logo
          </div>
          <div className="right-side-companyModal">
            <input
              type="text"
              name="business-name-companyModal"
              id="business-name-companyModal"
              placeholder="Business Name"
              className="ctextbox"
              onChange={(e) => setNameCompanyModal(e.target.value)}
            />
            <br />
            <input
              type="text"
              name="gstin-companyModal"
              id="gstin-companyModal"
              placeholder="GSTIN"
              className="ctextbox"
              onChange={(e) => setGSTINCompanyModal(e.target.value)}
            />
            <br />
            <input
              type="number"
              name="phoneNo-companyModal"
              id="phoneNo-companyModal"
              placeholder="Phone Number"
              className="ctextbox"
              onChange={(e) => setNumberCompanyModal(e.target.value)}
            />
            <br />
            <input
              type="email"
              name="email-companyModal"
              id="email-companyModal"
              placeholder="Email ID"
              className="ctextbox"
              onChange={(e) => setEmailCompanyModal(e.target.value)}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={updateCompanyInfo}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}
