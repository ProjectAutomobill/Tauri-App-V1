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
import "./transactionTable.css";

export const PartyStatementTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              DATE
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              TXN TYPE
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              REF NO.
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              PAYMENT
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              TOTAL
            </TableCell>

            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              RECEIVED
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              TXN BALANCE
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              RECEIVABLE BALANCE
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              PAYABLE BALANCE
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              PRINT
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.map((row) => (
            <TableRow>
              <TableCell sx={{ fontSize: 12 }}>{row.DATE}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.TXN_TYPE}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.REF_NO}</TableCell>

              <TableCell sx={{ fontSize: 12 }}>{row.PAYMENT_TYPE}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.TOTAL}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.RECEIVED}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.TXN_BALANCE}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>
                {row.RECEIVABLE_BALANCE}
              </TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.PAYABLE_BALANCE}</TableCell>

              <TableCell sx={{ fontSize: 12 }}>{row.PRINT}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const dataTable = [
  {
    DATE: "10th July",
    TXN_TYPE: " CREDIT",
    REF_NO: "4",
    PAYMENT_TYPE: "$5356",
    TOTAL: "$5356",
    RECEIVED: "$5356",
    TXN_BALANCE: "$5356",
    RECEIVABLE_BALANCE: "$5356",
    PAYABLE_BALANCE: "$5356",
    PRINT: "$5356",
  },
];
