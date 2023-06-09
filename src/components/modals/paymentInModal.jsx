import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./paymentInModal.css";
import { GstPage } from "./gstPage";
import { invoke } from "@tauri-apps/api";

export function PaymentInModal(props) {
  // const [url,setUrl] = useState("https://04df-103-199-226-253.in.ngrok.io ")
  const [partyName, setPartyName] = useState("");
  const [receivedAmount, setReceivedAmount] = useState("");
  const [receiptNo, setReceiptNo] = useState("");
  const [date, setDate] = useState("");
  const [transactionType, setTransactionType] = useState("Cash");
  const [dropdownOptions, setDropdownOptions] = useState([
    { name: "Autotekk" },
    { name: "Jatin" },
  ]);
  function addPaymentInDetails() {
    // await fetch(
    //   "/addParty?number=" +
    //     props.userNumber +
    //     "name=" +
    //     partyName +
    //     "&gstin=" +
    //     gstin +
    //     "&pnumber=" +
    //     phone_no +
    //     "&email=" +
    //     email +
    //     "&address=" +
    //     address
    // ).then((val) => console.log(val));
    var jsondata = {
      received: receivedAmount,
      receiptno: receiptNo,
      Date: date.toString(),
      party: partyName,
      transactiontype: transactionType,
    };
    var stringData = JSON.stringify(jsondata);
    console.log(stringData);

    invoke("add_paymentin_details", {
      number: props.userNumber,
      company: props.userCompany,

      jsondata: stringData,
      //   received: receivedAmount,
      //   receiptno: receiptNo,
      //   Date: date.toString(),
      //   party: partyName,
      //   transactiontype: transactionType,
    });
    props.onHide();
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
        <Modal.Title id="contained-modal-title-vcenter">Payment In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id="body-paymentInModal">
          <div id="leftside-paymentInModal">
            <select
              className="select-paymentInModal"
              onChange={(e) => setPartyName(e.target.value)}
            >
              {dropdownOptions?.map((row, index) => (
                <option value={row.name}>{row.name}</option>
              ))}
            </select>
            <br />
            <br />
            <select
              className="select-paymentInModal"
              onChange={(e) => setTransactionType(e.target.value)}
            >
              <option value={"Cash"}>Cash</option>
              <option value={"Cheque"}>Cheque</option>
              <option value={"Others"}>Others</option>
            </select>
          </div>
          <div id="rightside-paymentInModal">
            <div id="upper-block">
              <div className="flex-paymentIn-Modal">
                <div className="small-text">Receipt No</div>
                <input
                  type="text"
                  className="receipt-no-paymentInModal"
                  onChange={(e) => setReceiptNo(e.target.value)}
                />
              </div>
              <div className="flex-paymentIn-Modal">
                <div className="small-text">Date</div>
                <input
                  type="date"
                  className="date-paymentInModal"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="flex-paymentIn-Modal">
                <div className="small-text">Received</div>
                <input
                  type="text"
                  className="received-paymentInModal"
                  onChange={(e) => setReceivedAmount(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={addPaymentInDetails}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}
