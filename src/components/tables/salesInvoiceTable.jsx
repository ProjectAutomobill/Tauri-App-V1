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
export const SaleInvoiceTable = (props) => {
  const [dataSales, setSalesData] = useState();

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
                  props.searchText.length == 0) && (
                  <TableRow>
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
                        <AiFillPrinter className="print-icon-sale-invoice" />
                        <TiArrowForward className="share-icon" />
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

const dataTable = [
  {
    DATE: "11/17/2022",
    INVOICE_NUMBER: 98,
    PARTY_NAME: "Quatz",
    TRANSACTION_TYPE: "RKW",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$60914.96",
    BALANCE_DUE: "$74838.32",
  },
  {
    DATE: "3/16/2022",
    INVOICE_NUMBER: 77,
    PARTY_NAME: "Lajo",
    TRANSACTION_TYPE: "TAU",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$67951.34",
    BALANCE_DUE: "$34485.98",
  },
  {
    DATE: "10/11/2022",
    INVOICE_NUMBER: 67,
    PARTY_NAME: "Pixonyx",
    TRANSACTION_TYPE: "HTO",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$3291.94",
    BALANCE_DUE: "$39091.17",
  },
  {
    DATE: "2/9/2022",
    INVOICE_NUMBER: 40,
    PARTY_NAME: "Youtags",
    TRANSACTION_TYPE: "TLS",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$48461.11",
    BALANCE_DUE: "$90308.35",
  },
  {
    DATE: "4/15/2022",
    INVOICE_NUMBER: 33,
    PARTY_NAME: "Voonix",
    TRANSACTION_TYPE: "MLA",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$1480.91",
    BALANCE_DUE: "$2048.08",
  },
  {
    DATE: "5/24/2022",
    INVOICE_NUMBER: 15,
    PARTY_NAME: "Feedbug",
    TRANSACTION_TYPE: "HND",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$64742.97",
    BALANCE_DUE: "$93974.60",
  },
  {
    DATE: "4/17/2022",
    INVOICE_NUMBER: 65,
    PARTY_NAME: "Cogidoo",
    TRANSACTION_TYPE: "UCN",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$96500.93",
    BALANCE_DUE: "$46986.88",
  },
  {
    DATE: "6/8/2022",
    INVOICE_NUMBER: 34,
    PARTY_NAME: "Tavu",
    TRANSACTION_TYPE: "KLC",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$86997.22",
    BALANCE_DUE: "$53000.89",
  },
  {
    DATE: "9/26/2022",
    INVOICE_NUMBER: 71,
    PARTY_NAME: "Izio",
    TRANSACTION_TYPE: "BVO",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$57163.10",
    BALANCE_DUE: "$39643.56",
  },
  {
    DATE: "7/5/2022",
    INVOICE_NUMBER: 57,
    PARTY_NAME: "Quatz",
    TRANSACTION_TYPE: "SJV",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$37380.92",
    BALANCE_DUE: "$28457.79",
  },
  {
    DATE: "5/31/2022",
    INVOICE_NUMBER: 73,
    PARTY_NAME: "Skiba",
    TRANSACTION_TYPE: "ASY",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$91262.47",
    BALANCE_DUE: "$67409.76",
  },
  {
    DATE: "12/19/2022",
    INVOICE_NUMBER: 58,
    PARTY_NAME: "Buzzster",
    TRANSACTION_TYPE: "RSH",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$20245.12",
    BALANCE_DUE: "$38725.33",
  },
  {
    DATE: "1/10/2022",
    INVOICE_NUMBER: 34,
    PARTY_NAME: "Twinte",
    TRANSACTION_TYPE: "QVR",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$41618.73",
    BALANCE_DUE: "$65486.38",
  },
  {
    DATE: "1/10/2022",
    INVOICE_NUMBER: 54,
    PARTY_NAME: "Blogpad",
    TRANSACTION_TYPE: "AMQ",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$22882.72",
    BALANCE_DUE: "$69182.06",
  },
  {
    DATE: "11/12/2022",
    INVOICE_NUMBER: 20,
    PARTY_NAME: "Oyope",
    TRANSACTION_TYPE: "JUT",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$8998.76",
    BALANCE_DUE: "$4095.68",
  },
  {
    DATE: "3/8/2022",
    INVOICE_NUMBER: 24,
    PARTY_NAME: "Thoughtmix",
    TRANSACTION_TYPE: "EDN",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$75634.63",
    BALANCE_DUE: "$61833.19",
  },
  {
    DATE: "1/23/2022",
    INVOICE_NUMBER: 95,
    PARTY_NAME: "Dabjam",
    TRANSACTION_TYPE: "KSW",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$25762.93",
    BALANCE_DUE: "$6163.16",
  },
  {
    DATE: "1/2/2022",
    INVOICE_NUMBER: 14,
    PARTY_NAME: "Roombo",
    TRANSACTION_TYPE: "SYE",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$68437.00",
    BALANCE_DUE: "$98087.81",
  },
  {
    DATE: "4/15/2022",
    INVOICE_NUMBER: 35,
    PARTY_NAME: "Rhyloo",
    TRANSACTION_TYPE: "NNI",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$97366.58",
    BALANCE_DUE: "$35707.48",
  },
  {
    DATE: "2/24/2022",
    INVOICE_NUMBER: 94,
    PARTY_NAME: "DabZ",
    TRANSACTION_TYPE: "SXO",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$19043.98",
    BALANCE_DUE: "$67937.37",
  },
  {
    DATE: "5/24/2022",
    INVOICE_NUMBER: 96,
    PARTY_NAME: "Gabvine",
    TRANSACTION_TYPE: "NAZ",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$19237.78",
    BALANCE_DUE: "$92344.46",
  },
  {
    DATE: "5/7/2022",
    INVOICE_NUMBER: 21,
    PARTY_NAME: "Linkbuzz",
    TRANSACTION_TYPE: "UAC",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$97459.13",
    BALANCE_DUE: "$17578.12",
  },
  {
    DATE: "6/22/2022",
    INVOICE_NUMBER: 87,
    PARTY_NAME: "Photospace",
    TRANSACTION_TYPE: "LDS",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$53708.05",
    BALANCE_DUE: "$26057.68",
  },
  {
    DATE: "8/28/2022",
    INVOICE_NUMBER: 36,
    PARTY_NAME: "Edgeclub",
    TRANSACTION_TYPE: "WAK",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$63699.33",
    BALANCE_DUE: "$36075.54",
  },
  {
    DATE: "9/20/2022",
    INVOICE_NUMBER: 60,
    PARTY_NAME: "Blogpad",
    TRANSACTION_TYPE: "HFN",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$27149.02",
    BALANCE_DUE: "$20592.64",
  },
  {
    DATE: "11/7/2022",
    INVOICE_NUMBER: 62,
    PARTY_NAME: "Feedbug",
    TRANSACTION_TYPE: "MVM",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$19657.75",
    BALANCE_DUE: "$51862.77",
  },
  {
    DATE: "9/15/2022",
    INVOICE_NUMBER: 34,
    PARTY_NAME: "Edgeclub",
    TRANSACTION_TYPE: "NDA",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$61290.29",
    BALANCE_DUE: "$92391.85",
  },
  {
    DATE: "1/12/2022",
    INVOICE_NUMBER: 95,
    PARTY_NAME: "Edgepulse",
    TRANSACTION_TYPE: "BBW",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$84950.55",
    BALANCE_DUE: "$99839.45",
  },
  {
    DATE: "5/13/2022",
    INVOICE_NUMBER: 27,
    PARTY_NAME: "Oozz",
    TRANSACTION_TYPE: "UES",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$53231.90",
    BALANCE_DUE: "$65346.28",
  },
  {
    DATE: "9/8/2022",
    INVOICE_NUMBER: 42,
    PARTY_NAME: "Meemm",
    TRANSACTION_TYPE: "ATJ",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$4778.12",
    BALANCE_DUE: "$30361.02",
  },
  {
    DATE: "2/4/2022",
    INVOICE_NUMBER: 64,
    PARTY_NAME: "Zooveo",
    TRANSACTION_TYPE: "AJL",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$72713.33",
    BALANCE_DUE: "$12674.78",
  },
  {
    DATE: "6/18/2022",
    INVOICE_NUMBER: 50,
    PARTY_NAME: "Thoughtsphere",
    TRANSACTION_TYPE: "LKU",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$58646.92",
    BALANCE_DUE: "$35885.39",
  },
  {
    DATE: "6/30/2022",
    INVOICE_NUMBER: 48,
    PARTY_NAME: "Abata",
    TRANSACTION_TYPE: "ARV",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$29998.75",
    BALANCE_DUE: "$96614.26",
  },
  {
    DATE: "11/27/2022",
    INVOICE_NUMBER: 38,
    PARTY_NAME: "Centidel",
    TRANSACTION_TYPE: "CXH",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$89061.75",
    BALANCE_DUE: "$46074.20",
  },
  {
    DATE: "12/4/2022",
    INVOICE_NUMBER: 37,
    PARTY_NAME: "Vimbo",
    TRANSACTION_TYPE: "HRY",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$22420.83",
    BALANCE_DUE: "$9752.05",
  },
  {
    DATE: "11/27/2022",
    INVOICE_NUMBER: 12,
    PARTY_NAME: "Chatterpoint",
    TRANSACTION_TYPE: "POR",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$39573.04",
    BALANCE_DUE: "$31601.18",
  },
  {
    DATE: "3/20/2022",
    INVOICE_NUMBER: 27,
    PARTY_NAME: "Dynabox",
    TRANSACTION_TYPE: "BCI",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$91404.45",
    BALANCE_DUE: "$75541.77",
  },
  {
    DATE: "6/9/2022",
    INVOICE_NUMBER: 49,
    PARTY_NAME: "Dazzlesphere",
    TRANSACTION_TYPE: "POX",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$20033.17",
    BALANCE_DUE: "$81644.68",
  },
  {
    DATE: "4/1/2022",
    INVOICE_NUMBER: 63,
    PARTY_NAME: "Kimia",
    TRANSACTION_TYPE: "MXJ",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$40188.39",
    BALANCE_DUE: "$19434.49",
  },
  {
    DATE: "2/14/2022",
    INVOICE_NUMBER: 12,
    PARTY_NAME: "Kwinu",
    TRANSACTION_TYPE: "DCG",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$64642.38",
    BALANCE_DUE: "$79345.05",
  },
  {
    DATE: "10/12/2022",
    INVOICE_NUMBER: 40,
    PARTY_NAME: "Fliptune",
    TRANSACTION_TYPE: "CAD",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$63336.54",
    BALANCE_DUE: "$3425.57",
  },
  {
    DATE: "8/26/2022",
    INVOICE_NUMBER: 93,
    PARTY_NAME: "Rhynyx",
    TRANSACTION_TYPE: "KNF",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$60750.16",
    BALANCE_DUE: "$98766.91",
  },
  {
    DATE: "7/25/2022",
    INVOICE_NUMBER: 82,
    PARTY_NAME: "Jazzy",
    TRANSACTION_TYPE: "SYB",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$40972.99",
    BALANCE_DUE: "$25286.46",
  },
  {
    DATE: "1/23/2022",
    INVOICE_NUMBER: 76,
    PARTY_NAME: "Skippad",
    TRANSACTION_TYPE: "BSS",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$97018.80",
    BALANCE_DUE: "$85010.36",
  },
  {
    DATE: "3/5/2022",
    INVOICE_NUMBER: 39,
    PARTY_NAME: "Bluezoom",
    TRANSACTION_TYPE: "YYI",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$38550.22",
    BALANCE_DUE: "$48789.79",
  },
  {
    DATE: "10/17/2022",
    INVOICE_NUMBER: 64,
    PARTY_NAME: "Dynava",
    TRANSACTION_TYPE: "DTU",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$50596.44",
    BALANCE_DUE: "$5275.37",
  },
  {
    DATE: "6/24/2022",
    INVOICE_NUMBER: 78,
    PARTY_NAME: "Meembee",
    TRANSACTION_TYPE: "SHB",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$12721.01",
    BALANCE_DUE: "$7386.93",
  },
  {
    DATE: "3/4/2022",
    INVOICE_NUMBER: 57,
    PARTY_NAME: "Agimba",
    TRANSACTION_TYPE: "PUW",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$72995.32",
    BALANCE_DUE: "$59801.30",
  },
  {
    DATE: "11/15/2022",
    INVOICE_NUMBER: 29,
    PARTY_NAME: "Rhybox",
    TRANSACTION_TYPE: "GRY",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$39122.23",
    BALANCE_DUE: "$14428.58",
  },
  {
    DATE: "12/6/2022",
    INVOICE_NUMBER: 77,
    PARTY_NAME: "Teklist",
    TRANSACTION_TYPE: "BIU",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$65464.21",
    BALANCE_DUE: "$96588.15",
  },
  {
    DATE: "6/12/2022",
    INVOICE_NUMBER: 34,
    PARTY_NAME: "Fatz",
    TRANSACTION_TYPE: "DGA",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$43664.42",
    BALANCE_DUE: "$11905.96",
  },
  {
    DATE: "12/1/2022",
    INVOICE_NUMBER: 85,
    PARTY_NAME: "Lazz",
    TRANSACTION_TYPE: "IFN",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$34173.76",
    BALANCE_DUE: "$11976.31",
  },
  {
    DATE: "10/30/2022",
    INVOICE_NUMBER: 23,
    PARTY_NAME: "Trilia",
    TRANSACTION_TYPE: "LXG",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$93240.85",
    BALANCE_DUE: "$13803.28",
  },
  {
    DATE: "7/11/2022",
    INVOICE_NUMBER: 48,
    PARTY_NAME: "Meevee",
    TRANSACTION_TYPE: "LTF",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$30506.65",
    BALANCE_DUE: "$79930.82",
  },
  {
    DATE: "11/12/2022",
    INVOICE_NUMBER: 7,
    PARTY_NAME: "Skyble",
    TRANSACTION_TYPE: "PYV",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$41133.75",
    BALANCE_DUE: "$88892.16",
  },
  {
    DATE: "8/29/2022",
    INVOICE_NUMBER: 4,
    PARTY_NAME: "Aimbu",
    TRANSACTION_TYPE: "LNE",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$90583.21",
    BALANCE_DUE: "$43859.20",
  },
  {
    DATE: "7/8/2022",
    INVOICE_NUMBER: 77,
    PARTY_NAME: "Voonyx",
    TRANSACTION_TYPE: "BWB",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$60468.17",
    BALANCE_DUE: "$39957.57",
  },
  {
    DATE: "10/14/2022",
    INVOICE_NUMBER: 88,
    PARTY_NAME: "Eamia",
    TRANSACTION_TYPE: "TDZ",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$66133.99",
    BALANCE_DUE: "$49594.98",
  },
  {
    DATE: "6/23/2022",
    INVOICE_NUMBER: 65,
    PARTY_NAME: "Bubblemix",
    TRANSACTION_TYPE: "IGO",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$71168.32",
    BALANCE_DUE: "$60149.09",
  },
  {
    DATE: "4/24/2022",
    INVOICE_NUMBER: 63,
    PARTY_NAME: "Tazzy",
    TRANSACTION_TYPE: "KBM",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$35809.88",
    BALANCE_DUE: "$77468.11",
  },
  {
    DATE: "5/4/2022",
    INVOICE_NUMBER: 26,
    PARTY_NAME: "Feedfire",
    TRANSACTION_TYPE: "MGG",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$35911.79",
    BALANCE_DUE: "$44508.77",
  },
  {
    DATE: "5/23/2022",
    INVOICE_NUMBER: 86,
    PARTY_NAME: "Youspan",
    TRANSACTION_TYPE: "SDQ",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$92521.30",
    BALANCE_DUE: "$66143.23",
  },
  {
    DATE: "12/20/2022",
    INVOICE_NUMBER: 16,
    PARTY_NAME: "Zoombeat",
    TRANSACTION_TYPE: "AIA",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$84489.83",
    BALANCE_DUE: "$91635.78",
  },
  {
    DATE: "9/20/2022",
    INVOICE_NUMBER: 98,
    PARTY_NAME: "Tagopia",
    TRANSACTION_TYPE: "OEL",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$92982.23",
    BALANCE_DUE: "$76109.12",
  },
  {
    DATE: "6/11/2022",
    INVOICE_NUMBER: 72,
    PARTY_NAME: "Skinix",
    TRANSACTION_TYPE: "RCB",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$25100.37",
    BALANCE_DUE: "$33034.64",
  },
  {
    DATE: "6/24/2022",
    INVOICE_NUMBER: 27,
    PARTY_NAME: "Yodo",
    TRANSACTION_TYPE: "HZP",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$97639.16",
    BALANCE_DUE: "$52586.46",
  },
  {
    DATE: "1/29/2022",
    INVOICE_NUMBER: 37,
    PARTY_NAME: "Browsezoom",
    TRANSACTION_TYPE: "OMS",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$25393.60",
    BALANCE_DUE: "$14987.62",
  },
  {
    DATE: "8/2/2022",
    INVOICE_NUMBER: 94,
    PARTY_NAME: "Yamia",
    TRANSACTION_TYPE: "DOB",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$62422.16",
    BALANCE_DUE: "$44049.56",
  },
  {
    DATE: "12/12/2022",
    INVOICE_NUMBER: 46,
    PARTY_NAME: "Thoughtmix",
    TRANSACTION_TYPE: "ENU",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$81400.93",
    BALANCE_DUE: "$45792.30",
  },
  {
    DATE: "4/17/2022",
    INVOICE_NUMBER: 65,
    PARTY_NAME: "Dabjam",
    TRANSACTION_TYPE: "SKZ",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$70525.62",
    BALANCE_DUE: "$26689.59",
  },
  {
    DATE: "9/26/2022",
    INVOICE_NUMBER: 47,
    PARTY_NAME: "Demimbu",
    TRANSACTION_TYPE: "BXO",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$72509.83",
    BALANCE_DUE: "$14459.76",
  },
  {
    DATE: "11/18/2022",
    INVOICE_NUMBER: 1,
    PARTY_NAME: "Rhyloo",
    TRANSACTION_TYPE: "CRH",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$63474.10",
    BALANCE_DUE: "$67708.94",
  },
  {
    DATE: "12/22/2022",
    INVOICE_NUMBER: 97,
    PARTY_NAME: "Innojam",
    TRANSACTION_TYPE: "MUG",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$35433.15",
    BALANCE_DUE: "$26685.73",
  },
  {
    DATE: "7/24/2022",
    INVOICE_NUMBER: 92,
    PARTY_NAME: "Chatterpoint",
    TRANSACTION_TYPE: "UIP",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$44668.23",
    BALANCE_DUE: "$94351.12",
  },
  {
    DATE: "9/17/2022",
    INVOICE_NUMBER: 39,
    PARTY_NAME: "Voonyx",
    TRANSACTION_TYPE: "NKC",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$67771.63",
    BALANCE_DUE: "$75483.05",
  },
  {
    DATE: "7/3/2022",
    INVOICE_NUMBER: 40,
    PARTY_NAME: "Photospace",
    TRANSACTION_TYPE: "FLL",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$92575.17",
    BALANCE_DUE: "$52040.25",
  },
  {
    DATE: "5/8/2022",
    INVOICE_NUMBER: 8,
    PARTY_NAME: "Jaxworks",
    TRANSACTION_TYPE: "SVN",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$47850.86",
    BALANCE_DUE: "$83534.18",
  },
  {
    DATE: "10/14/2022",
    INVOICE_NUMBER: 81,
    PARTY_NAME: "Yozio",
    TRANSACTION_TYPE: "QGQ",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$89816.82",
    BALANCE_DUE: "$43629.35",
  },
  {
    DATE: "5/8/2022",
    INVOICE_NUMBER: 75,
    PARTY_NAME: "Twimm",
    TRANSACTION_TYPE: "BMH",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$2852.34",
    BALANCE_DUE: "$22294.63",
  },
  {
    DATE: "3/5/2022",
    INVOICE_NUMBER: 52,
    PARTY_NAME: "Tazzy",
    TRANSACTION_TYPE: "CRB",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$16737.11",
    BALANCE_DUE: "$90657.71",
  },
  {
    DATE: "11/13/2022",
    INVOICE_NUMBER: 27,
    PARTY_NAME: "Gabspot",
    TRANSACTION_TYPE: "LOW",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$9467.88",
    BALANCE_DUE: "$67306.73",
  },
  {
    DATE: "9/23/2022",
    INVOICE_NUMBER: 6,
    PARTY_NAME: "Yamia",
    TRANSACTION_TYPE: "VVO",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$16604.98",
    BALANCE_DUE: "$59409.34",
  },
  {
    DATE: "2/16/2022",
    INVOICE_NUMBER: 90,
    PARTY_NAME: "Roombo",
    TRANSACTION_TYPE: "DNP",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$59758.85",
    BALANCE_DUE: "$56760.63",
  },
  {
    DATE: "8/28/2022",
    INVOICE_NUMBER: 32,
    PARTY_NAME: "Eire",
    TRANSACTION_TYPE: "JUV",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$84204.63",
    BALANCE_DUE: "$94878.49",
  },
  {
    DATE: "4/21/2022",
    INVOICE_NUMBER: 78,
    PARTY_NAME: "Riffpath",
    TRANSACTION_TYPE: "NZY",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$38611.72",
    BALANCE_DUE: "$54129.96",
  },
  {
    DATE: "8/16/2022",
    INVOICE_NUMBER: 76,
    PARTY_NAME: "Fadeo",
    TRANSACTION_TYPE: "AHY",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$33428.45",
    BALANCE_DUE: "$86651.36",
  },
  {
    DATE: "2/4/2022",
    INVOICE_NUMBER: 19,
    PARTY_NAME: "Wordware",
    TRANSACTION_TYPE: "0",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$47623.70",
    BALANCE_DUE: "$56260.74",
  },
  {
    DATE: "5/31/2022",
    INVOICE_NUMBER: 4,
    PARTY_NAME: "InnoZ",
    TRANSACTION_TYPE: "GBP",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$59308.28",
    BALANCE_DUE: "$5817.66",
  },
  {
    DATE: "12/23/2022",
    INVOICE_NUMBER: 66,
    PARTY_NAME: "Vidoo",
    TRANSACTION_TYPE: "KHJ",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$6797.18",
    BALANCE_DUE: "$55894.50",
  },
  {
    DATE: "8/21/2022",
    INVOICE_NUMBER: 5,
    PARTY_NAME: "Eamia",
    TRANSACTION_TYPE: "STK",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$27885.56",
    BALANCE_DUE: "$85087.00",
  },
  {
    DATE: "6/25/2022",
    INVOICE_NUMBER: 2,
    PARTY_NAME: "Yombu",
    TRANSACTION_TYPE: "PTC",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$72761.34",
    BALANCE_DUE: "$67851.88",
  },
  {
    DATE: "6/8/2022",
    INVOICE_NUMBER: 59,
    PARTY_NAME: "Rhynyx",
    TRANSACTION_TYPE: "LYU",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$57951.45",
    BALANCE_DUE: "$27038.50",
  },
  {
    DATE: "11/15/2022",
    INVOICE_NUMBER: 37,
    PARTY_NAME: "Kanoodle",
    TRANSACTION_TYPE: "YHY",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$33801.20",
    BALANCE_DUE: "$93724.03",
  },
  {
    DATE: "2/10/2022",
    INVOICE_NUMBER: 75,
    PARTY_NAME: "Mydo",
    TRANSACTION_TYPE: "JAS",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$6785.44",
    BALANCE_DUE: "$24679.58",
  },
  {
    DATE: "1/10/2022",
    INVOICE_NUMBER: 76,
    PARTY_NAME: "Feednation",
    TRANSACTION_TYPE: "MSA",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$20865.47",
    BALANCE_DUE: "$35826.59",
  },
  {
    DATE: "9/14/2022",
    INVOICE_NUMBER: 66,
    PARTY_NAME: "Tazz",
    TRANSACTION_TYPE: "YSV",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$4854.97",
    BALANCE_DUE: "$85004.18",
  },
  {
    DATE: "8/12/2022",
    INVOICE_NUMBER: 21,
    PARTY_NAME: "Mybuzz",
    TRANSACTION_TYPE: "ZLR",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$35182.74",
    BALANCE_DUE: "$98188.95",
  },
  {
    DATE: "6/7/2022",
    INVOICE_NUMBER: 43,
    PARTY_NAME: "Tekfly",
    TRANSACTION_TYPE: "KHG",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$19775.72",
    BALANCE_DUE: "$35731.69",
  },
  {
    DATE: "8/4/2022",
    INVOICE_NUMBER: 18,
    PARTY_NAME: "Jabbertype",
    TRANSACTION_TYPE: "NOV",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$40990.67",
    BALANCE_DUE: "$79530.90",
  },
  {
    DATE: "7/8/2022",
    INVOICE_NUMBER: 1,
    PARTY_NAME: "Centizu",
    TRANSACTION_TYPE: "ARK",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$72980.68",
    BALANCE_DUE: "$24543.41",
  },
];
