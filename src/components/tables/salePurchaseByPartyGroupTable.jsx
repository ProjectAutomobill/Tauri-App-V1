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

export const SalePurchaseByPartyGroupTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              GROUP NAME
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              SALE AMOUNT
            </TableCell>

            <TableCell sx={{ fontWeight: 570, fontSize: 12, color: "gray" }}>
              PURCHASE AMOUNT
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.map((row) => (
            <TableRow>
              <TableCell sx={{ fontSize: 12 }}>{row.PARTY_NAME}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.SALE_AMOUNT}</TableCell>

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
    PARTY_NAME: "JATIN",
    SALE_AMOUNT: "64534",
    PURCHASE_AMOUNT: "$5356",
  },
];
