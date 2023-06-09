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

export const ChequesTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>TYPE</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>NAME</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>
              REF NO.
            </TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>DATE</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>AMOUNT</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>STATUS</TableCell>
            <TableCell sx={{ fontWeight: 570, fontSize: 12 }}>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.map((row) => (
            <TableRow>
              <TableCell sx={{ fontSize: 12 }}>{row.TYPE}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.NAME}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.REF}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.DATE}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.AMOUNT}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.STATUS}</TableCell>
              <TableCell sx={{ fontSize: 12 }}>{row.ACTION}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const dataTable = [
  {
    TYPE: "Sale",
    NAME: "Georgel",
    DATE: "9/10/2010",
    AMOUNT: 195,
    STATUS: "Open",
    ACTION: "WITHDRAW",
  },
  {
    TYPE: "Sale",
    NAME: "cool data",
    DATE: "8/26/2019",
    AMOUNT: 1100,
    STATUS: "Open",
    ACTION: "WITHDRAW",
  },
  {
    TYPE: "purchase",
    NAME: "Maximilian Georgel",
    DATE: "4/15/2032",
    AMOUNT: 150,
    STATUS: "Closed",
    ACTION: "WITHDRAW",
  },
];
