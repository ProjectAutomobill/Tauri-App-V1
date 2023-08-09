import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { TableA } from "../../settingsPages/tables/tableA";
import { jsPDF } from "jspdf";
import "./InvoicePage.css";
export const InvoicePageV3 = (props) => {
  const Print = async () => {
    //console.log('print');
    // let printContents = document.getElementById("forprint").innerHTML;
    // let originalContents = document.body.innerHTML;
    // document.body.innerHTML = printContents;
    // window.print();
    // document.body.innerHTML = originalContents;
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await document.querySelector("#forprint");
    pdf.html(data).then(() => {
      pdf.save("shipping_label.pdf");
    });
  };
  return (
    <div className="right-part-Print-invoice" id="forprint">
      <button onClick={Print}>Print</button>
      <div className="company-logo-img">
        <div className="company-img"></div>
        <div className="company-name-no">
          <div className="company-name">Company</div>
          <div className="phone-no-company">Ph no.:123456879</div>
        </div>
      </div>
      <div className="sale-heading-Print">Sale</div>
      <div className="below-sale-heading">
        <div className="partA-billTo-Print">
          <div className="heading-Print">Bill To:</div>
          <div className="heading-Print">Classic enterprises</div>
          <div className="billing-details-text">
            Plot no. 1, Shop No. 8, Kormangala, Banglore
          </div>
          <div className="billing-details-text">Contact no.:123456879</div>
        </div>
        <div className="partB-shippingTo-Print">
          <div className="heading-Print">Shipping To:</div>
          <div className="heading-Print">Classic enterprises</div>
          <div className="billing-details-text">
            Plot no. 1, Shop No. 8, Kormangala, Banglore
          </div>
        </div>
        <div className="partC-dateTime-Print">
          <div className="margin-top-div-PRINT"></div>
          <div className="dateTime-detail-text">Invoice no.: 101</div>
          <div className="dateTime-detail-text">Date : 02-07-2019</div>
          <div className="dateTime-detail-text">Time : 5:30pm</div>
          <div className="dateTime-detail-text">Due Date : 10-07-2019</div>
          <div className="margin-bottom-div-PRINT"></div>
        </div>
      </div>
      <div className="table-part1-PRINT">
        <TableA />
      </div>
      <div className="below-table-div-PRINT">
        <div className="invoice-detail-box_PRINT">
          <div className="invoice-bold-text-PRINT">Decription</div>
          <div className="invoice-normal-text-PRINT">Sale Decription</div>
          <div className="invoice-bold-text-PRINT">INVOICE AMOUNT IN WORDS</div>
          <div className="invoice-normal-text-PRINT">
            Forty Rupees and Fifty Paisa only
          </div>
          <div className="invoice-normal-text-PRINT">Due Date : 02-07-2019</div>
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
            <div className="tax-data-value-total-PRINT">$ 42.32</div>
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
          <div className="label-tax-PRINT">For, Company</div>
          <div className="company-signature-PRINT"></div>
          <div className="label-tax-PRINT">Authorizes Signatory</div>
        </div>
      </div>
    </div>
  );
};
