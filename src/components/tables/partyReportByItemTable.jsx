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

export const PartyReportByItemTable = (props) => {
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

            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              PARTY NAME
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              SALE QUANTITY
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              SALE AMOUNT
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              PURCHASE QUANTITY
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              PURCHASE AMOUNT
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow>
              <TableCell sx={{ fontSize: 12 }}>{row.S_NO}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.PARTY_NAME}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.SALE_QUANTITY}</TableCell>

              <TableCell sx={{ fontSize: 12 }}>{row.SALE_AMOUNT}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>
                {row.PURCHASE_QUANTITY}
              </TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.PURCHASE_AMOUNT}</TableCell>
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
    PARTY_NAME: "Terrell Scampion",
    SALE_QUANTITY: "3",
    SALE_AMOUNT: "6",
    PURCHASE_QUANTITY: "3",
    PURCHASE_AMOUNT: "6",
  },
];
