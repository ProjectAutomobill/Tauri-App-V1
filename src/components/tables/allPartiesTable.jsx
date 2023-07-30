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

export const AllPartiesTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              S_NO
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              PARTY NAME
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              EMAIL
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              PHONE NO.
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              RECEIVABLE BALANCE
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              PAYABLE BALANCE
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              CREDIT LIMIT
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.map((row) => (
            <TableRow>
              <TableCell sx={{ fontSize: 12 }}>{row.S_NO}</TableCell>

              <TableCell sx={{ fontSize: 12 }}>{row.PARTY_NAME}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.EMAIL}</TableCell>

              <TableCell sx={{ fontSize: 12 }}>{row.PHONE_NO}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>
                {row.RECEIVABLE_BALANCE}
              </TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.PAYABLE_BALANCE}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.CREDIT_LIMIT}</TableCell>
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
    PARTY_NAME: "JATIN",
    EMAIL: "JBANSAL12090@GMAIL.COM",
    PHONE_NO: 2,
    RECEIVABLE_BALANCE: "64534",
    PAYABLE_BALANCE: "$5356",
    CREDIT_LIMIT: "$84568.66",
  },
];
