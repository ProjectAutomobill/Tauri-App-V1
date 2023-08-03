import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { invoke } from "@tauri-apps/api";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import "./transactionTable.css";
import LoadingSpinner from "../../loading";
import { FiFilter } from "react-icons/fi";
import { AiFillPrinter } from "react-icons/ai";
import { TiArrowForward } from "react-icons/ti";

export const PurchaseBillsTable = (props) => {
  const [dataPurchase, setPurchaseData] = useState();

  useEffect(() => {
    // getSaleTransactions();
    invoke("get_purchase_transaction", {
      number: props.userNumber,
      company: props.userCompany,
    }).then((response) => {
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
      setPurchaseData(JSON.parse(response));
      console.log(JSON.parse(response));
    });
  }, []);
  return (
    <div className="saleInvoiceTable-table">
      {dataPurchase == null && <LoadingSpinner className="loading_spinner" />}

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
                }}
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
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
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
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
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
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
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
                  borderRight: "1px solid rgb(230, 230, 230)",
                }}
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
                }}
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
            </TableRow>
          </TableHead>
          <TableBody>
            {dataPurchase?.map(
              (row) =>
                (row.PartyName.includes(props.searchText) ||
                  (props.searchText != null &&
                    props.searchText.length == 0)) && (
                  <TableRow>
                    <TableCell
                      sx={{
                        fontSize: 12,
                        borderRight: "1px solid rgb(230, 230, 230)",
                      }}
                    >
                      {row.Date}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: 12,
                        textAlign: "right",
                        borderRight: "1px solid rgb(230, 230, 230)",
                      }}
                    >
                      {row.Invoice_No}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: 12,
                        borderRight: "1px solid rgb(230, 230, 230)",
                      }}
                    >
                      {row.PartyName}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: 12,
                        borderRight: "1px solid rgb(230, 230, 230)",
                      }}
                    >
                      {row.Payment_Type}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: 12,
                        textAlign: "right",
                        borderRight: "1px solid rgb(230, 230, 230)",
                      }}
                    >
                      {row.Total}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: 12,
                        color: "black",
                        fontWeight: 100,
                        textAlign: "right",
                        borderRight: "1px solid rgb(230, 230, 230)",
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
    DATE: "4/21/2022",
    INVOICE_NUMBER: 2,
    PARTY_NAME: "Fiveclub",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$84568.66",
    BALANCE_DUE: "$11332.06",
  },
  {
    DATE: "7/29/2022",
    INVOICE_NUMBER: 29,
    PARTY_NAME: "Bubblebox",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$68708.22",
    BALANCE_DUE: "$45315.35",
  },
  {
    DATE: "1/1/2022",
    INVOICE_NUMBER: 80,
    PARTY_NAME: "Reallinks",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$85476.81",
    BALANCE_DUE: "$14804.76",
  },
  {
    DATE: "10/22/2022",
    INVOICE_NUMBER: 64,
    PARTY_NAME: "Blogpad",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$70474.28",
    BALANCE_DUE: "$90230.38",
  },
  {
    DATE: "6/22/2022",
    INVOICE_NUMBER: 74,
    PARTY_NAME: "Livetube",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$28641.35",
    BALANCE_DUE: "$47952.41",
  },
  {
    DATE: "12/10/2022",
    INVOICE_NUMBER: 1,
    PARTY_NAME: "Yodel",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$47954.94",
    BALANCE_DUE: "$7994.84",
  },
  {
    DATE: "6/2/2022",
    INVOICE_NUMBER: 93,
    PARTY_NAME: "Podcat",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$6309.85",
    BALANCE_DUE: "$38384.47",
  },
  {
    DATE: "1/12/2022",
    INVOICE_NUMBER: 58,
    PARTY_NAME: "Aimbu",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$99458.54",
    BALANCE_DUE: "$3337.93",
  },
  {
    DATE: "11/14/2022",
    INVOICE_NUMBER: 75,
    PARTY_NAME: "Aimbo",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$72998.26",
    BALANCE_DUE: "$41274.53",
  },
  {
    DATE: "8/15/2022",
    INVOICE_NUMBER: 12,
    PARTY_NAME: "Yodoo",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$99680.39",
    BALANCE_DUE: "$95343.01",
  },
  {
    DATE: "1/11/2022",
    INVOICE_NUMBER: 19,
    PARTY_NAME: "Skinix",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$89310.99",
    BALANCE_DUE: "$42754.70",
  },
  {
    DATE: "1/11/2022",
    INVOICE_NUMBER: 53,
    PARTY_NAME: "Trudoo",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$30502.56",
    BALANCE_DUE: "$15500.53",
  },
  {
    DATE: "7/4/2022",
    INVOICE_NUMBER: 86,
    PARTY_NAME: "Zoombeat",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$29362.13",
    BALANCE_DUE: "$9837.49",
  },
  {
    DATE: "4/21/2022",
    INVOICE_NUMBER: 48,
    PARTY_NAME: "Mynte",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$39487.79",
    BALANCE_DUE: "$17850.26",
  },
  {
    DATE: "10/18/2022",
    INVOICE_NUMBER: 58,
    PARTY_NAME: "Tekfly",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$6927.96",
    BALANCE_DUE: "$85416.90",
  },
  {
    DATE: "1/21/2022",
    INVOICE_NUMBER: 76,
    PARTY_NAME: "Flipopia",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$62986.75",
    BALANCE_DUE: "$13973.98",
  },
  {
    DATE: "6/1/2022",
    INVOICE_NUMBER: 40,
    PARTY_NAME: "Flashpoint",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$36390.64",
    BALANCE_DUE: "$61136.84",
  },
  {
    DATE: "3/28/2022",
    INVOICE_NUMBER: 93,
    PARTY_NAME: "Twiyo",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$92712.83",
    BALANCE_DUE: "$67573.82",
  },
  {
    DATE: "2/23/2022",
    INVOICE_NUMBER: 4,
    PARTY_NAME: "DabZ",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$27667.96",
    BALANCE_DUE: "$52778.00",
  },
  {
    DATE: "5/7/2022",
    INVOICE_NUMBER: 50,
    PARTY_NAME: "Miboo",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$48964.35",
    BALANCE_DUE: "$1918.90",
  },
  {
    DATE: "11/18/2022",
    INVOICE_NUMBER: 85,
    PARTY_NAME: "Kamba",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$84576.78",
    BALANCE_DUE: "$5922.62",
  },
  {
    DATE: "1/19/2022",
    INVOICE_NUMBER: 89,
    PARTY_NAME: "Wikido",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$42104.18",
    BALANCE_DUE: "$76440.95",
  },
  {
    DATE: "7/14/2022",
    INVOICE_NUMBER: 92,
    PARTY_NAME: "Divape",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$62414.65",
    BALANCE_DUE: "$412.88",
  },
  {
    DATE: "7/19/2022",
    INVOICE_NUMBER: 99,
    PARTY_NAME: "Twiyo",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$732.49",
    BALANCE_DUE: "$31766.15",
  },
  {
    DATE: "6/17/2022",
    INVOICE_NUMBER: 32,
    PARTY_NAME: "Trudeo",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$1646.09",
    BALANCE_DUE: "$36141.25",
  },
  {
    DATE: "3/17/2022",
    INVOICE_NUMBER: 79,
    PARTY_NAME: "Buzzdog",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$55617.18",
    BALANCE_DUE: "$24013.74",
  },
  {
    DATE: "3/2/2022",
    INVOICE_NUMBER: 37,
    PARTY_NAME: "Ntag",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$21526.68",
    BALANCE_DUE: "$97407.67",
  },
  {
    DATE: "4/8/2022",
    INVOICE_NUMBER: 41,
    PARTY_NAME: "Roodel",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$81593.60",
    BALANCE_DUE: "$80260.62",
  },
  {
    DATE: "10/20/2022",
    INVOICE_NUMBER: 26,
    PARTY_NAME: "Yodel",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$4302.99",
    BALANCE_DUE: "$27197.73",
  },
  {
    DATE: "11/5/2022",
    INVOICE_NUMBER: 21,
    PARTY_NAME: "Topiczoom",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$99433.58",
    BALANCE_DUE: "$63093.88",
  },
  {
    DATE: "4/8/2022",
    INVOICE_NUMBER: 70,
    PARTY_NAME: "Yamia",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$50176.97",
    BALANCE_DUE: "$97385.56",
  },
  {
    DATE: "12/15/2022",
    INVOICE_NUMBER: 60,
    PARTY_NAME: "Zoovu",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$16726.51",
    BALANCE_DUE: "$5370.16",
  },
  {
    DATE: "8/28/2022",
    INVOICE_NUMBER: 82,
    PARTY_NAME: "Abatz",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$55129.52",
    BALANCE_DUE: "$50947.07",
  },
  {
    DATE: "6/6/2022",
    INVOICE_NUMBER: 98,
    PARTY_NAME: "Jamia",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$52570.77",
    BALANCE_DUE: "$70983.04",
  },
  {
    DATE: "12/25/2022",
    INVOICE_NUMBER: 50,
    PARTY_NAME: "Thoughtstorm",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$99173.10",
    BALANCE_DUE: "$58693.75",
  },
  {
    DATE: "6/9/2022",
    INVOICE_NUMBER: 14,
    PARTY_NAME: "Skiptube",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$60933.16",
    BALANCE_DUE: "$56251.80",
  },
  {
    DATE: "2/15/2022",
    INVOICE_NUMBER: 84,
    PARTY_NAME: "Babbleblab",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$45121.40",
    BALANCE_DUE: "$42884.52",
  },
  {
    DATE: "11/9/2022",
    INVOICE_NUMBER: 94,
    PARTY_NAME: "Topiczoom",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$38476.63",
    BALANCE_DUE: "$43021.55",
  },
  {
    DATE: "12/8/2022",
    INVOICE_NUMBER: 54,
    PARTY_NAME: "Edgewire",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$84521.43",
    BALANCE_DUE: "$94802.70",
  },
  {
    DATE: "8/30/2022",
    INVOICE_NUMBER: 7,
    PARTY_NAME: "Shufflester",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$11477.04",
    BALANCE_DUE: "$76627.40",
  },
  {
    DATE: "2/12/2022",
    INVOICE_NUMBER: 22,
    PARTY_NAME: "Voolith",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$89056.17",
    BALANCE_DUE: "$10848.18",
  },
  {
    DATE: "1/24/2022",
    INVOICE_NUMBER: 88,
    PARTY_NAME: "Skalith",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$21930.65",
    BALANCE_DUE: "$36646.18",
  },
  {
    DATE: "5/4/2022",
    INVOICE_NUMBER: 10,
    PARTY_NAME: "Jayo",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$8285.95",
    BALANCE_DUE: "$70226.39",
  },
  {
    DATE: "7/13/2022",
    INVOICE_NUMBER: 71,
    PARTY_NAME: "Vinder",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$60303.62",
    BALANCE_DUE: "$41491.75",
  },
  {
    DATE: "8/13/2022",
    INVOICE_NUMBER: 27,
    PARTY_NAME: "Trudeo",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$6591.98",
    BALANCE_DUE: "$6491.53",
  },
  {
    DATE: "4/11/2022",
    INVOICE_NUMBER: 50,
    PARTY_NAME: "Yata",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$28900.89",
    BALANCE_DUE: "$32837.10",
  },
  {
    DATE: "4/13/2022",
    INVOICE_NUMBER: 89,
    PARTY_NAME: "Cogibox",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$33921.32",
    BALANCE_DUE: "$91306.85",
  },
  {
    DATE: "11/1/2022",
    INVOICE_NUMBER: 97,
    PARTY_NAME: "Wikizz",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$89828.17",
    BALANCE_DUE: "$78785.50",
  },
  {
    DATE: "12/10/2022",
    INVOICE_NUMBER: 18,
    PARTY_NAME: "Voomm",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$81363.33",
    BALANCE_DUE: "$41194.52",
  },
  {
    DATE: "10/3/2022",
    INVOICE_NUMBER: 1,
    PARTY_NAME: "Snaptags",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$90704.61",
    BALANCE_DUE: "$34859.67",
  },
  {
    DATE: "8/8/2022",
    INVOICE_NUMBER: 71,
    PARTY_NAME: "Skippad",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$59111.88",
    BALANCE_DUE: "$79539.60",
  },
  {
    DATE: "5/6/2022",
    INVOICE_NUMBER: 95,
    PARTY_NAME: "Kaymbo",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$72691.25",
    BALANCE_DUE: "$65622.20",
  },
  {
    DATE: "11/12/2022",
    INVOICE_NUMBER: 45,
    PARTY_NAME: "Photobean",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$55812.28",
    BALANCE_DUE: "$29369.22",
  },
  {
    DATE: "4/24/2022",
    INVOICE_NUMBER: 32,
    PARTY_NAME: "Demivee",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$50446.08",
    BALANCE_DUE: "$27584.73",
  },
  {
    DATE: "11/29/2022",
    INVOICE_NUMBER: 51,
    PARTY_NAME: "Lazz",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$27472.90",
    BALANCE_DUE: "$33767.09",
  },
  {
    DATE: "5/20/2022",
    INVOICE_NUMBER: 40,
    PARTY_NAME: "Omba",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$42438.98",
    BALANCE_DUE: "$60774.77",
  },
  {
    DATE: "11/18/2022",
    INVOICE_NUMBER: 93,
    PARTY_NAME: "Twitterbridge",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$49619.34",
    BALANCE_DUE: "$95330.13",
  },
  {
    DATE: "12/26/2022",
    INVOICE_NUMBER: 50,
    PARTY_NAME: "Pixoboo",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$96163.79",
    BALANCE_DUE: "$80539.85",
  },
  {
    DATE: "8/14/2022",
    INVOICE_NUMBER: 66,
    PARTY_NAME: "Meetz",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$38352.42",
    BALANCE_DUE: "$189.39",
  },
  {
    DATE: "12/5/2022",
    INVOICE_NUMBER: 79,
    PARTY_NAME: "Skinder",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$47481.04",
    BALANCE_DUE: "$66743.80",
  },
  {
    DATE: "3/6/2022",
    INVOICE_NUMBER: 29,
    PARTY_NAME: "Photospace",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$44741.51",
    BALANCE_DUE: "$7561.22",
  },
  {
    DATE: "6/11/2022",
    INVOICE_NUMBER: 89,
    PARTY_NAME: "Tagcat",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$4203.39",
    BALANCE_DUE: "$41076.86",
  },
  {
    DATE: "7/7/2022",
    INVOICE_NUMBER: 4,
    PARTY_NAME: "Tagopia",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$97077.13",
    BALANCE_DUE: "$43275.27",
  },
  {
    DATE: "9/15/2022",
    INVOICE_NUMBER: 67,
    PARTY_NAME: "Thoughtstorm",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$88575.72",
    BALANCE_DUE: "$74516.62",
  },
  {
    DATE: "3/29/2022",
    INVOICE_NUMBER: 30,
    PARTY_NAME: "Dabjam",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$33337.47",
    BALANCE_DUE: "$78638.96",
  },
  {
    DATE: "8/19/2022",
    INVOICE_NUMBER: 19,
    PARTY_NAME: "Kwinu",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$66005.27",
    BALANCE_DUE: "$33554.57",
  },
  {
    DATE: "12/3/2022",
    INVOICE_NUMBER: 4,
    PARTY_NAME: "Roodel",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$56484.09",
    BALANCE_DUE: "$69473.59",
  },
  {
    DATE: "6/30/2022",
    INVOICE_NUMBER: 64,
    PARTY_NAME: "Bluejam",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$50577.25",
    BALANCE_DUE: "$55447.10",
  },
  {
    DATE: "10/30/2022",
    INVOICE_NUMBER: 74,
    PARTY_NAME: "Blognation",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$25645.16",
    BALANCE_DUE: "$89058.69",
  },
  {
    DATE: "9/12/2022",
    INVOICE_NUMBER: 55,
    PARTY_NAME: "Yambee",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$35071.47",
    BALANCE_DUE: "$5050.17",
  },
  {
    DATE: "2/3/2022",
    INVOICE_NUMBER: 30,
    PARTY_NAME: "Geba",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$59805.78",
    BALANCE_DUE: "$39379.54",
  },
  {
    DATE: "6/25/2022",
    INVOICE_NUMBER: 75,
    PARTY_NAME: "Yodoo",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$25846.06",
    BALANCE_DUE: "$13315.03",
  },
  {
    DATE: "3/17/2022",
    INVOICE_NUMBER: 54,
    PARTY_NAME: "Rhyzio",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$51248.05",
    BALANCE_DUE: "$66027.16",
  },
  {
    DATE: "6/1/2022",
    INVOICE_NUMBER: 75,
    PARTY_NAME: "Edgepulse",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$72273.58",
    BALANCE_DUE: "$7215.42",
  },
  {
    DATE: "8/29/2022",
    INVOICE_NUMBER: 40,
    PARTY_NAME: "Lazz",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$93771.16",
    BALANCE_DUE: "$83340.22",
  },
  {
    DATE: "8/2/2022",
    INVOICE_NUMBER: 53,
    PARTY_NAME: "Wikizz",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$5946.34",
    BALANCE_DUE: "$138.26",
  },
  {
    DATE: "6/9/2022",
    INVOICE_NUMBER: 98,
    PARTY_NAME: "Tavu",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$10243.89",
    BALANCE_DUE: "$76456.33",
  },
  {
    DATE: "7/2/2022",
    INVOICE_NUMBER: 36,
    PARTY_NAME: "Topicblab",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$77641.68",
    BALANCE_DUE: "$39787.97",
  },
  {
    DATE: "11/18/2022",
    INVOICE_NUMBER: 61,
    PARTY_NAME: "Eayo",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$19924.00",
    BALANCE_DUE: "$98666.31",
  },
  {
    DATE: "6/15/2022",
    INVOICE_NUMBER: 94,
    PARTY_NAME: "Jabbercube",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$76095.36",
    BALANCE_DUE: "$88397.58",
  },
  {
    DATE: "8/25/2022",
    INVOICE_NUMBER: 5,
    PARTY_NAME: "Jaxspan",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$48781.10",
    BALANCE_DUE: "$82306.19",
  },
  {
    DATE: "11/16/2022",
    INVOICE_NUMBER: 57,
    PARTY_NAME: "Bluejam",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$14372.39",
    BALANCE_DUE: "$94783.24",
  },
  {
    DATE: "2/11/2022",
    INVOICE_NUMBER: 45,
    PARTY_NAME: "Ainyx",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$84282.88",
    BALANCE_DUE: "$67369.36",
  },
  {
    DATE: "5/5/2022",
    INVOICE_NUMBER: 94,
    PARTY_NAME: "Gigabox",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$67240.24",
    BALANCE_DUE: "$64561.40",
  },
  {
    DATE: "7/24/2022",
    INVOICE_NUMBER: 46,
    PARTY_NAME: "Meemm",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$80280.07",
    BALANCE_DUE: "$40856.70",
  },
  {
    DATE: "12/9/2022",
    INVOICE_NUMBER: 21,
    PARTY_NAME: "Mycat",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$56243.09",
    BALANCE_DUE: "$13663.99",
  },
  {
    DATE: "4/14/2022",
    INVOICE_NUMBER: 92,
    PARTY_NAME: "Pixonyx",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$79771.09",
    BALANCE_DUE: "$92526.67",
  },
  {
    DATE: "3/9/2022",
    INVOICE_NUMBER: 88,
    PARTY_NAME: "Dazzlesphere",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$1454.66",
    BALANCE_DUE: "$2776.40",
  },
  {
    DATE: "2/26/2022",
    INVOICE_NUMBER: 97,
    PARTY_NAME: "Fivebridge",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$31163.71",
    BALANCE_DUE: "$71738.97",
  },
  {
    DATE: "1/19/2022",
    INVOICE_NUMBER: 83,
    PARTY_NAME: "Brainbox",
    "PAYMENT_TYPE ": "AS",
    AMOUNT: "$11565.04",
    BALANCE_DUE: "$70938.23",
  },
  {
    DATE: "3/9/2022",
    INVOICE_NUMBER: 9,
    PARTY_NAME: "Bubblebox",
    "PAYMENT_TYPE ": "SA",
    AMOUNT: "$91287.26",
    BALANCE_DUE: "$2276.24",
  },
  {
    DATE: "6/23/2022",
    INVOICE_NUMBER: 70,
    PARTY_NAME: "Skyble",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$81148.50",
    BALANCE_DUE: "$85007.37",
  },
  {
    DATE: "2/16/2022",
    INVOICE_NUMBER: 70,
    PARTY_NAME: "Bubblebox",
    "PAYMENT_TYPE ": "OC",
    AMOUNT: "$33682.12",
    BALANCE_DUE: "$5650.93",
  },
  {
    DATE: "6/28/2022",
    INVOICE_NUMBER: 55,
    PARTY_NAME: "Pixonyx",
    "PAYMENT_TYPE ": "EU",
    AMOUNT: "$61078.85",
    BALANCE_DUE: "$42103.01",
  },
  {
    DATE: "6/14/2022",
    INVOICE_NUMBER: 60,
    PARTY_NAME: "Twinte",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$55777.41",
    BALANCE_DUE: "$74497.01",
  },
  {
    DATE: "1/1/2022",
    INVOICE_NUMBER: 45,
    PARTY_NAME: "Devcast",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$68814.98",
    BALANCE_DUE: "$39257.06",
  },
  {
    DATE: "12/14/2022",
    INVOICE_NUMBER: 99,
    PARTY_NAME: "Bluezoom",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$48663.69",
    BALANCE_DUE: "$46352.40",
  },
  {
    DATE: "12/6/2022",
    INVOICE_NUMBER: 96,
    PARTY_NAME: "Yadel",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$72816.78",
    BALANCE_DUE: "$31321.66",
  },
  {
    DATE: "10/15/2022",
    INVOICE_NUMBER: 48,
    PARTY_NAME: "Oyoyo",
    "PAYMENT_TYPE ": "NA",
    AMOUNT: "$11272.49",
    BALANCE_DUE: "$15523.44",
  },
  {
    DATE: "9/16/2022",
    INVOICE_NUMBER: 30,
    PARTY_NAME: "Oodoo",
    "PAYMENT_TYPE ": "AF",
    AMOUNT: "$90282.99",
    BALANCE_DUE: "$61159.60",
  },
];
