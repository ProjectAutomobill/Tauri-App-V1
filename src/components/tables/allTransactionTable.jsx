import React, { useEffect, useState } from "react";
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
import { invoke } from "@tauri-apps/api";

export const AllTransactionTable = (props) => {
  const [data, setData] = useState();

  //   useEffect(() => {
  //     // componentDidMount1();
  //     invoke("get_paymentIn_data", {
  //       number: props.userNumber,
  //       company: props.userCompany,
  //     })
  //       // `invoke` returns a Promise
  //       .then((response) => {
  //         setData(JSON.parse(response));
  //       });
  //   }, []);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>S_NO</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>DATE</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              REF NO.
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              PARTY NAME
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              CATEGORY
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>TYPE</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>TOTAL</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              RECEIVED/PAID
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              BALANCE
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>PRINT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow>
              <TableCell sx={{ fontSize: 12 }}>{row.S_NO}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.Date}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.ReceiptNo}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.PartyName}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.CATEGORY}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.TransactionType}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>100</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.Received}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>100</TableCell>
              <TableCell sx={{ fontSize: 12, color: "black", fontWeight: 100 }}>
                Print
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const dataTable = [
  {
    S_NO: "1",
    DATE: "1/10/2023",
    REF_NO: 1,
    PARTY_NAME: "Terrell Scampion",
    CATEGORY: "Construction Clean and Final Clean",
    TYPE: "Sale",
    TOTAL: 6,
    RECEIVED: 26,
    BALANCE: 44,
    PRINT: "video/msvideo",
  },
];
