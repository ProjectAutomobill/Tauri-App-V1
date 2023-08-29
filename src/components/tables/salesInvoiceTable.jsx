import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import "./salesInvoiceTable.css";
import { useState } from "react";
import { useEffect } from "react";
import { invoke } from "@tauri-apps/api";
import LoadingSpinner from "../../loading";
import { FiFilter } from "react-icons/fi";
import { AiFillPrinter } from "react-icons/ai";
import { TiArrowForward } from "react-icons/ti";
import { TableA } from "../../settingsPages/tables/tableA";
import { jsPDF } from "jspdf";
import { BsFillCircleFill, BsThreeDotsVertical } from "react-icons/bs";
export const SaleInvoiceTable = (props) => {
  const [dataSales, setSalesData] = useState();
  //========================================================

  const [partyDetails, setPartyDetails] = useState();
  const [partyName, setPartyName] = useState("Party 1");
  const [partyNumber, setPartyNumber] = useState();
  const [partyEmail, setPartyEmail] = useState();
  const [partyAddress, setPartyAddress] = useState();
  const [partyGSTIN, setPartyGSTIN] = useState();

  const [totalAmount, setTotalAmount] = useState();
  const [invoice_no, setInvoiceNo] = useState();
  const [transactionDetails, setTransactionDetails] = useState();
  const [rerender, setReRender] = useState(0);
  const [flg, setFlg] = useState(false);
  function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  function Rerender() {
    console.log("Rerender Function");
    setReRender(!rerender);
  }

  const print_call = async (invoice_no) => {
    Rerender();
    setFlg(!flg);
    wait(2000);
    Print(invoice_no);
  };
  const Print = async (invoice_no) => {
    console.log("In Print Function -> SaleInvoiceTable");
    //-----------------------------------------------------------------
    await setInvoiceNo(invoice_no);
    invoke("get_parties_details", {
      number: props.userNumber,
      company: props.userCompany,
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
    // console.log("Invoice No : " + invoice_no);
    invoke("get_sale_transaction_for_print", {
      number: props.userNumber,
      company: props.userCompany,
      invoice_no: JSON.stringify(invoice_no),
    }).then((response) => {
      setTransactionDetails(JSON.parse(response).data);
      console.log(JSON.parse(response).data);
      var total = 0;
      for (var i = 0; i < JSON.parse(response).data.length; i++) {
        total += JSON.parse(response).data[i].Total;
      }
      setTotalAmount(total);
    });
    // console.log("Setting Values");
    // wait(2000);
    //-----------------------------------------------------------------
    // const pdf = new jsPDF("portrait", "pt", "a4");
    // const data = await document.querySelector("#forprint");
    // pdf
    //   .html(data, {
    //     html2canvas: { scale: 0.75 },
    //   })
    //   .then(() => {
    //     pdf.save("shipping_label.pdf");
    //   });
  };

  async function printPDFFile() {
    console.log("Saving PDF");
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await document.querySelector("#forprint");
    pdf
      .html(data, {
        html2canvas: { scale: 0.75 },
      })
      .then(() => {
        pdf.save("shipping_label.pdf");
      });
  }
  //========================================================
  function printPDF(invoice_no) {
    console.log("Print Invoice with Invoice No : " + invoice_no);
    Print();
  }

  useEffect(() => {
    // getSaleTransactions();
    invoke("get_sales_transaction", {
      number: props.userNumber,
      company: props.userCompany,
    }).then((response) => {
      setSalesData(JSON.parse(response));
      var totalPaid = 0;
      var totalAmount = 0;
      for (var i = 0; i < JSON.parse(response).length; i++) {
        totalPaid =
          totalPaid +
          JSON.parse(response)[i].Total -
          JSON.parse(response)[i].Balance;
        totalAmount += JSON.parse(response)[i].Total;
        console.log("Total Paid : " + totalPaid);
      }
      props.setTotalPaid(totalPaid);
      props.setTotalAmount(totalAmount);
    });
  }, []);
  return (
    <div className="saleInvoiceTable-table">
      {dataSales == null && <LoadingSpinner className="loading_spinner" />}
      {/* {false && ( */}
      <div className="completepage" id="printCompletePage" hidden>
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
            <TableA
              className="table-printv3"
              userNumber={props.userNumber}
              userCompany={props.userCompany}
              // invoice_no={invoice_no}
              transactionDetails={transactionDetails}
              rerender={rerender}
              Print={printPDFFile}
              setFlg={setFlg}
              flg={flg}
            />
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
              <div className="invoice-bold-text-PRINT">
                TERMS AND CONDITIONS
              </div>
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
                <div className="tax-data-value-total-PRINT">
                  $ {totalAmount}
                </div>
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
              <div className="label-tax-PRINT-printv3">
                Authorizes Signatory
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        <button onClick={Print}>Print</button>
      </div>
      {/* )} */}
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 570,
                  fontSize: 12,
                  color: "gray",
                  borderRight: "1px solid rgb(230, 230, 230)",
                  // display: "flex",
                }}
                className="table-header-saleInvoice"
              >
                <div className="table-header-box-sale">
                  DATE
                  <div className="filter-div">
                    <FiFilter className="filter-icon-sale" />
                  </div>
                </div>
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 570,
                  fontSize: 12,
                  color: "gray",
                  // display: "flex",
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
                className="table-header-saleInvoice"
              >
                <div className="table-header-box-sale">
                  INVOICE NO.
                  <div className="filter-div">
                    <FiFilter className="filter-icon-sale" />
                  </div>
                </div>
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 570,
                  fontSize: 12,
                  color: "gray",
                  // display: "flex",
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
                className="table-header-saleInvoice"
              >
                <div className="table-header-box-sale">
                  PARTY NAME
                  <div className="filter-div">
                    <FiFilter className="filter-icon-sale" />
                  </div>
                </div>
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 570,
                  fontSize: 12,
                  color: "gray",
                  // display: "flex",
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
                className="table-header-saleInvoice"
              >
                <div className="table-header-box-sale">
                  TRANSACTION TYPE
                  <div className="filter-div">
                    <FiFilter className="filter-icon-sale" />
                  </div>
                </div>
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 570,
                  fontSize: 12,
                  color: "gray",
                  // display: "flex",
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
                className="table-header-saleInvoice"
              >
                <div className="table-header-box-sale">
                  PAYMENT TYPE
                  <div className="filter-div">
                    <FiFilter className="filter-icon-sale" />
                  </div>
                </div>
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 570,
                  fontSize: 12,
                  color: "gray",
                  // display: "flex",
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
                className="table-header-saleInvoice"
              >
                <div className="table-header-box-sale">
                  AMOUNT
                  <div className="filter-div">
                    <FiFilter className="filter-icon-sale" />
                  </div>
                </div>
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 570,
                  fontSize: 12,
                  color: "gray",
                  borderRight: "1px solid rgb(230, 230, 230)",
                  // display: "flex",
                }}
                className="table-header-saleInvoice"
              >
                <div className="table-header-box-sale">
                  BALANCE DUE
                  <div className="filter-div">
                    <FiFilter className="filter-icon-sale" />
                  </div>
                </div>
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 570,
                  fontSize: 12,
                  color: "gray",
                  borderRight: "1px solid rgb(230, 230, 230)",
                  // display: "flex",
                }}
                className="table-header-saleInvoice"
              ></TableCell>
              <TableCell
                sx={{
                  fontWeight: 570,
                  fontSize: 12,
                  color: "gray",
                  borderRight: "1px solid rgb(230, 230, 230)",
                  // display: "flex",
                }}
                className="table-header-saleInvoice"
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-row-saleInvoice">
            {dataSales?.map(
              (row) =>
                (row.PartyName.includes(props.searchText) ||
                  (props.searchText != null &&
                    props.searchText.length == 0)) && (
                  <TableRow className="table-row-sale-invoice">
                    <TableCell
                      sx={{
                        paddingTop: "12px",
                        paddingBottom: "12px",
                        fontSize: 12,
                        borderRight: "1px solid rgb(230, 230, 230)",
                      }}
                    >
                      {row.Date}
                    </TableCell>
                    <TableCell
                      sx={{
                        paddingTop: "12px",
                        paddingBottom: "12px",
                        fontSize: 12,
                        textAlign: "right",
                        borderRight: "1px solid rgb(230, 230, 230)",
                      }}
                    >
                      {row.Invoice_No}
                    </TableCell>
                    <TableCell
                      sx={{
                        paddingTop: "12px",
                        paddingBottom: "12px",
                        fontSize: 12,
                        borderRight: "1px solid rgb(230, 230, 230)",
                      }}
                    >
                      {row.PartyName}
                    </TableCell>
                    <TableCell
                      sx={{
                        paddingTop: "12px",
                        paddingBottom: "12px",
                        fontSize: 12,
                        borderRight: "1px solid rgb(230, 230, 230)",
                      }}
                    >
                      {row.Transaction_Type}
                    </TableCell>
                    <TableCell
                      sx={{
                        paddingTop: "12px",
                        paddingBottom: "12px",
                        fontSize: 12,
                        borderRight: "1px solid rgb(230, 230, 230)",
                      }}
                    >
                      {row.Payment_Type}
                    </TableCell>
                    <TableCell
                      sx={{
                        paddingTop: "12px",
                        paddingBottom: "12px",
                        fontSize: 12,
                        textAlign: "right",
                        borderRight: "1px solid rgb(230, 230, 230)",
                      }}
                    >
                      {row.Total}
                    </TableCell>
                    <TableCell
                      sx={{
                        paddingTop: "12px",
                        paddingBottom: "12px",
                        fontSize: 12,
                        borderRight: "1px solid rgb(230, 230, 230)",
                        color: "black",
                        fontWeight: 100,
                        textAlign: "right",
                      }}
                    >
                      {row.Balance}
                    </TableCell>
                    <TableCell
                      sx={{
                        paddingTop: "12px",
                        paddingBottom: "12px",
                        fontSize: 12,
                        borderRight: "1px solid rgb(230, 230, 230)",
                        color: "black",
                        fontWeight: 100,
                      }}
                    >
                      {/* {row.Balance} */}
                      <div className="table-header-box-sale ">
                        <AiFillPrinter
                          className="print-icon-sale-invoice"
                          // onClick={() => printPDF(row.Invoice_No)}
                          // onClick={() => Print(row.Invoice_No)}
                          onClick={() => print_call(row.Invoice_No)}
                        />
                        <TiArrowForward className="share-icon" />
                      </div>
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: 12,
                        borderRight: "1px solid rgb(230, 230, 230)",
                      }}
                    >
                      <div className="dropdown_partiesTable">
                        <BsThreeDotsVertical />
                        <div className="dropdown-options-partiesTable">
                          <div className="option-table-party">View/Edit</div>
                          <div className="option-table-party">
                            Generate e-Invoice
                          </div>
                          <div className="option-table-party">
                            Receive Payment
                          </div>
                          <div className="option-table-party">
                            Convert To Return
                          </div>
                          <div className="option-table-party">
                            Preview as Delivery Challan
                          </div>
                          <div className="option-table-party">Delete</div>
                          <div className="option-table-party">Duplicate</div>
                          <div className="option-table-party">Open PDF</div>
                          <div className="option-table-party">Preview</div>
                          <div className="option-table-party">Print</div>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
