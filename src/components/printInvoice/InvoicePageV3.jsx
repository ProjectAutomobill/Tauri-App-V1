import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { TableA } from "../../settingsPages/tables/tableA";
import { jsPDF } from "jspdf";
import "./InvoicePage.css";
import { useState } from "react";
import { useEffect } from "react";
import { event, invoke } from "@tauri-apps/api";

export const InvoicePageV3 = (props) => {
  const [partyDetails, setPartyDetails] = useState();
  const [partyName, setPartyName] = useState("Party 1");
  const [partyNumber, setPartyNumber] = useState();
  const [partyEmail, setPartyEmail] = useState();
  const [partyAddress, setPartyAddress] = useState();
  const [partyGSTIN, setPartyGSTIN] = useState();

  const [totalAmount, setTotalAmount] = useState();

  const [transactionDetails, setTransactionDetails] = useState();

  const Print = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await document.querySelector("#printCompletePage");
    pdf
      .html(data, {
        html2canvas: { scale: 0.75 },
      })
      .then(() => {
        pdf.save("shipping_label.pdf");
      });
  };

  //=====================Get Data============================
  useEffect(() => {
    invoke("get_parties_details", {
      number: "789456123",
      company: "Autotekk",
      partyName: "Party 1",
    })
      // `invoke` returns a Promise
      .then(async (response) => {
        setPartyDetails(JSON.parse(response));
        await setPartyNumber(JSON.parse(response).Number);
        await setPartyEmail(JSON.parse(response).Email);
        await setPartyAddress(JSON.parse(response).Address);
        await setPartyGSTIN(JSON.parse(response).GSTIN);
      });

    invoke("get_sale_transaction_for_print", {
      number: "789456123",
      company: "Autotekk",
      invoice_no: "1001",
    }).then((response) => {
      setTransactionDetails(JSON.parse(response).data);
      console.log(JSON.parse(response).data);
      var total = 0;
      for (var i = 0; i < JSON.parse(response).data.length; i++) {
        total += JSON.parse(response).data[i].Total;
      }
      setTotalAmount(total);
    });
  }, []);
  //=====================Get Data============================

  return (
    <div className="completepage" id="printCompletePage">
      <div className="right-part-Print-invoice" id="forprint">
        {/* <div className="right-part-Print"> */}
        <div className="company-logo-img-printv3">
          <div className="company-img-printv3"></div>
          <div className="company-name-no">
            <div className="company-name">{partyName}</div>
            <div className="phone-no-company">Ph no.:{partyNumber}</div>
          </div>
        </div>
        <div className="sale-heading-Print">Sale</div>
        <div className="below-sale-heading">
          <div className="partA-billTo-Print">
            <div className="heading-Print">Bill To:</div>
            <div className="heading-Print">{partyName}</div>
            <div className="billing-details-text">{partyAddress}</div>
            <div className="billing-details-text">
              Contact no.:{partyNumber}
            </div>
          </div>
          <div className="partB-shippingTo-Print">
            <div className="heading-Print">Shipping To:</div>
            <div className="heading-Print">{partyName}</div>
            <div className="billing-details-text">{partyAddress}</div>
          </div>
          <div className="partC-dateTime-Print">
            <div className="margin-top-div-PRINT"></div>
            <div className="dateTime-detail-text">Invoice no.: </div>
            <div className="dateTime-detail-text">Date : 02-07-2019</div>
            <div className="dateTime-detail-text">Time : 5:30pm</div>
            <div className="dateTime-detail-text">Due Date : 10-07-2019</div>
            <div className="margin-bottom-div-PRINT"></div>
          </div>
        </div>
        <div className="table-part1-PRINT">
          <TableA className="table-printv3" />
        </div>
        <div className="below-table-div-PRINT">
          <div className="invoice-detail-box_PRINT">
            <div className="invoice-bold-text-PRINT">Decription</div>
            <div className="invoice-normal-text-PRINT">Sale Decription</div>
            <div className="invoice-bold-text-PRINT">
              INVOICE AMOUNT IN WORDS
            </div>
            <div className="invoice-normal-text-PRINT">
              Forty Rupees and Fifty Paisa only
            </div>
            <div className="invoice-normal-text-PRINT">
              Due Date : 02-07-2019
            </div>
            <div className="invoice-bold-text-PRINT">TERMS AND CONDITIONS</div>
            <div className="invoice-normal-text-PRINT">
              Thank you for doing business with us !
            </div>
            <div className="barcode-box-PRINT"></div>
          </div>
          <div className="tax-details-PRINT">
            <div className="tax-detail-flex-box-PRINT">
              <div className="label-tax-PRINT">Sub Total</div>
              <div className="tax-data-value-PRINT">$ 40.00</div>
            </div>
            <div className="tax-detail-flex-box-PRINT">
              <div className="label-tax-PRINT">Discount</div>
              <div className="tax-data-value-PRINT">$ 0.100</div>
            </div>
            <div className="tax-detail-flex-box-PRINT">
              <div className="label-tax-PRINT">SGST@2.5%</div>
              <div className="tax-data-value-PRINT">$ 0.25</div>
            </div>
            <div className="tax-detail-flex-box-PRINT">
              <div className="label-tax-PRINT">CGST@2.5%</div>
              <div className="tax-data-value-PRINT">$ 0.25</div>
            </div>
            <div className="tax-detail-flex-box-PRINT">
              <div className="label-tax-PRINT">SGST@9%</div>
              <div className="tax-data-value-PRINT">$ 0.25</div>
            </div>
            <div className="tax-detail-flex-box-PRINT">
              <div className="label-tax-PRINT">Discount(12%)</div>
              <div className="tax-data-value-PRINT">$ 0.25</div>
            </div>
            <div className="tax-detail-flex-box-PRINT">
              <div className="label-tax-PRINT">SGST@2.5%</div>
              <div className="tax-data-value-PRINT">$ 0.25</div>
            </div>
            <div className="tax-detail-flex-box-PRINT">
              <div className="label-tax-PRINT">CGST@2.5%</div>
              <div className="tax-data-value-PRINT">$ 0.25</div>
            </div>
            <div className="tax-detail-flex-box-total-PRINT">
              <div className="label-tax-total-PRINT">Total</div>
              <div className="tax-data-value-total-PRINT">$ {totalAmount}</div>
            </div>
            <div className="tax-detail-flex-box-PRINT">
              <div className="label-tax-PRINT">Recieved</div>
              <div className="tax-data-value-PRINT">$ 0.00</div>
            </div>
            <div className="tax-detail-flex-box-PRINT">
              <div className="label-tax-PRINT">Balance</div>
              <div className="tax-data-value-PRINT">$ 42.32</div>
            </div>
            <br />
            <div className="label-tax-PRINT-printv3">For, Company</div>
            <div className="company-signature-PRINT-printv3"></div>
            <div className="label-tax-PRINT-printv3">Authorizes Signatory</div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <button onClick={Print}>Print</button>
    </div>
  );
};
